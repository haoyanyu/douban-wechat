const commonData = require('./../../utils/data.js')
const app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    novelList:[],
    realityList:[],
    travelList:[],
    bookTags:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({ bookTags: commonData.book.bookTags})
    this.initNovel()
    this.initReality()
    this.initTravel()
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
    
  },
  initNovel(){
    app.douban.find('/book/search', 1, 8,'虚构类').then(res => {
      this.setData({ novelList: res.books })
    })
  },
  initReality(){
    app.douban.find('/book/search', 1, 8,'非虚构类').then(res => {
      this.setData({ realityList: res.books })
    })
  },
  initTravel(){
    app.douban.find('/book/search', 1, 8,'旅行').then(res => {
      this.setData({ travelList: res.books })
    })
  },
})