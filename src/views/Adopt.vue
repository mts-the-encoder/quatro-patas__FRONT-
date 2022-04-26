<template>
    <title-4 v-text="title"/> /*Colocar aqui a minha variável*/
</template>

<script>
import Title4 from '../components/Title4.vue'


export default {
    components: { Title4 },
    name: 'Adopt',
    data() {
        return {
            title: 'Olá' // Deixar aqui o retorno e oq quero que ela passe
        }
    }
}
</script>

<style lang="scss" scoped></style>