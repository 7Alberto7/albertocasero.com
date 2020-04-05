import Vue from 'vue'

Vue.prototype.$scrollTo = (hash) => {
  const element = document.querySelector(hash)
  window.scrollTo({ top: element.offsetTop, behavior: 'smooth' })
}
