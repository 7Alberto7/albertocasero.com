<template>
  <section id="projects">
    <b-container fluid>
      <b-row class="pb-4">
        <b-col>
          <h1 class="section-title">
            Proyectos
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col cols="3">
          <project-card
            :project="project"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import ProjectCard from '~/layouts/projectCard.vue'

export default {
  components: {
    ProjectCard
  },
  data () {
    return {
      project: {
        name: 'Electrónica Losdel',
        image: '/img/projects/electronica-losdel.png',
        description: 'Proyecto SPA para la empresa Electrónica Losdel. Aproveché este proyecto para trabajar por primera vez con SEO, Analytics y con mi primer framework PHP, Code Igniter. Además, al realizarlo yo solo, fue mi primera experiencia en toma de requisitos con cliente final.',
        relevance: 4,
        created_at: '2014',
        finished_at: '?',
        skills: [],
        url: 'http://electronicalosdel.com',
        resources: [
          { url: 'https://github.com/7Alberto7/pfmweb', type: 'github' },
          { url: 'https://www.youtube.com/watch?v=IAdDdWE1VVA', type: 'youtube' }
        ]
      }
    }
  }
}
</script>
