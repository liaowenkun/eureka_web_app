//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js')
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    date:'',
    sbsj:'9:30',
    dksj:'12:30'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    



  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },


// 获取输入账号 
phoneInput: function (e) {
  this.setData({
    phone: e.detail.value
  })
},

// 获取输入密码 
passwordInput: function (e) {
  this.setData({
    password: e.detail.value
  })
},

// 登录
login: function () {
  var that = this;   

  var warn = null; //warn为当手机号为空或格式不正确时提示用户的文字，默认为空
  if (that.data.phone.length == 0) {
    wx.showToast({
      title: '用户名不能为空',
      icon: 'loading',
      duration: 1000
    })
  } else if (that.data.password.length == 0) {
    wx.showToast({
      title: '密码不能为空',
      icon: 'loading',
      duration: 1000
    })
  }else {
    
    wx.request({
      url: 'http://192.168.41.40:8002/login',
      method: "POST",
      data: {
        cardNo: that.data.phone,
        password: that.data.password
      },
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        if (res.data.state == 1) {  //判断是否能正常登录
          warn = "卡号密码不匹配";
          wx.showModal({
            title: '提示',
            content: warn
          })
          return;
        } else {
          that.setData({
            success: true,
            text: res.data.url
          })
        }
      }

    })



  }
},
// 注册 
register: function () {
  wx.navigateTo({
    url: '/pages/register/register',
  })
}

})