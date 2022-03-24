Page({
  /**
   * 页面的初始数据
   */
  data: {
    btns: [1]
  },

  handleAdd() {
    this.setData({
      btns: [...this.data.btns, 1]
    })
  }
})
