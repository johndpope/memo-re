<template>
  <div class="overWrap">
    <div class="wrap">
      <div class="image"><img src="@/assets/logo.png" alt="ロゴ" /></div>
      <h1>新規登録</h1>
      <div class="innerwrap">
        <p>
          ユーザー名<span v-if="errorUsername" class="errorSpan"
            >※ユーザー名が入力されていません</span
          >
        </p>
        <p>{{ error.username }}</p>
        <input v-model="username" type="text" class="text" placeholder="HAL太郎" maxlength="40"/>
        <br />
        <p>
          メールアドレス<span v-if="errorEmail" class="errorSpan"
            >※メールアドレスが入力されていません</span
          >
        </p>
        <p>{{ error.email }}</p>
        <input v-model="email" type="text" class="text"  placeholder="xxx@xxx.xxx" />
        <br />
        <p>
          パスワード
          <span v-if="errorPassword" class="errorSpan"
            >※パスワードが入力されていません</span
          >
          <span v-if="errorCheck" class="errorSpan"
            >※確認パスワードと違います</span
          >
        </p>
        <input v-model="password" type="password" class="text" placeholder="8文字以上の半角英数記号" />
        <br />
        <p>
          確認用パスワード<span v-if="errorCheckpass" class="errorSpan"
            >※確認用パスワードが入力されていません</span
          >
        </p>
        <p>{{ error.password }}</p>
        <input v-model="checkpass" type="password" class="text" />
        <br />
        <div class="button">
          <button @click="SignUp()">新規登録</button>
        </div>
        <div class="signin">
          <p class="space"><router-link to="/SignIn">ログイン</router-link></p>
          <router-link to="/">戻る</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { API_SERVER } from "@/assets/config.js";
export default {
  name: "SignUp",
  components: {},
  data() {
    return {
      username: "",
      password: "",
      checkpass: "",
      email: "",
      signUp: [],
      errorUsername: false,
      errorPassword: false,
      errorCheckpass: false,
      errorEmail: false,
      errorCheck: false,
      error: [],
    };
  },
  methods: {
    SignUp() {
      this.errorUsername = false;
      this.errorPassword = false;
      this.errorCheckpass = false;
      this.errorCheck = false;
      this.errorEmail = false;
      if (
        this.username == "" ||
        this.password == "" ||
        this.checkpass == "" ||
        this.email == ""
      ) {
        if (this.username == "") {
          this.errorUsername = true;
        }
        if (this.password == "") {
          this.errorPassword = true;
        }
        if (this.checkpass == "") {
          this.errorCheckpass = true;
        }
        if (this.email == "") {
          this.errorEmail = true;
        }
        return;
      }
      if (this.password != this.checkpass) {
        this.errorCheck = true;
        return;
      }
      const requestBody = {
        email: this.email,
        username: this.username,
        password: this.password,
      };
      axios
        .post(API_SERVER + "/api/v1/auth/users/", requestBody)
        .then((response) => {
          this.signUp = response.data;
          console.log("success");
          console.log(this.signUp);
          this.$router.push({ name: "signIn" });
        })
        .catch((e) => {
          this.error = e.response.data;
          console.log(e);
          console.log(this.error);
        });
    },
  },
  created() {
    const userId = this.$cookies.get("access");
    if (userId != null) {
      this.$router.push("/myPage");
      return;
    }
  },
};
</script>

<style scoped>
.overWrap{
  margin-bottom: 80px;
}
.wrap {
  width: 510px;
  height: 720px;
  margin: 40px auto 0;
  padding-top: 60px;
  border-radius: 26px;
  background: #fff;
  filter: drop-shadow(0px 0px 2px rgb(111, 111, 111));
}
h1 {
  font-size: 24px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 20px;
  color: #666;
}
.innerwrap {
  width: 420px;
  margin: 0 auto;
}
.text {
  width: 420px;
  height: 40px;
  /* border: solid 2px #ccc6c6; */
  margin: 4px 0 20px;
  padding: 6px 0 6px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 2px 2px #ccc inset;
}
.text:focus {
  outline: none;
}
.image {
  width: 100px;
  height: 100px;
  margin: 0 auto;
}
img {
  width: 100%;
}
.button {
  width: 160px;
  margin: 0 auto;
}
button {
  color: #fff;
  background: #1e4fff;
  width: 160px;
  height: 54px;
  text-align: center;
  border-radius: 5px;
  margin-top: 20px;
  box-shadow: 1px 2px 1px 1px rgb(194, 194, 194);
}
button:hover {
  background: #0015ff;
}
.signin {
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}
.errorSpan {
  font-size: 12px;
  color: #f00;
  margin-left: 10px;
}
.space {
  margin-bottom: 12px;
}
</style>