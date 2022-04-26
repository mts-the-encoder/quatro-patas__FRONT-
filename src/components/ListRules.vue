<template>
    <ul class="list">
        <li class="item">Carinho e atenção não pode faltar;</li>
        <li class="item">Cuide de pulgas, carrapatos, entre outros parasitas;</li>
        <li class="item">Leve ao veterinário regularmente;</li>
        <li class="item">Mantenha as vacinas em dia, é importante para ele(a) e para você.</li>
        <li class="item">A castração é importante para previnir doenças e a procriação.</li>
    </ul>
</template>

<script>
export default {
    name: 'ListRules',
}
</script>

<style lang="scss" scoped>
.list {
    width: 700px;
    list-style-image: url("../assets/scss/_imgs/paw.svg");

    .item {
        font-size: 22px;
        font-weight: 700;
    }
}
</style>