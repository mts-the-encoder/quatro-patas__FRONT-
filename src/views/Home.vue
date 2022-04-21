<template>
    <div>
        <button-adopt /><br>
        <button-rules />
        <fav />
    </div>
</template>

<script>
import ButtonAdopt from "../components/ButtonAdopt.vue";
import ButtonRules from '../components/ButtonRules.vue';
import Fav from '../components/Fav.vue';

export default {
    components: { ButtonAdopt, ButtonRules, Fav },
    name: 'Home',
};
</script>

<style lang="scss" scoped>

</style>