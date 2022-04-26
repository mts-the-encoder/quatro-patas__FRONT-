<template>
    <div class="profile">
        <div class="container">
            <img class="photo" src="" alt="Pet">
        <div class="pet--info">
            <h4 class="name">Name</h4>
            <h5 class="infos">breed, gender</h5>
        </div>
        <div class="options">
            <fav class="fav"/>  
            <button-adopt class="adopt"/>
        </div>
        </div>
    </div>
</template>

<script>
import ButtonAdopt from './ButtonAdopt.vue';
import Fav from './Fav.vue';

export default {
    components: { Fav, ButtonAdopt },
    name: 'Profile',
}
</script>

<style lang="scss" scoped>
.profile {
    position: absolute;
    height: 500px;
    width: 360px;
    background-color: #FFF;
    box-shadow: 11px 10px 10px rgba(191, 128, 255, 0.25);
    border-radius: 20px;
    padding: 10px;
    margin-left: 100px;

    .container {
        display: flex;
        align-items: center;
        flex-direction: column;

        .photo {
            width: 260px;
            height: 220px;
            border-radius: 10px;
            border: 1px solid $border--profile;
            margin-top: 10px;
        }

        .pet--info {
            
            
            .name {
                position: relative;
                font-weight: 700;
                text-align: center;
                line-height: 35px;
                color: $primary-color--one;                
            }

            .infos {
                font-weight: 300;
                font-size: 22px;
                color: $color-heart--empty;
                line-height: 30px;
                text-align: center;
                margin-top: 0px;
            }
        }
        
        .options {
            display: flex;
            margin-right: 100px;

            .adopt {
                width: 210px;
                height: 70px;
                margin-left: 20px;
            }

            .favorite {
                margin-right: 20px;
            }
        }
    }
}
</style>