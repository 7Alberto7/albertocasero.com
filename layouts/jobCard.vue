<template>
  <b-card
    class="mb-3"
    no-body
  >
    <b-card-body>
      <b-card-title>
        {{ job.position }}
        <b-badge
          class="float-right"
          variant="primary"
        >
          {{ job.begin_at + ' - ' + (job.end_at != null ? job.end_at : 'Actualmente') }}
        </b-badge>
      </b-card-title>
      <b-card-sub-title>
        {{ job.company }}
      </b-card-sub-title>
      <b-card-text>
        {{ job.description }}
      </b-card-text>
    </b-card-body>
  </b-card>
</template>
<script>
export default {
  props: {
    job: {
      type: Object,
      required: true
    }
  }
}
</script>
