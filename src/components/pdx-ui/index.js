/*
 * @Author: your name
 * @Date: 2022-08-25 10:47:23
 * @LastEditTime: 2022-08-25 15:20:55
 * @LastEditors: yuhan
 * @Description: 
 * @FilePath: \pdx-ui-weather\src\components\pdx-ui\index.js
 */
import Weather from './weather/index.vue';

//按需引入
export { Weather };

const components = [Weather];

const install = (App) => {
	components.forEach((item) => {
		App.component(item.__name, item);
	});
};

export default {
	install,
};