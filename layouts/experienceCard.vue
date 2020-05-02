<template>
  <b-card
    class="mb-3"
    no-body
  >
    <b-card-body>
      <b-card-title>
        {{ experience.position }}
        <b-badge
          class="float-right"
          variant="primary"
        >
          {{ experience.begin_at + ' - ' + (experience.end_at != null ? experience.end_at : 'Actualmente') }}
        </b-badge>
      </b-card-title>
      <b-card-sub-title>
        {{ experience.company }}
      </b-card-sub-title>
      <b-card-text>
        {{ experience.description }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    experience: {
      type: Object,
      required: true
    }
  }
}
</script>
