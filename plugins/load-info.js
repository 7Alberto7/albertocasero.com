import Vue from 'vue'
import presentation from '~/static/json/presentation.json'
import projects from '~/static/json/projects.json'
import skills from '~/static/json/skills.json'
import experience from '~/static/json/work_experience.json'

Vue.prototype.$info = {
  presentation,
  projects: projects.sort((a, b) => b.relevance - a.relevance),
  skills: skills.sort((a, b) => ((b.currently * 10) + b.level_of_knowledge) - ((a.currently * 10) + a.level_of_knowledge)),
  experience
}
