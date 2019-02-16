//app.js
/**
 * Douban API 模块
 * @type {Object}
 */
const douban = require('./utils/util.js')

/**
 * Baidu API 模块
 * @type {Object}
 */
const baidu = require('./utils/baidu.js')

App({
  data:{
    name:'douban movies',
    currentCity:'北京市',
  },
  douban: douban,
  baidu: baidu,
  onLaunch: function (options) {
    let that = this
    wx.getLocation({
      success: function(res) {
        const {latitude, longitude} = res
        baidu.getCityName(latitude, longitude).then(name => {
          that.data.currentCity = name.replace('市','')
          console.log(`currentCity : ${that.data.currentCity}`)
        }).catch( err => {
          that.data.currentCity = '北京'
          console.error(err)
        })
      },
    })
  },
  onShow(option) {
    // console.log(option)
  },
  onError(err) {
    // console.log(err)
  }
})