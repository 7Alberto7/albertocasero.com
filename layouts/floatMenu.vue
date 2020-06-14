<template>
  <div>
    <fab
      :main-icon="mainIcon"
      :main-tooltip="mainTooltip"
      :position="position"
      :bg-color="bgColor"
      :actions="fabActions"
      @goHome="goHome"
      @goToProjects="goToProjects"
      @goToSkills="goToSkills"
      @goToJob="goToJob"
    />
  </div>
</template>
<script>
import fab from 'vue-fab'
import styleVars from '~/assets/css/app.scss'

export default {
  components: {
    fab
  },
  data () {
    return {
      bgColor: styleVars.primary,
      mainIcon: 'menu',
      mainTooltip: 'Menú',
      position: 'top-right',
      fabActions: [
        {
          name: 'goHome',
          icon: 'home',
          tooltip: 'Portada'
        },
        {
          name: 'goToProjects',
          icon: 'star',
          tooltip: 'Proyectos'
        },
        {
          name: 'goToSkills',
          icon: 'menu_book',
          tooltip: 'Conocimientos'
        },
        {
          name: 'goToJob',
          icon: 'business_center',
          tooltip: 'Experiencia'
        }
      ]
    }
  },
  methods: {
    goHome () {
      this.$scrollTo('#home')
    },
    goToProjects () {
      this.$scrollTo('#projects')
    },
    goToSkills () {
      this.$scrollTo('#skills')
    },
    goToJob () {
      this.$scrollTo('#job')
    }
  }
}
</script>
<style lang="scss" scoped>
  .close:not(:disabled):not(.disabled):hover,
  .close:not(:disabled):not(.disabled):focus {
    opacity: 0;
  }
</style>
