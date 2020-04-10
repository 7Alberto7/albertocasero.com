<template>
  <div id="home">
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
            <b-button size="lg" variant="danger" @click="$scrollTo('#contact')">
              Contacta conmigo
            </b-button>
          </b-jumbotron>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<style lang="scss" scoped>
  div#home {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../assets/img/app/portada.jpg') center 75% no-repeat;
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
