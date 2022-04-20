<template>
  <div>
    <ul>
      <li>
        <router-link to="/">Home</router-link><br>
        <router-link :to="{ name: 'rules' }">Rules</router-link><br>
        <router-link :to="{ name: 'adopt' }">Adopt</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style lang="scss">@import '@/assets/scss/main.scss';</style>
