Page({
  data: {
    modules: [
      {
        name: '自定义组件',
        data: [
          {
            url: '/examplePackage/pages/popup/index',
            name: 'Popup 弹出层'
          },
          {
            url: '/examplePackage/pages/footer-bar/index',
            name: '悬浮底部栏'
          }
        ]
      },
      {
        name: 'WXS 方法',
        data: [
          {
            url: '/wxsPackage/pages/get/index',
            name: '在 wxml 中使用 lodash.get'
          }
        ]
      }
    ]
  }
})
