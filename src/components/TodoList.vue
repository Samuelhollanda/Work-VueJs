<template>
  <div>
    <input v-model="novaTarefa" placeholder="Digite uma tarefa" />
    <button @click="adicionarTarefa">Adicionar</button>

    <ul>
      <li v-for="(tarefa, index) in tarefas" :key="index">
        {{ tarefa }}
        <button @click="removerTarefa(index)">X</button>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const novaTarefa = ref("")
const tarefas = ref([])

function adicionarTarefa() {
  if (novaTarefa.value.trim() !== "") {
    tarefas.value.push(novaTarefa.value)
    novaTarefa.value = ""
  }
}

function removerTarefa(index) {
  tarefas.value.splice(index, 1)
}
</script>

<style>
input {
  margin-right: 5px;
}
button {
  margin-left: 5px;
}
</style>
