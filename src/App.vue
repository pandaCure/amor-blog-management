<template>
    <router-view></router-view>
</template>

<script lang="ts">
import {defineComponent, onBeforeMount} from 'vue'
import { useStore } from 'vuex'
import requestAjax from './utils/request';
export default defineComponent({
  setup() {
    const store = useStore();
    onBeforeMount(async () => {
      // TODO：错误结果
      const {data} = await requestAjax.get('/users')
      store.commit('getUserInfo', data)
    })
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
