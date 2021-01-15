<template>
  <div class="home">
    <img style="width: 20%" alt="me1" src="../assets/me1.jpg">
    <Profile msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
import Profile from '@/components/Profile.vue'

export default {
  name: 'Home',
  components: {
    Profile
  }
}
</script>


