<template>
  <div>
    <modal v-if="isDesktopScreen" :adaptive="true" width="600" height="300" name="modal-form" :clickToClose="false" :classes="['box-global-modal', 'v--modal']">
      <ModalContent />
    </modal>
    <modal v-else :adaptive="true" width="100%" height="100%" name="modal-form" :clickToClose="false" :classes="['box-global-modal', 'v--modal']">
      <ModalContent />
    </modal>
  </div>
</template>

<script>
  import ModalContent from './ModalContent.vue'
  import { viewportIsRunningInDesktop } from './utils'

  export default {
    data() {
      return {
        isDesktopScreen: viewportIsRunningInDesktop(),
      }
    },
    components: {
      ModalContent
    }
  }
</script>
