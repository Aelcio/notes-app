<template>
  <div class="container-fluid">
    <div class="row">      
      <div class="col-md-7 d-flex vh-100 justify-content-center">
        <div class="col-md-10 align-self-center"> 
          <h1 class="noteapp">Notes App</h1>  
            <offline-alert v-show="$nuxt.isOffline"/>
            
            <Nuxt />          
        </div> 
      </div>
      <div class="col-md-5 vh-100 cover"></div>
    </div>
  </div>
</template>

<script>

export default {
  
}
</script>

<style>
.cover {
  background: url("/cover.jpg") center center;
}

</style>