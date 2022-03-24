Component({
  /**
   * 组件的属性列表
   */
  properties: {
    /** 计算 height 的依赖 */
    observer: {
      type: Object,
      value: null
    },
    /** 背景色 */
    background: {
      type: String,
      value: '#fff'
    },
    /** 是否为 iPhoneX 留出底部安全距离 */
    safeAreaInsetBottom: {
      type: Boolean,
      value: true
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    height: 0
  },

  observers: {
    observer() {
      this.updateHeight()
    }
  },

  lifetimes: {
    attached() {
      this.updateHeight()
    }
  },

  /**
   * 组件的方法列表
   */
  methods: {
    updateHeight() {
      wx.createSelectorQuery()
        .in(this)
        .select('.footer-bar')
        .boundingClientRect()
        .exec((rect = []) => {
          this.setData({
            height: rect[0].height
          })
        })
    }
  }
})
