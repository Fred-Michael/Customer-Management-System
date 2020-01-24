<template>
   <!-- Customers Component (fetches data from the dummy API and loads them iteratively) -->
  <div class="customers container">
    <Alert v-if="alert" :info="alert" />
    <h2 class="h1 mb-3">Our Customers</h2><hr>

    <input type="text" class="form-control mb-4" placeholder="Filter customers by name" v-model="filterResult">
    <table class="table table-hover text-center">
      <thead class="thead-dark">
        <tr>
          <th>Fullname</th>
          <th>Email</th>
          <th>Address</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="customer in filtered(customers, filterResult)" :key="customer.id">
          <td>{{customer.name}}</td>
          <td>{{customer.email}}</td>
          <td>{{customer.address}}</td>
          <td><router-link class="btn btn-primary" :to="'/customer/'+customer.id">View</router-link></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
/* eslint-disable */
import Alert from "./Alert.vue"
import Router from 'vue-router'

const axios = require('axios').default;

export default {
  name: 'customers',
  data () {
      return {
         customers: [],
         alert: "",
         filterResult: ""
      }
  },
  components: { Alert },
  methods: {
      getData() {
         axios.get('http://127.0.0.1:3000/users')
            .then((response) => this.customers = response.data)
            .catch(error => console.log(error));
      },
      filtered(list, value) {
         value = value.charAt(0).toUpperCase() + value.slice(1);
         return list.filter(customer => {
            return customer.name.indexOf(value) > -1
         });
      }
   },
  created() {
      // On creation of this component, get the 'id' parameter and assign it to the alert variable
      // Next, call the 'getData' function to load data fetched from API
      if (this.$route.query.alert) {
         this.alert = this.$route.query.alert;
      }
      this.getData()
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customers {
   margin-top: 10%;
}
</style>
