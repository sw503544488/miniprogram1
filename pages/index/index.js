// index.js
// 获取应用实例

Page({
  data: {
    index: 3,
    arrayX: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
    arrayY: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9],
x:0,
    y:0
  },
  x() {
    this.setData({n: this.data.n + 1})
  }
  , setX(e) {

    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      x: e.detail.value
    })


  },
  setY(e) {

    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      y: e.detail.value
    })


  }
})
