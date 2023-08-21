<script setup>
import { ref } from 'vue'
import InputButton from '../components/InputButton.vue'
import InputFeild from '../components/InputFeild.vue'
import router from '@/router'
import { store } from '../stores/user'

const email = ref('')
const password = ref('')

const showEmailError = ref(false)
const showPasswordError = ref(false)

const validateEmail = (email) => {
  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
  if (email.match(emailRegex)) {
    showEmailError.value = false
    return true
  } else {
    showEmailError.value = true
    return false
  }
}
const validatePassword = (password) => {
  if (password.length < 6) {
    showPasswordError.value = true
    return false
  } else {
    showPasswordError.value = false
    return true
  }
}

function loginHandle() {
  if (validateEmail(email.value) && validatePassword(password.value)) {
    if (email.value == 'demo@bmc.com' && password.value == '123456') {
      localStorage.setItem('userData', email.value)
      router.push('/')
      store.isAuthenticated = true
      return
    }
  }
  store.isAuthenticated = false
}
</script>

<template>
  <div class="w-fit h-fit flex flex-col items-center justify-center m-20 p-20 rounded-2xl bg-white">
    <div class="page-title text-xl mb-10">Login Page</div>
    <form @submit.prevent="loginHandle">
      <InputFeild title="Email" type="email" required="true" v-model="email" />
      <div class="text-red-500 text-center text-xs" v-show="showEmailError">
        Enter valid mail id!
      </div>
      <InputFeild title="Password" type="password" required="true" v-model="password" />
      <div class="text-red-500 text-center text-xs" v-show="showPasswordError">
        Minimum 6 characters for password
      </div>
      <InputButton title="Login" routeto="/" type="submit" />
    </form>
  </div>
</template>
