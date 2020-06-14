import projectService from '~/services/projectService'
import jobService from '~/services/jobService'
import skillService from '~/services/skillService'

export default ({ $axios }, inject) => {
  inject('projectService', projectService($axios))
  inject('jobService', jobService($axios))
  inject('skillService', skillService($axios))
}
