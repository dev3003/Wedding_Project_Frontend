<template>
  <div>
    <h1>Home Page</h1>
    <button @click="fetchData">Fetch Data</button>

    <div v-if="loading">Loading...</div>
    <div v-if="error" style="color:red">{{ error }}</div>

    <ul v-if="items.length">
      <li v-for="(item, index) in items" :key="index">
        {{ item.name }} - {{ item.value }}
      </li>
    </ul>
  </div>
</template>

<script setup>
    import { onMounted, toRefs } from 'vue'
    import { useDataStore } from '../store/dataStore'

    const store = useDataStore()
    const { items, loading, error } = toRefs(store)

    const fetchData = () => store.fetchItems()

    onMounted(() => {
        fetchData()
    })
</script>
