<template>
  <div class="login-container">
    <div class="login-block">
      <h1>登录</h1>
      <n-form :model="model" ref="formRef" :rules="rules">
        <n-form-item path="inputValue">
          <n-input placeholder="请输入用户名" v-model:value="model.username" />
        </n-form-item>
        <n-form-item path="inputValue">
          <n-input placeholder="请输入密码" v-model:value="model.password" />
        </n-form-item>
      </n-form>
      <div>
        <n-button @click="handleLogin">登录</n-button>
        <!-- <n-button>注册</n-button> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { NForm, NFormItem, NInput, NButton, NButtonGroup } from "naive-ui";
import requestAjax from "../../utils/request";

export default defineComponent({
  setup() {
    const formRef = ref<any>(null);
    const model = ref({
      username: null,
      password: null,
    });
    return {
      formRef,
      model,
      rules: {
        password: [
          {
            required: true,
            message: "请输入密码",
          },
        ],
        username: [
          {
            required: true,
            message: "请输入用户名",
          },
        ],
      },
      handleLogin: (e: any) => {
        e.preventDefault();
        formRef.value.validate((errors: any) => {
          if (!errors) {
            // message.success("验证成功");
          } else {
            console.log(errors);
            // message.error("验证失败");
          }
        });
        console.log("login");
        requestAjax
          .post("/public/login", model.value)
          .then(({data}) => {
            const {token} = data
            window.localStorage.setItem('token', token);
          })
          .catch((error) => {
            console.log(error);
          });
      },
    };
  },
  components: {
    NForm,
    NFormItem,
    NInput,
    NButton,
    NButtonGroup,
  },
});
</script>
<style scoped lang="scss">
.login-container {
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .login-block {
    width: 360px;
    border-radius: 16px;
    box-shadow: 0 2px #00000004;
    margin: 10vh auto;
    padding: 16px;
    border: 1px solid #e8e8e8;
  }
}
</style>
