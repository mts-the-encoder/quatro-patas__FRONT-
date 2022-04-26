<template>
    <div class="modal--adopt">
        <img class="img--adopt" src="../assets//scss/_imgs/girlWdog.png" alt="Girl Holding a Dog">
        <div class="message--adopt">
            <h1 class="title--adopt">Você ganhou um novo amiguinho!</h1>
            <p class="text--adopt">Obrigado por sua adoção, ficamos felizes por você e por ele!</p>
        </div>  
        <img class="close" src="../assets/scss/_imgs/Close.svg" alt="Button Close">
    </div>
</template>

<script>
export default {
    name: 'ModalAdopt',
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
    border: 7px solid #FFF;
    border-radius: 27px;

    .img--adopt {
        height: 308px;
    }

    .message--adopt {

        .title--adopt {
            font-family: "Amatic SC", cursive;
            font-weight: bold;
            font-size: 40px;
            width: 150px;       
        }
        
        .text--adopt {
            font-weight: 400;
            width: 290px;
        }
    }

    .close {
        margin-bottom: 300px;
        cursor: pointer;
    }
}
</style>