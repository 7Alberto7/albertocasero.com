<template>
  <div id="home">
    <b-container>
      <h1 v-if="$info.presentation" class="text-center text-white pt-5">
        {{ $info.presentation.name }}
      </h1>
      <h2 v-if="$info.presentation" class="text-center text-white">
        {{ $info.presentation.description }}
      </h2>
      <div class="d-flex align-items-end">
        <h3 v-if="$info.presentation" class="text-white">
          {{ $info.presentation.presentation_text }}
        </h3>
      </div>
    </b-container>
  </div>
</template>
<style lang="scss" scoped>
  div#home {
    background: linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5) ), url('../static/img/portada.jpg') center 75% no-repeat;
    background-size: cover;
  }
</style>
