Page({
  /**
   * 页面的初始数据
   */
  data: {
    positions: ['center', 'top', 'bottom', 'right', 'left'],
    visible: {}
  },
  onTap(e) {
    if (e.currentTarget.dataset.type === 'all') {
      this.setData({
        visible: {
          center: true,
          top: true,
          bottom: true,
          right: true,
          left: true
        }
      })
    }
    this.setData({
      [`visible.${e.currentTarget.dataset.type}`]: true
    })
  }
})
