let zIndex = 1996
const nextZIndex = () => zIndex++

Component({
  externalClasses: ['custom-class'],
  properties: {
    // 弹窗名称用于区分弹窗，会通过自定义事件传递出去
    name: String,
    // 是否显示弹出层
    visible: {
      type: Boolean,
      value: false,
      observer(val) {
        if (val) {
          // 打开时 index + 1 保证后打开的 popup 显示在最上面
          this.setData({
            maskZIndex: nextZIndex(),
            zIndex: nextZIndex()
          })
        }
      }
    },
    // 是否显示关闭图标
    closeable: Boolean,
    // 自定义内容区域样式
    customStyle: {
      type: String,
      value: ''
    },
    // 是否需要遮罩层
    mask: {
      type: Boolean,
      value: true
    },
    // 自定义遮罩层样式
    maskStyle: {
      type: String,
      value: ''
    },
    // 点击遮罩层关闭弹出层
    maskClosable: {
      type: Boolean,
      value: true
    },
    /**
     * 弹出位置
     * 可选值为 center top bottom right left
     */
    position: {
      type: String,
      value: 'center'
    },
    // 是否显示圆角
    round: Boolean,
    // 是否开启过渡效果
    transition: {
      type: Boolean,
      value: true
    }
  },
  data: {
    maskZIndex: 1995,
    zIndex: 1996
  },
  methods: {
    // 点击遮罩层
    handleClickOverlay() {
      if (this.data.maskClosable) {
        this.handleClickClose()
      }
    },
    noop() {
      // do nothing
    },
    // 点击关闭图标
    handleClickClose() {
      this.setData({ visible: false })
      // 关闭的回调
      this.triggerEvent('close', this.data.name)
    },
    handleTransitionEnd() {
      if (this.data.visible) {
        return
      }
      // 关闭动画结束时的回调
      this.triggerEvent('closed', this.data.name)
    }
  }
})
