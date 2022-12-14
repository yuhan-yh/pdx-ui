/*
 * @Author: your name
 * @Date: 2022-08-25 10:27:53
 * @LastEditTime: 2022-08-25 15:23:03
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\vite.config.js
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve  } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
		outDir: 'lib',
		lib: {
			entry: resolve(__dirname, './src/components/pdx-ui/index.js'), //指定组件编译入口文件
			name: 'PdxUI',
			fileName: 'pdx-ui',
		},//库编译模式配置
		rollupOptions: {
			// 确保外部化处理那些你不想打包进库的依赖
			external: ['vue'],
			output: {
				// 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
				globals: {
					vue: 'Vue',
				},
			},
		},// rollup打包配置
	}
})
