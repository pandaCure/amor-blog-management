<template>
  <div class="login-container">
    <h1>welcome body</h1>
  </div>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { defineComponent, onMounted } from "vue";
export default defineComponent({
  setup() {
    onMounted(() => {
      console.log("111")
      const store = useStore()
      console.log(store.state.userInfo)
    });
  },
});
</script>
<style scoped lang="scss"></style>
