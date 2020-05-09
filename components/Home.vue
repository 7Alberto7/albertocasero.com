<template>
  <section id="home">
    <b-container fluid>
      <b-row>
        <b-col
          md="8"
          lg="6"
          xl="4"
        >
          <b-jumbotron
            :lead="$info.presentation.description"
            lead-tag="h2"
            bg-variant="transparent"
            text-variant="white"
          >
            <template v-slot:header>
              <h1 class="text-primary">
                {{ $info.presentation.name }}
              </h1>
            </template>
            <p>{{ $info.presentation.presentation_text }}</p>
            <b-button size="lg" variant="danger" @click="contactMe">
              Contacta conmigo
            </b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
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
<style lang="scss" scoped>
  section#home {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/img/app/portada.jpg') center 75% no-repeat;
    background-size: cover;
  }
  .jumbotron {
    h1 {
      font-size: 4.5rem;
      font-weight: 300;
    }
    .lead {
      font-size: 2.5rem;
    }
    p {
      font-size: 1rem;
    }
    .btn {
      font-size: 1.5rem;
    }
  }
</style>
