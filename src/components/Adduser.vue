<template>
   <!-- Adding a user (gathers all information in field and posts to the API to make a new user in the db) -->
  <div class="new container">
   <h2 class="h1 mb-5">New User</h2><hr>
   <form @submit.prevent="addUser" class="mb-5">
      <div class="form-group1 mb-4">
         <div class="form-group">
            <label for="fullname">Fullname</label>
            <input type="text" class="form-control mb-3" id="fullname" required v-model="customer.name">
            <label for="username">Username</label>
            <input type="text" class="form-control mb-3" id="username" required v-model="customer.username">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" required v-model="customer.email">
         </div>
      </div>
      <div class="form-group1 mb-4">
         <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control mb-3" id="address" v-model="customer.address">
            <label for="phone">Phone Number</label>
            <input type="tel" class="form-control" id="phone" v-model="customer.phone">
         </div>
      </div>
      <button type="submit" class="btn btn-primary btn-lg">Add</button>
   </form>
  </div>
</template>

<script>
/* eslint-disable */
import Router from 'vue-router'

const axios = require('axios').default;

export default {
   name: 'new',
   data () {
      return {
         customer: {}
      }
   },
   methods: {
      addUser() {
         if (this.customer.name && this.customer.email && this.customer.username) {
            let info = {
               name: this.customer.name,
               username: this.customer.username,
               email: this.customer.email,
               phone: this.customer.phone,
               address: this.customer.address
            }
            axios.post('http://127.0.0.1:3000/users', info)
               // on successful posting, redirect back to the homepage by sending some data along with the redirect route
               .then((response) => this.$router.push({path: "/", query: {alert: "New customer has been added"}}))
               .catch(error => console.log(error))
         }
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.new {
   margin-top: 10%;
}
.form-group1 {
   border-radius: 10px;
   background-color: #fbfbfb;
   padding: 5%;
}
</style>
