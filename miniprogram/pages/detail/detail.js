var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'30747182',
    eventInfo:{},
    title: {
      title: '每天看点好内容'
    }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.data.id = options.id || this.data.id
    wx.showLoading({
      title: '加载中···',
    })
    app.douban.findOne('event/' + this.data.id).then(
      res => {
        wx.hideLoading()
        this.setData({ eventInfo : res})
      }
    ).catch( err => {
      wx.hideLoading()
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
    
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
    
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})