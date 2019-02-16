var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList:[],
    freeList: [],
    soonList:[],
    goodList:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initHot()
    this.initFree()
    this.initSoon()
    this.setData({goodList: [
      {
        title: '同时入选IMDB250和豆瓣电影250的电影',
        href: 'https://m.douban.com/doulist/968362/',
        color: '#FFAC2D'
      },
      {
        title: '带你进入不正常的世界',
        href: 'https://m.douban.com/doulist/16002',
        color: '#FF4055'
      },
      {
        title: '用电【影】来祭奠逝去的岁月',
        href: 'https://m.douban.com/doulist/190343',
        color: '#4F9DED'
      },
      {
        title: '女孩们的故事【电影】',
        href: 'https://m.douban.com/doulist/1125971',
        color: '#FFC46C'
      },
      {
        line: true
      },
      {
        title: '科幻是未来的钥匙——科幻启示录【科幻题材】',
        href: 'https://m.douban.com/doulist/4253902',
        color: '#2384E8'
      },
      {
        title: '美国生活面面观',
        href: 'https://m.douban.com/doulist/121326',
        color: '#3BA94D'
      },
      {
        title: '2015终极期待',
        href: 'https://m.douban.com/doulist/37479562',
        color: '#42BD56'
      },
      {
        title: '经典韩国电影——收集100部',
        href: 'https://m.douban.com/doulist/458087',
        color: '#CC3344'
      }
    ]})
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
  initHot(){
    app.douban.find('/movie/in_theaters',1,8).then( res => {
      this.setData({ hotList: res.subjects})
    })
  },
  initFree() {
    app.douban.find('/movie/top250', 1, 8).then(res => {
      this.setData({ freeList: res.subjects })
    })
  },
  initSoon() {
    app.douban.find('/movie/coming_soon', 1, 8).then(res => {
      this.setData({ soonList: res.subjects })
    })
  },
})