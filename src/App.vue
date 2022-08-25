<!--
 * @Author: your name
 * @Date: 2022-08-25 10:27:53
 * @LastEditTime: 2022-08-25 11:59:31
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\src\App.vue
-->
<template>
  <div class="index">
    <Weather />
  </div>
</template>
<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import { Weather } from './components/pdx-ui'
</script>
<style lang="scss" scoped>
.index {
  width: 1000px;
  height: 800px;
  background-color: aquamarine;
  .test {
    width: 600px;
    height: 600px;
  }
}
</style>
