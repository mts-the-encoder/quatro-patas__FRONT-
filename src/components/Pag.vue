<template>
    <main class="content">
        <div class="img--backgound">
            <img class="photo" src="" alt="Human with pet">
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main',
}
</script>

<style lang="scss" scoped>
.content {
    height: 100vh;
    width: 100%;
    background-color: $Bgcolor-heart--empty;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    overflow: hidden;


    .img--backgound {
        height: 500px;
        width: 500px;
        background-image: url("../assets/scss/_imgs/background.png");
        background-size: cover;        
        justify-self: flex-end;
        display: flex;
        align-items: center;


        .photo {
            height: 500px;
        }

    }
}
</style>