<template>
   <!-- Individual customer component (on loading, API result for the particular user is obtained) -->
   <div class="details container">
      <router-link class="btn btn-secondary mb-2" to="/">Back</router-link>
      <h2 class="h2">
         {{ customer.name }}
         <span class="float-right">
         <router-link class="btn btn-success" :to="'/customer/update/'+customer.id">Edit</router-link>
         <button class="btn btn-danger" @click="deleteCustomer(customer.id)">Delete</button>
         </span>
      </h2><hr>
      <ul class="list-group mb-4">
         <li class="list-group-item"><i class="fas fa-user"></i> {{ customer.username }}</li>
         <li class="list-group-item"><i class="fas fa-envelope"></i> {{ customer.email }}</li>
      </ul>
      <ul class="list-group">
         <li class="list-group-item"><i class="fas fa-phone-square"></i> {{ customer.phone }}</li>
         <li class="list-group-item"><i class="fas fa-map-marker-alt"></i> {{ customer.address }}</li>
      </ul>
   </div>
</template>

<script>
import Router from 'vue-router'

const axios = require('axios').default;

export default {
   name: 'customerdetails',
   data () {
      return {
         customer: {
         }
      }
   },
   methods: {
      customerInfo(id) {
         // fetch the specific user details from the server with the indicated id and assign the result to the
         // customer data to be used to populate fields in the template
         axios.get('http://127.0.0.1:3000/users/'+ id)
            .then((response) => this.customer = response.data)
            .catch(error => console.log(error))
      },
      deleteCustomer(id) {
         axios.delete('http://127.0.0.1:3000/users/'+ id)
            // on successful deletion, pass the query data alongside the redirect for notification
            .then((response) => this.$router.push({path: "/", query: {alert: "A customer was deleted"}}))
            .catch(error => console.log(error))
      }
   },
   created() {
      // on creation of this component, get the parameter from the url
      this.customerInfo(this.$route.params.id)
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.details {
  margin-top: 10%;
}
</style>