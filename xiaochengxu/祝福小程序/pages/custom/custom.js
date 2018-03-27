let temp = {
  toname: '',
  "best-wishes": '',
  nickName: ''
}
Page({
  save: function (e) {
    console.log(e);
    wx.setStorage({
      key: "toname",
      data: temp['toname']
    })
    wx.navigateBack();

  },
  setToName: function (e) {
    console.log(e.detail)
    temp['toname'] = e.detail.value;
  },
  setNickName: function (e) {
    console.log(e.detail)
    temp['nickName'] = e.detail.value;
  },
  
})