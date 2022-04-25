<template>
    <main class="content">
        <div class="img--backgound">
        
        </div>
    </main>
</template>

<script>
export default {
    name: 'Main'
}
</script>

<style lang="scss" scoped>
.content {
    height: 100vh;
    widows: 100%;
    background-color: $Bgcolor-heart--empty;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    .img--backgound {
        height: 500px;
        width: 500px;
        background-image: url("../assets/scss/_imgs/background.png");
        background-size: cover;
        
        justify-self: flex-end;

    }
}
</style>