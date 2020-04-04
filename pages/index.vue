<template>
  <div>
    <home />
    <projects />
    <skills />
    <experience />
    <contact />
  </div>
</template>

<script>
import Home from '~/components/home.vue'
import Projects from '~/components/projects.vue'
import Skills from '~/components/skills.vue'
import Experience from '~/components/experience.vue'
import Contact from '~/components/contact.vue'

export default {
  components: {
    Home,
    Projects,
    Skills,
    Experience,
    Contact
  }
}
</script>
<style lang="scss">
  @import '~/assets/app.scss';
</style>
