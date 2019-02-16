Component({
  /**
   * 组件的属性列表
   */
  properties: {
    mold: {
      type: String,
      value: 'basic'
    },
    items:{
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    tapItem: function(e){
      let id = e.currentTarget.dataset.id
      console.log(id)
      wx.navigateTo({
        url: "./../../pages/detail/detail?id=" + id,
      })
    }
  }
})