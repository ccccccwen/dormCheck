Page({
  data:{},
  jumpPage1:function(){
    wx.navigateTo({
      url: '../message/message',
    })
  },
  jumpPage2:function(){
    wx.navigateTo({
      url: '../photocheck/photocheck',
    })
  },
  jumpPage3:function(){
    wx.navigateTo({
      url: '../summary/summary',
    })
  }
})
wx.setNavigationBarTitle({
	title: "July查寝"
})