<template>
  <section id="contact">
    <b-container class="text-center">
      <b-link
        v-b-tooltip.hover.bottom
        title="Contacta conmigo"
      >
        <fa
          icon="at"
          class="fa-4x text-white"
          @click="contactMe"
        />
      </b-link>
      <p class="mt-3 text-center text-white">
        Creado por Alberto Casero
      </p>
    </b-container>
  </section>
</template>
<script>
export default {
  methods: {
    contactMe () {
      this.$bvModal.show('email-modal')
    }
  }
}
</script>
