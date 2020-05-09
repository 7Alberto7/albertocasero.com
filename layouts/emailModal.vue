<template>
  <b-modal
    id="email-modal"
    title="Contacta conmigo"
    ok-title="Enviar"
    :ok-disabled="!isValid"
    cancel-title="Volver"
    @ok="onSubmit"
    @cancel="onCancel"
  >
    <b-form>
      <b-form-group
        label="Email"
        label-for="input-email"
      >
        <b-form-input
          id="input-email"
          v-model="form.email"
          type="email"
          required
        />
      </b-form-group>
      <b-form-textarea
        v-model="form.comments"
        placeholder="Cuéntame..."
        rows="6"
      />
    </b-form>
  </b-modal>
</template>
<script>
export default {
  data () {
    return {
      form: {
        email: '',
        comments: ''
      }
    }
  },
  computed: {
    isValid () {
      return this.form.email && this.form.comments && this.validEmail(this.form.email)
    }
  },
  methods: {
    onSubmit () {
      this.resetForm()
    },
    onCancel () {
      this.resetForm()
    },
    resetForm () {
      this.form.email = ''
      this.form.comments = ''
    },
    validEmail (email) {
      return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
    }
  }
}
</script>
