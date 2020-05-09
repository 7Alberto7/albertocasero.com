<template>
  <div>
    <float-menu />
    <home />
    <projects />
    <skills />
    <experience />
    <contact />
    <email-modal />
  </div>
</template>

<script>
import FloatMenu from '~/layouts/floatMenu.vue'
import Home from '~/components/home.vue'
import Projects from '~/components/projects.vue'
import Skills from '~/components/skills.vue'
import Experience from '~/components/experience.vue'
import Contact from '~/components/contact.vue'
import EmailModal from '~/layouts/emailModal.vue'

export default {
  components: {
    FloatMenu,
    Home,
    Projects,
    Skills,
    Experience,
    Contact,
    EmailModal
  }
}
</script>
