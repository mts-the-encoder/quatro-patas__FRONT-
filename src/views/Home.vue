<template>
    <div>
        <button-adopt /><br>
        <button-rules /><br>
        <fav />
        <search/>
        <modal-adopt/>
    </div>
</template>

<script>
import ButtonAdopt from "../components/ButtonAdopt.vue";
import ButtonRules from '../components/ButtonRules.vue';
import Fav from '../components/Fav.vue';
import ModalAdopt from '../components/ModalAdopt.vue';
import Search from '../components/Search.vue';

export default {
    components: { ButtonAdopt, ButtonRules, Fav, Search, ModalAdopt },
    name: 'Home',
};
</script>

<style lang="scss" scoped>

</style>