var app = getApp();

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  data: {
    relation: [{ "id": "1", "name": "长辈", "img": "elder" }, { "id": "2", "name": "师长", "img": "teacher" }, { "id": "3", "name": "领导", "img": "leader" }, { "id": "4", "name": "同事", "img": "colleague" }, { "id": "5", "name": "朋友", "img": "friend" }, { "id": "6", "name": "恋人", "img": "lover" }, { "id": "7", "name": "晚辈", "img": "younger" }, { "id": "8", "name": "前任", "img": "ex" }],
    gender: [{ "id": "1", "name": "男", "img": "male" }, { "id": "2", "name": "女", "img": "female" }],
    userInfo: {},
    query: {
      relationID: 1,
      genderID: 1,
      isMore: false
    }
  },


  changeToName(e) {
    let name = e.detail.value
    if (name.length > 10) {
      this.setData({
        isMore: true
      })
    } else {
      this.setData({
        isMore: false
      })
    }

    if (!name) {
      app.setToName(name)
    }
  },
  generate: function (e) {
    console.log(e);
    console.log(e.detail.value.toname);
    wx.navigateBack();
  },
})