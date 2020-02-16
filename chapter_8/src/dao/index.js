const regeneratorRuntime = require('../lib/runtime'); // eslint-disable-line

const BASE_URL = `http://localhost:3000/v1/`

async function getRecommendPlaylists() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'personalized',
      data: {cookie: ''},
      success: function (res) {
        resolve(res.data.result)
      }
    })
  })
}

//  'personalized/newsong', 'personalized/mv', 'personalized/djprogram'

async function getRecommendNewSong() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'personalized/newsong',
      data: {cookie: ''},
      success: function (res) {
        resolve(res.data.result)
      }
    })
  })
}

async function getRecommendMV() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'personalized/mv',
      data: {cookie: ''},
      success: function (res) {
        resolve(res.data.result)
      }
    })
  })
}

async function getRecommendDJ() {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'personalized/djprogram',
      data: {cookie: ''},
      success: function (res) {
        resolve(res.data.result)
      }
    })
  })
}

// 获取歌曲详情(用于播放页面)
async function getSongDetail(songId) {
  return new Promise((resolve, reject) => {
    wx.request({
      url: BASE_URL + 'music/detail',
      data: {id: songId},
      success: function (res) {
        resolve(res.data.songs[0])
      }
    })
  })
}

module.exports = {
  getRecommendPlaylists,
  getRecommendNewSong,
  getRecommendMV,
  getRecommendDJ,
  getSongDetail
}