<template>
  <section id="skills">
    <b-container fluid>
      <b-row class="pb-4">
        <b-col>
          <h1 class="section-title">
            Conocimientos
          </h1>
        </b-col>
      </b-row>
      <b-row>
        <b-col
          v-for="skill in skills"
          :key="skill.name"
          cols="12"
          sm="4"
          md="4"
          lg="4"
          xl="3"
        >
          <skill-card
            :skill="skill"
          />
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<script>
import SkillCard from '~/layouts/skillCard.vue'

export default {
  components: {
    SkillCard
  },
  data () {
    return {
      skills: []
    }
  },
  created () {
    this.$skillService.all()
      .then((res) => {
        this.skills = res.data.sort((a, b) => ((b.currently * 10) + b.level_of_knowledge) - ((a.currently * 10) + a.level_of_knowledge))
      })
      .catch(() => {
        this.skills = []
      })
  }
}
</script>
