/*
 * @Author: your name
 * @Date: 2022-08-25 10:27:53
 * @LastEditTime: 2022-08-25 10:49:27
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\src\main.js
 */
import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import PdxUI from './components/pdx-ui'

createApp(App).use('PdxUI').mount('#app')
