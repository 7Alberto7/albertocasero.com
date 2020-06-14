import projectService from '~/services/projectService'
import skillService from '~/services/skillService'

export default ({ $axios }, inject) => {
  inject('projectService', projectService($axios))
  inject('skillService', skillService($axios))
}
