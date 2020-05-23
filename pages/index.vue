<template>
  <div>
    <float-menu />
    <home />
    <projects />
    <skills />
    <experience />
    <contact />
  </div>
</template>

<script>
import FloatMenu from '~/layouts/floatMenu.vue'
import Home from '~/components/home.vue'
import Projects from '~/components/projects.vue'
import Skills from '~/components/skills.vue'
import Experience from '~/components/experience.vue'
import Contact from '~/components/contact.vue'

export default {
  components: {
    FloatMenu,
    Home,
    Projects,
    Skills,
    Experience,
    Contact
  },
  head () {
    return {
      title: 'Alberto Casero',
      meta: [
        { hid: 'description', name: 'description', content: 'Soy Alberto Casero, máster en ingeniería web por la Universidad Politécnica de Madrid, con varios años de experiencia en gestión de proyectos y programación tanto en el lado cliente como en el servidor.' }
      ]
    }
  }
}
</script>
