Component({
  properties: {
    title:{
      type:String,
      value:'影院热映'
    },
    items: {
      type: Array
    },
    type:{
      type: String,
      value: 'hasCover'
    }
  },
  /**
   * 组件的方法列表
   */
  methods: {
    tapMore: function (e) {
      wx.switchTab({
        url: './../../pages/index/index',
      })
    }
  }
})