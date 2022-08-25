<!--
 * @Author: your name
 * @Date: 2021-11-11 16:32:55
 * @LastEditTime: 2022-08-25 10:44:15
 * @LastEditors: yuhan
 * @Description: 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 * @FilePath: \pdx-ui-weather\src\components\pdx-ui\weather\index.vue
-->

<template>
  <div class="weather flex flex-align-center">
    <!-- 动态渲染图标 -->
    <i :class="`qi-${weather.icon}`" v-if="weather.icon"></i>
    <!-- <img class="weather_icon" src="@/assets/images/icon/cloud.png" /> -->
    <span class="weather_temperature fs-56 AlibabaPuHuiTiB">{{ weather.temp }}℃</span>
  </div>
</template>

<script setup>
/**
 * 接收传过来的值
 *
 * @param size 定义按钮的大小 可选值为 'large' | 'middle' | 'small' | 'mini'
 * @param type 定义按钮的类型 默认不填
 */
import { onMounted, ref } from 'vue';
import { get } from '@/utils/http';

const weather = ref({
  temp: '',
  icon: '',
  locationId: ''
});
const key = 'e03a0bfd935f46b792d9685b66633525';
const getWeather = () => {
  // https://devapi.qweather.com/v7/weather/now 实时
  // https://devapi.qweather.com/v7/weather/3d 三天
  get('https://devapi.qweather.com/v7/weather/now', {
    params: {
      key,
      location: weather.value.locationId
    }
  }).then((res) => {
    if (res.now) {
      weather.value.temp = res.now.temp;
      weather.value.icon = res.now.icon;
    }
  });
};
// 根据地点获取id，获取天气时需要传地点id
const getLocationId = () => {
  get('https://geoapi.qweather.com/v2/city/lookup', {
    params: {
      location: '广州',
      key,
      number: 20
    }
  }).then((res) => {
    if (res.code === '200' && res.location && res.location.length > 0) {
      weather.value.locationId = res.location[0].id;
      getWeather();
    }
  });
};

onMounted(() => {
  getLocationId();
});
</script>

<style scoped lang="scss">
.weather {
  height: 128px;
  .weather_icon {
    margin-left: 20px;
    width: 150px;
    height: 150px;
  }
  .weather_text {
    margin-left: 10px;
    letter-spacing: 3px;
  }
  .weather_temperature {
    margin-left: 60px;
    letter-spacing: 3px;
    color: #b8cef1;
    font-size: 80px;
  }
}
</style>
