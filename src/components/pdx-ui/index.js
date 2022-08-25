/*
 * @Author: your name
 * @Date: 2022-08-25 10:47:23
 * @LastEditTime: 2022-08-25 10:48:28
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\src\components\pdx-ui\index.js
 */
import testImg from "./weather/test.vue";

// 按需引入
export { testImg };

const component = [testImg];

const PdxUI = {
	install(App) {
		component.forEach((item) => {
			App.component(item.name, testImg);
		});
	},
};

export default PdxUI;
