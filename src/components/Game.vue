<template>
<div>
  <b-list-group v-for='g in games' :key='g.id'>
    <b-list-group-item class='text-center' :to="'/jogos/' + g.id">{{g.team1}}  {{g.team1_goals}}    X    {{g.team2_goals}}  {{g.team2}}</b-list-group-item>
  </b-list-group>
</div>
</template>
<script>
export default {
  name: 'Game',
  data: function() {
    return {
      games: [],
    };
  },
  created() {
    this.$http.get('/games')
      .then(response => this.games = response.data)
  }
};
</script>