<template>
  <header>
    <nav>
        <router-link class="header-link" to="/">Home</router-link> |
        <router-link class="header-link" to="/about">About</router-link> |
        <router-link class="header-link" to="/service">Service</router-link> |
        <router-link class="header-link" to="/blog">Blog</router-link> |
        <router-link class="header-link" to="/contact">Contact</router-link> 
    </nav>
  </header>
</template>

<script>
export default {

}
</script>

<style scoped>
    header { 
        background: #f5f5f5; 
        padding: 10px 20px; 
    };
    a.header-link {
        margin: 0 10px;
        color: #42b883;
        text-decoration: none;
    }

    a.router-link-active {
        font-weight: bold;
    }
</style>    