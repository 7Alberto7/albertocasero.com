<template>
  <section id="jobs">
    <b-container fluid>
      <b-row class="pb-4">
        <b-col>
          <h1 class="section-title">
            Experiencia
          </h1>
        </b-col>
      </b-row>
      <b-overlay
        :show="isLoaded"
        variant="primary"
      >
        <b-row>
          <b-col
            v-for="job in jobs"
            :key="job.company"
            cols="12"
          >
            <job-card
              :job="job"
            />
          </b-col>
        </b-row>
      </b-overlay>
    </b-container>
  </section>
</template>
<script>
import JobCard from '~/layouts/jobCard.vue'

export default {
  components: {
    JobCard
  },
  data () {
    return {
      jobs: []
    }
  },
  computed: {
    isLoaded () {
      return !this.jobs.length
    }
  },
  created () {
    this.$jobService.all()
      .then((res) => {
        this.jobs = res.data
      })
      .catch(() => {
        this.jobs = []
      })
  }
}
</script>
