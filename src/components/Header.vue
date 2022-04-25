<template>
    <header class="header">
        <img class="img--logo" src="../assets/scss/_imgs/Logo.png" alt="Quatro Patas">
        <div class="container">
            <nav class="navbar">
                <span><a class="rules" href="../views/Rules.vue">Nossas Regras</a></span>
            </nav>
            <search/>
        </div>
    </header>
</template>

<script>
import Search from './Search.vue';

export default {
    components: { Search },
    name: 'Header'
}
</script>

<style lang="scss" scoped>
.header {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 20vh;
    background-color: $secondary-color--four;
    font-family: "Amatic SC", cursive;

    .img--logo {
        position: absolute;
        margin-left: 70px;
    }

    .container {
        width: 100%;
        margin-left: 420px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
        .navbar {
            margin-right: 15px;
        }
        .rules {
            font-family: "Amatic SC", cursive;
            font-weight: bold;
            font-size: 36px;
            text-decoration: none;
            margin-right: 50px;
        }
}
</style>