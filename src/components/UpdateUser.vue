<template>
   <!-- Update user component (auto-populated field with info fetched from the API upon loading) -->
  <div class="update container">
   <router-link class="btn btn-secondary" :to="'/customer/'+user.id">Back</router-link><hr>
   <form @submit.prevent="updateUser" class="mb-5">
      <div class="form-group1 mb-4">
         <div class="form-group">
            <label for="fullname">Fullname</label>
            <input type="text" class="form-control mb-3" id="fullname" required v-model="user.name">
            <label for="username">Username</label>
            <input type="text" class="form-control mb-3" id="username" required v-model="user.username">
            <label for="email">Email Address</label>
            <input type="email" class="form-control" id="email" required v-model="user.email">
         </div>
      </div>
      <div class="form-group1 mb-4">
         <div class="form-group">
            <label for="address">Address</label>
            <input type="text" class="form-control mb-3" id="address" required v-model="user.address">
            <label for="phone">Phone Number</label>
            <input type="tel" class="form-control" id="phone" required v-model="user.phone">
         </div>
      </div>
      <button type="submit" class="btn btn-info btn-lg">Update</button>
   </form>
  </div>
</template>

<script>
/* eslint-disable */
import Router from 'vue-router'

const axios = require('axios').default;

export default {
   name: 'update',
   data () {
      return {
         user: {}
      }
   },
   methods: {
      customerInfo(id) {
         // fetch data for a particular user and assign it to the 'user' object
         axios.get('http://127.0.0.1:3000/users/'+ id)
            .then((response) => this.user = response.data)
            .catch(error => console.log(error))
      },
      updateUser() {
         let info = {
            name: this.user.name,
            username: this.user.username,
            email: this.user.email,
            phone: this.user.phone,
            address: this.user.address
         }
         // make an update (PUT) request to the particular user; gotten through the $route.params.id all the while
         // passing the bundled 'info' alongside. Thereafter, upon successful update, redirect back to the homepage
         // with the right query message
         axios.put('http://127.0.0.1:3000/users/'+this.$route.params.id, info)
            .then((response) => this.$router.push({path: "/", query: {alert: "Update successful!"}}))
            .catch(error => console.log(error))
      }
   },
   created() {
      this.customerInfo(this.$route.params.id)
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.update {
   margin-top: 10%;
}
.form-group1 {
   border-radius: 10px;
   background-color: #fbfbfb;
   padding: 5%;
}
</style>
