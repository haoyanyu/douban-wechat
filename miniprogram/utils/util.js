const URI = 'https://douban.uieee.com/v2/';
const fetch = require('./fetch');

/**
 * 抓取豆瓣电影特定类型的API
 * https://developers.douban.com/wiki/?title=movie_v2
 * @param  {String} type   类型，例如：'coming_soon'
 * @param  {Objece} params 参数
 * @return {Promise}       包含抓取任务的Promise
 */
function fetchApi(type, params) {
  return fetch(URI, type, params)
}

function find (type, page=1, count=20, search="") {
  const params = {start:(page - 1) * count, count: count, city: getApp().data.currentCity , loc: 108288}
  return fetchApi(type, search ? Object.assign({}, params, {q: search}) : params)
  .then(
    res => res.data
  )
}

/**
 * 获取单条类型的数据
 * @param  {Number} id     电影ID
 * @return {Promise}       包含抓取任务的Promise
 */
function findOne(url) {
  return fetchApi(url)
    .then(res => res.data)
}

module.exports = {
  find,
  findOne
}