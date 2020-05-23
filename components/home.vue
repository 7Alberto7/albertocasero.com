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
            <template v-slot:header class="text-primary">
              {{ $info.presentation.name }}
            </template>
            <p>{{ $info.presentation.presentation_text }}</p>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </section>
</template>
<style lang="scss" scoped>
  @import "assets/css/colors";
  section#home {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('/img/app/portada.jpg') center 75% no-repeat;
    background-size: cover;
  }
  .jumbotron {
    h1 {
      color: $primary;
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
