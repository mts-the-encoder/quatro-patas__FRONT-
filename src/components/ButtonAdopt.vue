<template>
    <button class="button-adopt--now">Adote agora</button>
</template>

<script>
export default {
    name: 'ButtonAdopt',
};
</script>

<style lang="scss" scoped>
.button-adopt--now {
    height: 80px;
    width: 300px;
    background-color: $primary-color--one;
    color: $complementary-color--one;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    border-radius: 10px;
    cursor: pointer;
}
</style>