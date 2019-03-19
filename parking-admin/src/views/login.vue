<!-- login.vue -->
<template>
  <div class="login">
    <div class="login-container">
      <Divider>
        <span class="login-label">管理员登陆</span>
      </Divider>
      <Form ref="formInline" :model="formInline" :rules="ruleInline">
        <FormItem prop="user">
          <Input type="text" v-model="formInline.user" placeholder="请输入用户名">
            <Icon type="ios-person-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem prop="password">
          <Input type="password" v-model="formInline.password" placeholder="请输入密码">
            <Icon type="ios-lock-outline" slot="prepend"></Icon>
          </Input>
        </FormItem>
        <FormItem>
          <Button type="primary" @click="handleSubmit('formInline')" long>登陆</Button>
        </FormItem>
      </Form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        password: ""
      },
      ruleInline: {
        user: [
          {
            required: true,
            message: "请输入用户名",
            trigger: "blur"
          }
        ],
        password: [
          {
            required: true,
            message: "请输入密码",
            trigger: "blur"
          },
          {
            type: "string",
            min: 6,
            message: "密码长度不能少于6位",
            trigger: "blur"
          }
        ]
      }
    };
  },
  methods: {
    handleSubmit(user) {
      this.$refs[user].validate(valid => {
        if (valid) {
          this.$Message.success("登陆成功!");
          this.$router.push({ name: 'home'});
        } else {
          this.$Message.error("登陆失败!");
        }
      });
    }
  }
};
</script>

<style scoped>
.login {
  background-image: url(../assets/images/login-bg.png);
  background-repeat: no-repeat;
  height: 100%;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-container {
  width: 400px;
  height: 300px;
  padding: 20px 80px 20px;
  border: 1px solid #f1f1f1;
  border-radius: 5px;
  background: white;
}
.login-label {
  font-weight: 600;
  font-size: 20px;
  color: #17233d;
}
</style>