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
  },
  close({ detail }) {
    console.log('关闭回调', detail)
  },
  closed({ detail }) {
    console.log('关闭动画结束的回调', detail)
    wx.showToast({ title: `弹出层(${detail})的关闭动画结束了`, icon: 'none' })
  }
})
