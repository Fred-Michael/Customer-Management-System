<template>
  <div class="alert alert-primary alert-dismissible fade show" role="alert">
     {{ info }}
    <button type="button" class="close" data-dismiss="alert">
       <span>&times;</span>
    </button>
  </div>
</template>

<script>
export default {
   props: ['info'],
  name: 'alert',
   data () {
      return {
         //         
      }
   }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/* css styles go here */

</style>
