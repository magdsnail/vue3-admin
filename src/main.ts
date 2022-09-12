import '@/styles/index.postcss' // 全局样式
import 'virtual:svg-icons-register'
import './permission'
import 'element-plus/theme-chalk/el-message.css' // message样式
import 'element-plus/theme-chalk/el-message-box.css' // message样式

import { mock, mockEnv } from './appConfig'

import App from './App.vue'
import { EnvType } from '@/types/app'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import enableMock from '../mock'
import router from './router'

mockEnv.includes(import.meta.env.MODE as EnvType) && mock === 'on' && enableMock()

createApp(App).use(createPinia()).use(router).mount('#app')
