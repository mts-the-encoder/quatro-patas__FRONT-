<template>
    <div class="modal--adopt">
        <img class="img--adopt" src="../assets//scss/_imgs/girlWdog.png" alt="Girl Holding a Dog">
        <h1 class="title">Você ganhou um novo amiguinho!</h1>
    </div>
</template>

<script>
export default {
    name: 'ModalAdopt'
}
</script>

<style lang="scss" scoped>
.modal--adopt {
    height: 408px;
    width: 589px;
    background-image: url(../assets/scss/_imgs/RectangleG.png);
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img--adopt {
        height: 308px;
    }

    .title {
        font-family: "Amatic SC", cursive;
        font-weight: bold;
        font-size: 40px;
        width: 150px;
    }

}
</style>