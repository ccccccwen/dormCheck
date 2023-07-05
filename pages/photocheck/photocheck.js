// pages/photocheck/photocheck.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    firstPickerOptions: ["计科院", "医学院", "教育学院","机电院"],
    secondPickerOptions: [],
    isUpload:false,
    tempfilepath:"/image/upload.svg"
  },

  bindFirstPickerChange: function (e) {
    var firstPickerIndex = e.detail.value;
    // 根据第一个选择框的选中项来更新第二个选择框的选项数组
    var secondPickerOptions = this.getSecondPickerOptions(firstPickerIndex);
    this.setData({
      firstPickerIndex: firstPickerIndex,
      secondPickerIndex: 0,  // 重置第二个选择框的选中项为第一项
      secondPickerOptions: secondPickerOptions
    });
  },

  bindSecondPickerChange: function (e) {
    var secondPickerIndex = e.detail.value;
    this.setData({
      secondPickerIndex: secondPickerIndex
    });
  },

  // 根据第一个选择框的选中项来返回第二个选择框的选项数组
  getSecondPickerOptions: function (firstPickerIndex) {
    var options = [];
    // 根据不同的选项来设置第二个选择框的选项数组
    switch (firstPickerIndex) {
      case "0":
        options = ["选项A", "选项B", "选项C"];
        break;
      case "1":
        options = ["选项X", "选项Y", "选项Z"];
        break;
      case "2":
        options = ["选项①", "选项②", "选项③"];
        break;
      case "3":
        options = ["选项aaa", "选项bbb", "选项ccc"];
        break;
    }
    return options;
  },
  onLoad: function (options) {
    self=this
  },
  takePhoto: function() {
    var self = this;
    wx.chooseImage({
      count: 1,
      sizeType: ['original', 'compressed'],
      sourceType: ['album', 'camera'],
      success: function(res) {
        var tempFilePaths = res.tempFilePaths;
        self.setData({
          tempFilePath: tempFilePaths[0],
          isUpload: true
        });
      }
    });
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