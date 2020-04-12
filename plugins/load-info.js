import Vue from 'vue'
import presentation from '~/static/json/presentation.json'
import projects from '~/static/json/projects.json'

Vue.prototype.$info = {
  presentation,
  projects: projects.sort((a, b) => b.relevance - a.relevance)
}
