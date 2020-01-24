<template>
  <!-- Navbar component -->
  <div id="app">
    <nav class="navbar navbar-dark navbar-expand-md bg-dark fixed-top">
      <a href="/" class="navbar-brand">
        <h3>Welcome</h3>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="menu">
        <ul class="navbar-nav mr-auto ml-1">
          <li class="nav-item"><router-link class="nav-link" to="/">Customers</router-link></li>
          <li class="nav-item"><router-link class="nav-link" to="/about-us">About</router-link></li>
        </ul>
        <ul class="navbar-nav ml-auto">
          <li class="nav-item"><router-link class="nav-link" to="/new-user">Add User</router-link></li>
        </ul>
      </div>
    </nav>
    <router-view></router-view>
  </div>
</template>

<script>
/* eslint-disable */
import Customers from "./components/Customers.vue"
import About from "./components/About.vue"
import Adduser from "./components/Adduser.vue"

export default {
  name: 'App',
  components: { Customers, About, Adduser }
}
</script>

<style>
</style>
