<template>
  <b-form @submit.prevent="login">
    <b-form-group label='Usuário:' label-for='usernameInput'>
      <b-form-input id='usernameInput' required v-model='auth.username'></b-form-input>
    </b-form-group>
    <b-form-group label='Senha:' label-for='passwordInput'>
      <b-form-input id='passwordInput' required v-model='auth.password' type='password'></b-form-input>
    </b-form-group>
    <b-button type="submit" variant="primary">Entrar</b-button>
  </b-form>
</template>
<script>
export default {
  name: 'Login',
  data: function() {
    return {
      auth: {
        username: '',
        password: ''
      }
    };
  },
  methods: {
    login() {
      this.$http.post('/auth', this.auth)
        .then((response) => {
          localStorage.setItem('access_token', response.data.access_token)
          this.$router.push('/jogos')
        })
        .catch((error) => {
          alert('Erro ao logar: ' + error)
        })
    }
  }
};
</script>