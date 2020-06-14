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
      <b-overlay
        :show="isLoaded"
        variant="primary"
      >
        <b-row>
          <b-col
            v-for="project in projects"
            :key="project.name"
            cols="12"
            sm="6"
            md="6"
            lg="4"
            xl="3"
          >
            <project-card
              :project="project"
            />
          </b-col>
        </b-row>
      </b-overlay>
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
      projects: []
    }
  },
  computed: {
    isLoaded () {
      return !this.projects.length
    }
  },
  created () {
    this.$projectService.all()
      .then((res) => {
        this.projects = res.data.sort((a, b) => b.relevance - a.relevance)
      })
      .catch(() => {
        this.projects = []
      })
  }
}
</script>
