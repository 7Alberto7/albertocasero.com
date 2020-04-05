<template>
  <div id="home">
    <b-container>
      <b-nav align="center">
        <b-nav-item active @click="$scrollTo('#home')">
          Portada
        </b-nav-item>
        <b-nav-item @click="$scrollTo('#projects')">
          Proyectos
        </b-nav-item>
        <b-nav-item @click="$scrollTo('#skills')">
          Conocimiento
        </b-nav-item>
        <b-nav-item @click="$scrollTo('#experience')">
          Experiencia
        </b-nav-item>
        <b-nav-item @click="$scrollTo('#contact')">
          Contacto
        </b-nav-item>
      </b-nav>
      <h1 class="text-center">
        Alberto Casero
      </h1>
      <h2 class="text-center">
        Ingeniero Web
      </h2>
    </b-container>
  </div>
</template>
