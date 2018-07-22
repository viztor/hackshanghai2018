const app = getApp()

Page({
  data: {
    userLocated: false,
    longitude: 113.5245211,
    latitude: 23.10229,
    isHelpRequested: false
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
      
    })
  }
})
