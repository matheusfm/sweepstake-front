<template>
    <div>
        <b-form @submit.prevent="toBet">
            <b-form-group :label='game.team1' label-for='team1'>
            <b-form-input id='team1' type='number' min='0' max='10' required v-model='bet.team1_goals'></b-form-input>
            </b-form-group>
            <b-form-group :label='game.team2' label-for='team2'>
            <b-form-input id='team2' type='number' min='0' max='10' required v-model='bet.team2_goals'></b-form-input>
            </b-form-group>
            <b-button type="submit" variant="primary">Apostar</b-button>
        </b-form>
    </div>
</template>

<script>
export default {
    name: 'GameDetail',
    data: function () {
        return {
            game: {},
            bet: {}
        }
    },
    created() {
        this.$http.get('/games/' + this.$route.params.id)
            .then(response => this.game = response.data)
            .catch((error) => alert('Erro ao carregar jogo: ' + error))
    },
    methods: {
        toBet() {
            this.bet.game_id = this.game.id;
            this.$http.post('/bets', this.bet)
                .then((response) => {
                    this.$router.push('/apostas')
                })
                .catch((error) => alert('Erro ao apostar: ' + error))
        }
    }
}
</script>