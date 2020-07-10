//index.js
//获取应用实例
const app = getApp()
const util = require('../../utils/util.js');
Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    date:'',
    sbsj:'9:30',
    dksj:'',
   sjs:Math.random()
    
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    var that = this;
    //设置定时器
    setInterval( function () {
        var  yq_date=  util.formatDate(new Date(),'h:m:s')
        that.setData({date:yq_date});
  
      }
, 1000);  
 var dsd='';
  if(dsd==''){
    wx.navigateTo({
      url: '../login/login'
    })
  }

    if (app.globalData.userInfo) {
      console.log(userInfo)
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
        console.log("sss")
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
          console.log(userInfo)
        }
      })
    }
  },
  getUserInfo: function(e) {
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },handleTap:function(){
    console.log("ssss")
     
  },//下拉刷新数据 
   onPullDownRefresh:function () {
    wx.showToast({
      title: '成功',
      icon: 'success',
      duration: 2000
    })
      
 },  //打卡是检查是否授权
  shouquan:function(){
    var nickName="";   
   
    wx.getUserInfo({
      success: function(res) {
        var userInfo = res.userInfo
         nickName = userInfo.nickName
        var avatarUrl = userInfo.avatarUrl
        var gender = userInfo.gender //性别 0：未知、1：男、2：女
        var province = userInfo.province
        var city = userInfo.city
        var country = userInfo.country
        console.log({userInfo})
       
      }
    });
    var thsa=this

    
    
 }

})
