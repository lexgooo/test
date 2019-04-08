<template>
    <div class="demo">
       <!-- <pdf src="../assets/test.pdf"></pdf> -->
       <pdf :src="src">
            <template slot="loading">
            loading content here...
            </template>
        </pdf>
    </div>
</template>
<script>
import pdf from 'pdfvuer'

export default {
  components: {
    pdf
  },
  data () {
      return {
          src: 'http://static.uat.daoyitong.com/group1/M00/00/17/wKgAKlwl33uAdigRAAGUaSQCNdI525.pdf'
      }
  },
  created() {
      this.src = pdf.createLoadingTask(this.src)
  }
}
</script>
<style lang="postcss">
    .fade-enter-active, .fade-leave-active {
        transition: opacity 2s;
    }
    .fade-enter, .fade-leave-to {
        opacity: 0;
    }
</style>
