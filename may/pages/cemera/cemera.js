// pages/cemera/cemera.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
    // 拍摄按钮按下, 执行record 触发拍摄
    record(){
      this.data.cameraContext = wx.createCameraContext()
      this.data.cameraContext.takePhoto({
        quality:"high", //高质量的图片
        success: res => {
          //res.tempImagePath照片文件在手机内的的临时路径
          let tempImagePath = res.tempImagePath
          wx.saveFile({
            tempFilePath: tempImagePath,
            success: function (res) {
              //返回保存时的临时路径 res.savedFilePath
              const savedFilePath = res.savedFilePath
              // 保存到本地相册
              wx.saveImageToPhotosAlbum({
                filePath: savedFilePath,
              })
            },
            //保存失败回调（比如内存不足）
            fail: console.log
          })
        }
      })
    },  

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

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