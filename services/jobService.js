const jobService = (api) => {
  return {
    url: 'api/jobs',

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

export default jobService
