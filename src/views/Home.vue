<template>
    <div>
        <button-adopt/><br>
        <button-rules/><br>
        <fav/>
        <search/>
        <modal-adopt/>
        <modal-favorite/>
        <Header/>
    </div>
</template>

<script>
import ButtonAdopt from "../components/ButtonAdopt.vue";
import ButtonRules from '../components/ButtonRules.vue';
import Fav from '../components/Fav.vue';
import Header from '../components/Header.vue';
import ModalAdopt from '../components/ModalAdopt.vue';
import ModalFavorite from '../components/ModalFavorite.vue';
import Search from '../components/Search.vue';

export default {
    components: { ButtonAdopt, ButtonRules, Fav, Search, Header, ModalAdopt, ModalFavorite },
    name: 'Home',
};
</script>

<style lang="scss" scoped>

</style>