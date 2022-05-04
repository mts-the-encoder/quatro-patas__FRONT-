<template>
    <div class="heart--fav">
        <div :class="{'heart' : favorites == true, 'full' : favorites == false}" @click="favorites = !favorites">

        </div>
    </div>
</template>

<script>
export default {
    name: 'Fav',
    data() {
        return {
            favorites: true,
        }
    }
}
</script>

<style lang="scss" scoped>
.heart--fav {
    height: 70px;
    width: 80px;
    background-color: $Bgcolor-heart--empty;
    box-shadow: 10px 10px 20px rgba(121, 24, 217, 0.5);
    border-radius: 10px;
    margin-left: 100px;
    display: flex;
    align-items: center;
    justify-content: center;

    .heart {
        width: 40px;
        height: 60px;
        background-color: $color-heart--empty;
        margin-right: 40px;
        cursor: pointer;

        /*HEART*/
        border-radius: 15px;
        transform-origin: right bottom;
        position: relative;
        animation: heart 3s ease infinite alternate;

        &::after{
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            border-radius: 15px;
            background-color: $color-heart--empty;
            transform-origin: left bottom;
            animation: heart--after 3s ease infinite alternate;
        }
    }        
    .full {
        @extend .heart;
        background-color: $color-heart--full;

        &::after{
            content: '';
            background-color: $color-heart--full;
        }
    }        
}
@keyframes heart {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(45deg);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    55% {
        transform: rotate(45deg) scale(1);
    }
    60% {
        transform: rotate(45deg) scale(1.1);
    }
    65% {
        transform: rotate(45deg) scale(1);
    }
    70% {
        transform: rotate(45deg) scale(1.1);
    }
    75% {
        transform: rotate(45deg) scale(1);
    }
    80% {
        transform: rotate(45deg) scale(1.1);
    }
    85% {
        transform: rotate(45deg) scale(1);
    }
    90% {
        transform: rotate(45deg) scale(1.1);
    }
    95% {
        transform: rotate(45deg) scale(1);
    }
    100% {
        transform: rotate(45deg) scale(1.1);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
}
@keyframes heart--after {
    0% {
        transform: rotate(0deg);
    }
    50% {
        transform: rotate(-90deg) translateY(40px);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
    100% {
        transform: rotate(-90deg) translateY(40px);
        border-top-left-radius: 50px;
        border-top-right-radius: 50px;
    }
}
</style>