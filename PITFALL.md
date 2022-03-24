# 微信小程序踩坑记录

随缘(有小程序开发业务需求的时候)更新，老早就想记录了，奈何拖延癌晚期(毕竟从这项目创建时间也看的出来)

## wx.getSetting

部分机型下 `wx.getSetting` 方法未授权的会返回 `undefined`，但是官方类型文档是 `boolean`

[AuthSetting 官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/AuthSetting.html)

[wx.getSetting 官方文档](https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.getSetting.html)

## scroll-view

`IOS` 部分机型下当 `scroll-view` 组件替换页面滚动并设置 `enhanced` 属性启用 `scroll-view` 增强特性后，页面会存在一屏空白

代码布局如下

```html
<style>
  .flex-col {
    display: flex;
    flex-direction: column;
  }
  .flex-1 {
    flex: 1;
  }
  .h-full {
    height: 100%;
  }
</style>
<view class="flex-col">
  <view class="flex-1">
    <scroll-view class="h-full" scroll-y enhanced></scroll-view>
  </view>
  <view>底部元素</view>
</view>
```

## scroll-view 下 fixed 失效

`iOS` 下加了 `-webkit-overflow-scrolling: touch` 后会改变 `fixed` 的行为

[IOS scroll-view 中的自定义组件 fixed 问题](https://developers.weixin.qq.com/community/develop/doc/0000667484c96844b83ac9c7651809)

## transitionEnd

当使用 `transition: all` 设置过渡时，`transitionEnd` 事件会触发多次

[demo 代码](/components/popup/popup.wxss#L97)
