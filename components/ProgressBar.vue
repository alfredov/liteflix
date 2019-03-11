<template>
  <div class="wrapper">
    <span class="loading-text">
      <span class="loading-text-error" v-if="wasCancelled">Error!</span>
      {{ loadingMessage }}
      </span>
    <progress ref="progress" value="0" max="100"></progress>
    <div class="message-box">
      <div @click="clearProgress" v-if="message && linkMessage" tabindex="0" role="button" class="link-message">{{ linkMessage }}</div>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      clearProgress() {
        this.$emit('clear')
      }
    },
    data() {
      return {
        value: 0
      }
    },
    computed: {
      loadingMessage() {
        return this.wasCancelled ? this.message :`Cargando ${this.value} %`
      }
    },
    props: {
      interval: Number,
      message: String,
      linkMessage: String,
      wasCancelled: Boolean
    },
    mounted() {
      let tick = setInterval(() => {
        if (this.wasCancelled) {
          this.$refs.progress.value = 0
          clearInterval(tick)
        } else {
          this.value = this.value + 1
          this.$refs.progress.value = this.value
          if (this.value == 100) clearInterval(tick)
        }
      }, this.interval);
    }
  }
</script>

<style scoped>
  progress[value] {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 20px;
    margin: 10px 0;

    border-radius: 10px;
  }
  progress[value]::-webkit-progress-bar {
    background-color: #DEDEDE;
    border-radius: 10px;
  }

  progress[value]::-webkit-progress-value {
    border-radius: 10px;
    background: #7ED321;
  }

  progress[value]::-moz-progress-bar {
    background: #7ED321;
    border-radius: 10px;
  }

  .wrapper {
    background: #F3F3F3;
    color: #000;
    height: 102px;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 0 20px;
  }

  .link-message {
    align-self: center;
    color: #0076FF;
    font-size: 15px;
    cursor: pointer;
  }

  .loading-text {
    font-size: 15px;
  }

  .loading-text-error {
    font-weight: bold;
  }

  .message-box {
    width: 100%;
  }
</style>