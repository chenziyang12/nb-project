<template>
  <!-- HelloWorld组件 -->
  <HelloWorld msg="Hello Vue + Vite"
              @mycilck="myclick"
              ref="child" />
  <hr>
  <!-- 触发子组件方法 -->
  <button @click="childlog">子组件方法</button>
  <hr>
  <hr>
  <!-- 模拟mock请求 -->
  <button @click="getMockData">mock请求</button>
  <hr>
  <!-- 组件跳转 -->
  <router-link to="home">跳转组件</router-link>
  <router-view></router-view>
  <hr>
  <!--vuex中的数据-->
  <h2>vuex中的数据count:{{$store.state.count}}</h2>
  <button @click="$store.commit('add')">点击改变</button>
</template>

<script setup>
// script setup语法糖
//组件导入，不用注册直接使用,属性方法定义，无需retrun
//<script setup>这种写法会自动将所有顶级变量声明暴露给模板（template）使用
import HelloWorld from '@cpn/HelloWorld.vue'
import { ref, getCurrentInstance } from 'vue'
import { store } from "./store/index"
//用于绑定ref
const child = ref(null)
//父传给子组件的方法
const myclick = () => {
  console.log('this is myclick')
}
//触发子组件的log方法
const childlog = () => {
  child.value.log('父组件传递的数据')
}
//模拟mock请求
//vite中mock使用方法：
// 1.npm i vite-plugin-mock -d  (开发时依赖)
// 2.npm i mockjs -s            (运行时依赖)
// 3.vite.config.js 中导入 import {viteMockServe} from 'vite-plugin-mock'
// 4.vite.config.js plugins中加入 viteMockServe({supportTs:false})
// 5.package.json中script处设置环境变量:"dev": "cross-env NODE_ENV=development vite",
// 6.npm i cross-env -d
const getMockData = () => {
  fetch('/api/createUser', { method: 'POST' })
    .then((res) => res.json())
    .then((data) => {
      alert(data.data)
      console.log(data)
    })
}

</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
hr {
  margin: 40px 0px;
}
</style>
