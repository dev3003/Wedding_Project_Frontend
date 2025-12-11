<template>

    <Header />

    <main>
      <router-view /> <!-- nội dung page thay đổi theo route -->
    </main>

    <Footer />
    
</template>

<script setup>
    import Header from './components/Header.vue';
    import Footer from './components/Footer.vue';
</script>

<style>
  main { padding: 20px; min-height: 60vh; }
</style>
