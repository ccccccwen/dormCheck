// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_pass: false,
    username:"admin",
    password: '123456', 
  },
  seeTap:function(){
    var that=this;
    that.setData({
      // 切换图标
      show_pass:!that.data.show_pass,
      // 切换表单type属性
      inputType:that.data.inputType==='password'?'text':'password',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})