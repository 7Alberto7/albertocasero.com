import projectService from '~/services/projectService'

export default ({ $axios }, inject) => {
  inject('projectService', projectService($axios))
}
