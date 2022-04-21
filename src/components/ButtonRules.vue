<template>
    <button class="button-our--rules">Nossas Regras</button>
</template>

<script>
export default {
    name: 'ButtonRules'
}
</script>

<style lang="scss" scoped>
.button-our--rules {
    height: 80px;
    width: 300px;
    background-color: $complementary-color--one;
    color: $primary-color--one;
    border: 5px solid $primary-color--one;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
}
</style>