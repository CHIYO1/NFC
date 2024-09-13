// pages/Store/Store.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    commoditys:[
      {
        id:1,
        path:"../../image/commodity/1.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:2,
        path:"../../image/commodity/2.png",
        name:"Hirono重塑之沙手办",
        type:"手办"
      },
      {
        id:3,
        path:"../../image/commodity/3.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:4,
        path:"../../image/commodity/4.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:5,
        path:"../../image/commodity/5.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:6,
        path:"../../image/commodity/6.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:7,
        path:"../../image/commodity/7.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:8,
        path:"../../image/commodity/8.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      },
      {
        id:9,
        path:"../../image/commodity/9.png",
        name:"Hirono x Polar 共存手办",
        type:"手办"
      }
    ]
  },

  NavToDetail: function(e) {
    const item = e.currentTarget.dataset.item; 
    wx.navigateTo({
      url: `/pages/Store_item/Store_item?name=${item.name}&type=${item.type}&path=${item.path}`, 
    });
  }

})