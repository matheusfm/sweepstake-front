<template>
  <div>
    <b-list-group v-for='b in bets' :key='b.id'>
      <b-list-group-item class='text-center' :to="'/jogos/' + b.game_id">{{b.team1}}  {{b.team1_goals}}    X    {{b.team2_goals}}  {{b.team2}}</b-list-group-item>
    </b-list-group>
  </div>
</template>

<script>
export default {
  name: 'Bet',
  data: function() {
    return {
      bets: []
    };
  },
  created() {
    this.$http.get('/bets')
      .then((response) => this.bets = response.data)
  }
};
</script>