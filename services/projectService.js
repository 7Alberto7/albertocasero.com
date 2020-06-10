const projectService = (api) => {
  return {
    url: 'api/projects',

    async all () {
      return await api.get(`${this.url}`, {
        auth: {
          username: process.env.api_user,
          password: process.env.api_pass
        }
      })
    }

  }
}

export default projectService
