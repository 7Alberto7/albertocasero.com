<template>
  <b-card
    :title="project.name"
    :img-src="project.image"
    :img-alt="project.name"
    img-top
    tag="article"
    class="mb-3"
    bg-variant="secondary"
    text-variant="white"
    footer-bg-variant="secondary"
  >
    <b-card-text>
      {{ project.description }}
    </b-card-text>
    <template v-slot:footer>
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
<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  }
}
</script>
