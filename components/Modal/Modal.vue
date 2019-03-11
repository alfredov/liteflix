<template>
  <modal name="modal-form" :clickToClose="false" :classes="['box-global-modal', 'v--modal']">
    <div v-if="!formSuccess" class="box-modal">
      <span @click="closeModal" tabindex="0" role="button" aria-pressed="false" class="box-close-icon">x</span>
      <ProgressBar v-if="isSaving" :interval="interval" />
      <ProgressBar @clear="reset" v-if="isSuccess" :interval="interval" message="100% Cargado" />
      <ProgressBar :wasCancelled="true" @clear="reset" v-if="isFailed" :interval="interval" :message="uploadError" linkMessage="Reintentar" />
      <div v-if="isInitial" ref="dropArea" id="drop-area" class="box-upload-container">
        <form class="form" enctype="multipart/form-data" novalidate>
          <input
            ref="inputFile"
            type="file"
            multiple
            :name="uploadFieldName"
            :disabled="isSaving"
            @change="filesChange($event.target.name, $event.target.files); fileCount = $event.target.files.length"
            accept="image/*"
            class="input-file"
          />
          <div v-if="isInitial">
            <a @click="chooFile" class="box-upload-link" href="#">
              <img width="15" src="~/assets/img/clip.svg" alt="arrow">
              Agregar archivo
            </a>
            o arrastrarlo y soltarlo aqui
          </div>
        </form>
      </div>
      <div class="box-form">
        <label class="box-form-input" for="">
          <span class="box-form-label">NOMBRE DE LA PELICULA</span>            
          <input required v-model="name" class="box-form-input-value " type="text" />
        </label>
        <label class="box-form-input" for="">
          <span class="box-form-label">CATEGORIA</span>
          <select required v-model="category" class="box-form-select" name="" id="">
            <option v-for="(genre, index) in genres" :value="genre.name" :key="index">{{ genre.name }}</option>
          </select>
        </label>
      </div>
      <button
        @click="addMovie"
        :disabled="isButtonDisabled"
        class="box-button"
        :class="{'button-disabled': isButtonDisabled}"
      >
        Subir pelicula
      </button>
    </div>
    <div v-if="formSuccess" class="box-modal-success">
      <span @click="closeModal" tabindex="0" role="button" aria-pressed="false" class="box-close-icon">x</span>
      <img class="menu-content-logo" width="95" src="~/assets/img/liteflix-icon.svg" alt="logo" />
      <div class="box-modal-content">
        <span class="box-modal-title">Felicitaciones!</span>
        <div>
          <strong>{{ name }}</strong> fue correctamente subido a la categoria <strong>{{ category }}</strong>
        </div>
      </div>
      <button @click="closeModal" class="button-medium-size box-button">Cerrar</button>
    </div>
  </modal>
</template>

<script>
  import { mapGetters } from 'vuex'
  import { upload, wait, delay } from './utils'
  import ProgressBar from '~/components/ProgressBar.vue'

  const STATUS_INITIAL = 0, STATUS_SAVING = 1, STATUS_SUCCESS = 2, STATUS_FAILED = 3
  const delayValue = 1500

  export default {
    data() {
      return {
        name: null,
        category: null,
        uploadedFiles: [],
        uploadError: null,
        currentStatus: null,
        uploadFieldName: 'photos',
        isButtonDisabled: false,
        formSuccess: false
      }
    },
    computed: {
      ...mapGetters({
        genres: 'genres'
      }),
      isInitial() {
        return this.currentStatus === STATUS_INITIAL
      },
      isSaving() {
        return this.currentStatus === STATUS_SAVING
      },
      isSuccess() {
        return this.currentStatus === STATUS_SUCCESS
      },
      isFailed() {
        return this.currentStatus === STATUS_FAILED
      },
      interval() {
        return delayValue / 100;
      }
    },
    methods: {
      chooFile() {
        this.$refs.inputFile.click()
      },
      addMovie() {
        if (this.uploadedFiles.length > 0 && this.name && this.category) {
          this.isButtonDisabled = true

          delay(delayValue).then(() => {
            this.$store.commit('addUpcomingMovie', {
              title: this.name,
              genre: this.category,
              image: this.uploadedFiles[0].url
            })

            this.formSuccess = true
          })
        }
      },
      closeModal() {
        this.reset()
        this.$modal.hide('modal-form')
      },
      reset() {
        this.currentStatus = STATUS_INITIAL
        this.uploadedFiles = []
        this.uploadError = null
        this.formSuccess = false
        this.name = null
        this.category = null
        this.isButtonDisabled = false
      },
      save(formData) {
        this.currentStatus = STATUS_SAVING
        upload(formData)
          .then(wait(delayValue))
          .then(x => {
            this.uploadedFiles = [].concat(x)
            this.currentStatus = STATUS_SUCCESS
          })
          .catch(error => {
            this.uploadError = error
            this.currentStatus = STATUS_FAILED
          })
      },
      filesChange(fieldName, fileList) {
        const formData = new FormData()

        if (!fileList.length) return

        Array
          .from(Array(fileList.length).keys())
          .map(x => {
            formData.append(fieldName, fileList[x], fileList[x].name)
          })

        this.save(formData)
      }
    },
    mounted() {
      this.reset()
    },
    components: {
      ProgressBar
    }
  }
</script>

<style scoped>
  .box-modal-title {
    font-size: 26px;
    margin-bottom: .3em;
    display: block;
  }
  .box-modal-content {
    margin: 30px 0;
    width: 500px;
    font-size: 20px;
    line-height: 28px;
  }
  .box-modal-success {
    height: 100%;
    background: #7ED321;
    padding: 25px;
  }
  .button-disabled {
    background: #979797;
    opacity: .4;
  }

  .input-file {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    width: 558px;
    opacity: 0;
  }

  .form {
    width: 100%;
    height: 100%;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .box-close-icon {
    color: black;
    position: absolute;
    top: 0px;
    right: 0px;
    padding: .4em;
    cursor: pointer;
  }
  .box-upload-link {
    color: #0076FF;
    text-decoration: none;
  }

  .box-modal {
    padding: 30px 20px;
    text-align: center;
  }

  .box-upload-container {
    color: #9B9B9B;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px black dashed;
  }

  .box-upload-container:hover {
    cursor: pointer;
  } 

  .box-form {
    text-align: left;
    color: black;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .box-form-input {
    display: flex;
    flex-direction: column;
    width: 270px;

  }

  .box-form-input-value {
    border: none;
    border-bottom: 1.4px #000 solid;
    height: 20px;
  }

  .box-form-label {
    color: #9B9B9B;
    font-weight: normal;
    font-size: 16px;
  }

  .box-form-select {
    height: 30px;
  }

  .box-button {
    height: 60px;
    width: 280px;
    background: #000;
    color: white;
    font-size: 16px;
    font-weight: normal;
    border-radius: 35px
  }
  .button-medium-size {
    width: 192px;
  }
</style>
