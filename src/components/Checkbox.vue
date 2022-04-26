<template>
    <div class="checks">
        <h5>Exibir por</h5>
        <div class="wrapper">
            <input class="check" type="checkbox" id="gatinhos">
            <label for="check">Gatinhos</label>
        </div>
        <div class="wrapper">
            <input class="check" type="checkbox" id="doguinhos">
            <label for="check">Doguinhos</label>
        </div>
        <div class="wrapper">
            <input class="check" type="checkbox" id="peludinhos-favoritos">
            <label for="check">Peludinhos Favoritos</label>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style lang="scss" scoped>
.checks {
    width: 600px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;

    h5 {
        font-size: 20px;
    }

    .wrapper {
        font-size: 20px;
        display: flex;
        align-items: center;

        .check {
            appearance: none;
            -webkit-appearance: none;
            height: 20px;
            width: 20px;
            background-color: $Bgcolor-heart--empty;
            border-radius: 5px;
            cursor: pointer;
            border: 2px solid $primary-color--one;
        }
        .check::after {
            font-family: "Font Awesome 5 free";
            content: "\f00c";
            font-weight: bold;
            font-size: 15px;
            color: $primary-color--one;
            display: flex;
            align-items: center;
            justify-content: center;
            display: none;
            margin-left: 1px;
            margin-bottom: 1px;
        }
        .check:hover {
            background-color: $Bgcolor-heart--empty;
        }
        .check:checked{
            background-color: $Bgcolor-heart--empty;
        }
        .check:checked:after{
            display: block;
        }

        label {
            font-size: 20px;
            font-weight: 300;
            cursor: pointer;
        }
    }
}
</style>