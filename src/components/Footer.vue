<template>
    <footer>
        <div class="container">
            <img class="img--footer" src="../assets/scss/_imgs/Logo.png" alt="Logo Quatro Patas">
            <div class="infos">
                <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            </div>
        </div>
        <div class="baseboard">
            <p class="">Copyright 2022. Todos os direitos reservados ©.</p>
            <p class="complaint">Violência contra animais é crime. Denuncie 0800 600 6428</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style lang="scss" scoped>
footer {
    display: flex;
    height: 35vh;
    width: 100%;
    background-color: $secondary-color--four;
    flex-direction: column;

    .container {
        height: 80%;
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }
        .img--footer {
            height: 100px;
        }

        h4 {
            font-size: 18px;
        }

        p {
            font-size: 18px;
        }
    .baseboard {
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        height: 20%;
        width: 100%;
        background-color: $secondary-color--one;

        p {
            color: #FFF;
            font-size: 20px;
        }

        .complaint {
            font-weight: bold;
        }
    }
}
</style>