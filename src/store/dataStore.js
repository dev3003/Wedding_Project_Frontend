import { defineStore } from 'pinia'
import { getExampleData } from '../services/api'

export const useDataStore = defineStore('data', {
  state: () => ({
    items: [],
    loading: false,
    error: null
  }),
  actions: {
    async fetchItems() {
      this.loading = true
      this.error = null
      try {
        const response = await getExampleData()
        this.items = response.data
      } catch (err) {
        this.error = err.message || 'Failed to fetch data'
      } finally {
        this.loading = false
      }
    }
  }
})
