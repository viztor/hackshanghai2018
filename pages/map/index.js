const app = getApp()

Page({
  data: {
    userLocated: false,
    longitude: 113.5245211,
    latitude: 23.10229,
    isHelpRequested: false,
    responseData: [
      {
        label: "上海科技大学应急响应中心",
        status: "已响应"
      },
      {
        label: "TheHack组委会",
        status: "已通知"
      }
    ]
  },
  //事件处理函数
  onReady: function(e) {
    this.mapCtx = wx.createMapContext('emergency-locate')
    this.getLocation()
  },
  getLocation: function () {
    wx.getLocation({
      type: "gcj02",
      success: (res) => {
        this.setData({
          longitude: res.longitude,
          latitude: res.latitude,
          userLocated: true
        })
        this.mapCtx.moveToLocation()
      }
    })
  },
  requestHelp: function () {
    this.setData({
      isHelpRequested: true
    })
  }
})
