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
            lead="Ingeniero Web"
            lead-tag="h2"
            bg-variant="transparent"
            text-variant="white"
          >
            <template v-slot:header class="text-primary">
              Alberto Casero
            </template>
            <p>¡Bienvenido a mi página personal! Soy Alberto, máster en ingeniería web por la Universidad Politécnica de Madrid, con varios años de experiencia en gestión de proyectos y programación tanto en el lado cliente como en el servidor.</p>
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
