<template>
    <div class="modal--fav">
        <img class="img--fav" src="../assets/scss/_imgs/manWdog.png" alt="Man with Dog">
        <div class="message--fav">
            <h1 class="title--fav">FAVORITADO COM AMOR!</h1>
            <p class="text--fav">Obrigado por seu interesse em nossos amigos! Esperamos ansiosos pela sua adoção!</p>
        </div>
        <img class="close" src="../assets/scss/_imgs/Close.svg" alt="Button Close">
    </div>
</template>

<script>
export default {
    name: 'ModalFavorite'
}
</script>

<style lang="scss" scoped>
.modal--fav {
    height: 408px;
    width: 589px;
    background-image: url(../assets/scss/_imgs/RectangleP.png);
    margin: 0 auto;
    margin-bottom: 40px;
    display: flex;
    align-items: center;
    justify-content: center;

    .img--fav {
        height: 308px;
    }

    .message--fav {

        .title--fav {
            font-family: "Amatic SC", cursive;
            font-weight: bold;
            font-size: 40px;
            width: 150px;  
        }

        .text--fav {
            font-weight: 400;
            width: 250px;
        }
    }

    .close {
        margin-bottom: 300px;
        cursor: pointer;
    }
}
</style>