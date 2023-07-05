//index.js
//获取应用实例
const app = getApp()
 
Page({
  data: {
    username: 'admin',
    password: '123'
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/pages/index/index.wxml'
    })
  },
  onShow: function () {
    // 生命周期函数--监听页面显示
    wx.hideTabBar({})
  },
  onLoad: function () {
   
  },
 
 
  // 获取输入账号 
  usernameInput: function (e) {
    this.setData({
      username: e.detail.value
    })
  },
 
  // 获取输入密码 
  passwordInput: function (e) {
    this.setData({
      password: e.detail.value
    })
  },
 
  // 登录处理
  login: function () {
    var that = this;
    if (this.data.username.length == 0 || this.data.password.length == 0) {
      wx.showToast({
        title: '账号或密码不能为空',
        icon: 'none',
        duration: 2000
      })
      return
    }
    wx.showToast({
      title: '登录成功',
      icon: 'success',
      duration: 2000,
      success: function () {
        // 跳转到首页
        wx.switchTab({
          url: '../index/index',
        });
      }
    })
    // else {
    //   wx.request({
    //     url: "http://localhost/api/login.php", // 仅为示例，并非真实的接口地址
    //     method: 'post',
    //     data: {
    //       username: that.data.username,
    //       password: that.data.password
    //     },
    //     header: {
    //       'content-type': 'application/x-www-form-urlencoded' // 默认值
    //     },
    //     success(res) {
    //       if (res.data.code == "OK") {
    //         var unitName = res.data.data.User.unitName;
    //         var unitId = res.data.data.User.unitId;
    //         wx.setStorageSync('unitId', unitId);
    //         wx.setStorageSync('unitName', unitName);
    //         getApp().globalData.isLoggedin = true;
    //         wx.switchTab({
    //           url: '../index/index'
    //         })
    //       } else {
    //         wx.showToast({
    //           title: res.data.message,
    //           icon: 'none',
    //           duration: 2000
    //         })
    //       }
    //     }
    //   })
    // }
  }
})
 