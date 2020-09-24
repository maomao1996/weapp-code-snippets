# weapp-code-snippets

记录微信小程序开发中的血与泪（自定义组件，常用方法等）

## 自定义组件

- [x] Popup 弹出层

### Popup 弹出层 API

#### Props

| 参数          | 说明                                                      |   类型    |  默认值  |
| ------------- | --------------------------------------------------------- | :-------: | :------: |
| name          | 弹窗名称用于区分弹窗，会通过自定义事件传递出去            | `string`  |    -     |
| visible       | 是否显示弹出层                                            | `boolean` | `false`  |
| position      | 弹出位置，可选值为 `center` `top` `bottom` `right` `left` | `string`  | `center` |
| closeable     | 是否显示关闭图标                                          | `boolean` |  `true`  |
| custom-class  | 自定义内容区域 class                                      | `string`  |    -     |
| custom-style  | 自定义内容区域 style                                      | `string`  |    -     |
| mask          | 是否需要遮罩层                                            | `boolean` |  `true`  |
| mask-style    | 自定义遮罩层 style                                        | `string`  |    -     |
| mask-closable | 点击遮罩层关闭弹出层                                      | `boolean` |  `true`  |
| round         | 是否显示圆角                                              | `boolean` | `false`  |
| transition    | 是否开启过渡效果                                          | `boolean` |  `true`  |

#### Events

| 事件名      | 说明                     | 参数               |
| ----------- | ------------------------ | ------------------ |
| bind:close  | 关闭弹出层时触发         | 设置的 `name` 属性 |
| bind:closed | 弹出层关闭动画结束后触发 | 设置的 `name` 属性 |
