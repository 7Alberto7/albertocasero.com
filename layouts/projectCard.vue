<template>
  <b-card
    :title="project.name"
    :img-src="'/img/projects/'+project.image"
    :img-alt="project.name"
    img-top
    tag="article"
    class="mb-3"
    bg-variant="secondary"
    text-variant="white"
    footer-bg-variant="secondary"
  >
    <b-card-body>
      <b-card-text>
        {{ project.description }}
      </b-card-text>
      <b-img
        v-for="skill in project.skills"
        :key="skill"
        v-b-tooltip.hover.bottom
        :src="getSkillImage(skill)"
        :alt="skill"
        fluid
        :title="skill"
      />
    </b-card-body>
    <template
      v-if="project.url || project.resources.length > 0"
      v-slot:footer
    >
      <b-link
        v-if="project.url"
        :href="project.url"
        target="_blank"
        class="text-white pr-3"
      >
        <fa
          icon="eye"
          class="fa-2x"
        />
      </b-link>
      <b-link
        v-for="resource in project.resources"
        :key="resource.url"
        :href="resource.url"
        target="_blank"
        class="text-white pr-3"
      >
        <fa
          :icon="['fab', resource.type]"
          class="fa-2x"
        />
      </b-link>
    </template>
  </b-card>
</template>
<style lang="scss" scoped>
  .card .card-body img {
    max-width: 3em;
    padding: 0.5em 0.5em;
  }
</style>
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  methods: {
    getSkillImage (skillName) {
      return '/img/skills/' + this.$info.skills.find(s => s.name === skillName).image
    }
  }
}
</script>
