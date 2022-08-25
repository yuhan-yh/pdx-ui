/*
 * @Author: your name
 * @Date: 2022-08-25 10:47:23
 * @LastEditTime: 2022-08-25 15:26:50
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\src\components\pdx-ui\weather\index.js
 */
import Test from "./index.vue";

// // 按需引入
// export { Test };

// const component = [Test];

// const PdxUI = {
// 	install(App) {
// 		component.forEach((item) => {
// 			App.component(item.name, Test);
// 		});
// 	},
// };

Test.install = (App) => {
	App.component(Test.__name, Test);
};
export default Test;
