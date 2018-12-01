<template>
<div>
    <b-navbar toggleable='md' type='dark' variant='dark'>
      <b-navbar-toggle target='nav_collapse'></b-navbar-toggle>

      <b-navbar-brand href='#'>Bolão</b-navbar-brand>

      <b-collapse is-nav id='nav_collapse'>
        <b-navbar-nav>
          <b-nav-item to='/jogos'>Jogos</b-nav-item>
          <b-nav-item to='/apostas'>Apostas</b-nav-item>
          <b-nav-item href='#' disabled>Pontuação</b-nav-item>
        </b-navbar-nav>
        <b-navbar-nav class='ml-auto'>
          <b-nav-item to='/login'>Login</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-container class="mt-4">
      <router-view></router-view>
    </b-container>
  </div>
</template>

<script>
export default {
  name: 'app'
};
</script>