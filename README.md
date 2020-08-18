# polyv-wx
保利威点播观看小程序 - 文档说明
https://dev.polyv.net/2018/videoproduct/v-sdk/vod-wxa/

### 以上代码是针对微信小程序开发

### 在uniapp框架中使用-微信自定义组件引用（wxcomponents）
将pages/index及polyv.js文件放入wxcomponents/polyv 中，
1. wxcomponents/polyv/index.js 引入 `polyv.js`文件
```
import polyv from './polyv.js';
// var polyv = require('./polyv.js');

```

2. page.json
```
{
  "pages":[
    {
      "path": "pages/video-detail",
      "style": {
        // #ifdef MP-WEIXIN
        "usingComponents":{
          "polyv": "/wxcomponents/polyv/index"
        },
        // #endif
        "navigationBarTitleText": "详情"

      }
    }
    ...
  ],
  ...
}
```
3. video-detail.vue 文件:
```
<!-- 模板调用  -->
<template>
  <!-- #ifdef MP-WEIXIN -->
      <polyv ref="polyv" ></polyv>
  <!--  #endif -->
<template>

<!-- js调用方法  -->
<script>
  ...
  this.$refs.polyv.getVideo(vid);

<script>
```
