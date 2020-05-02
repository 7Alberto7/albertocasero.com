<template>
  <section id="experience">
    <b-container fluid>
      <b-row class="pb-4">
        <b-col>
          <h1 class="section-title">
            Experiencia
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="experience in experiences"
          :key="experience.company"
          cols="12"
        >
          <experience-card
            :experience="experience"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import ExperienceCard from '~/layouts/experienceCard.vue'

export default {
  components: {
    ExperienceCard
  },
  data () {
    return {
      experiences: this.$info.experience
    }
  }
}
</script>
