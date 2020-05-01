<template>
  <b-card
    tag="article"
    class="mb-3"
    header-bg-variant="white"
    header-text-variant="secondary"
    body-bg-variant="secondary"
    body-text-variant="white"
    border-variant="secondary"
  >
    <template v-slot:header>
      <b-card-title class="text-center">
        <b-img :src="'/img/skills/'+skill.image" fluid :alt="skill.name" />
        <span class="ml-2">{{ skill.name.toUpperCase() }}</span>
      </b-card-title>
    </template>
    <b-card-body>
      <b-card-text>
        {{ skill.description }}
      </b-card-text>
      <b-form-rating v-model="skill.level_of_knowledge" class="bg-white" variant="warning" readonly />
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    skill: {
      type: Object,
      required: true
    }
  }
}
</script>
