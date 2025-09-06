<template>
  <div>
    <h1>Minha To-do List</h1>
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">Sobre</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script setup>
// nada por enquanto
</script>

<style>
nav {
  margin: 10px 0;
}
</style>
