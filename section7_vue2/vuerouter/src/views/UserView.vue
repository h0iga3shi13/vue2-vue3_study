<template>
  <div>UserInfo<br>
  <router-link to="profile">Profile</router-link> |
  <router-link to="post">Post</router-link> |
    <div class="green-b">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {

}
</script>
<style>
.green-b {
  border: 1px solid green;
}
</style>
