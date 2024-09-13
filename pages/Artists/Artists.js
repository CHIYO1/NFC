Page({
  /**
   * 页面的初始数据
   */
  data: {
    queryObj: {
      pagenum: 1, // 当前页码
      pagesize: 10 // 每页条数
    },
    nums: 8,
    num: 4,
    ArtistList: [], // 用于存储请求到的数据
    isLoading: false, // 防止重复加载
    artists: [
      { id: 1, imgSrc: '../../image/artists/Artist 2.jpg', author: 'Artist 1' },
      { id: 2, imgSrc: '../../image/artists/Artist 3.png', author: 'Artist 2' },
      { id: 3, imgSrc: '../../image/artists/Artist 1.jpg', author: 'Artist 3' },
      { id: 4, imgSrc: '../../image/artists/Artist 4.jpg', author: 'Artist 4' },
      { id: 5, imgSrc: '../../image/artists/Artist 6.png', author: 'Artist 5' },
      { id: 6, imgSrc: '../../image/artists/Artist 5.jpg', author: 'Artist 6' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    this.getArtistsList(); // 页面加载时调用数据请求方法
  },

  /**
   * 获取艺术家数据列表
   */
  getArtistsList() {
    // 防止重复加载
    if (this.data.isLoading) return;
    this.setData({ isLoading: true }); // 设置加载状态
    
    // 模拟 API 请求数据，加载更多艺术家
    setTimeout(() => {
      const newArtists = [
        // 可以设置从服务器上一次性读取多少个数据
        { id: 7, imgSrc: '../../image/artists/Artist 2.jpg', author: 'Artist 7' },
        { id: 8, imgSrc: '../../image/artists/Artist 3.png', author: 'Artist 8' }
      ];
      this.num+=newArtists.length;
      // 合并现有的数据与新数据
      this.setData({
        artists: [...this.data.artists, ...newArtists],
        isLoading: false
      });
    }, 1000);
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {
    if (!this.data.isLoading&&this.num<this.nums) {
      // 页码加1
      this.setData({
        'queryObj.pagenum': this.data.queryObj.pagenum + 1
      });
      // 请求下一页数据
      this.getArtistsList();
    }
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */

    // 暂时未完成
  onPullDownRefresh() {
    // 重置数据并重新请求
    this.setData({
      'queryObj.pagenum': 1,
      ArtistList: []
    });
    this.getArtistsList();

    // 结束下拉刷新动作
    wx.stopPullDownRefresh();
  },


  /**
   * 点击图片跳转到介绍页面
   */
  goToIntroPage(e) {
    const id = e.currentTarget.dataset.id; // 获取当前点击的图片 ID
    wx.navigateTo({
      url: `/pages/Intro/Intro?id=${id}` // 跳转到介绍页面，携带图片的 ID
    });
  },

  /**
   * 点击作者名跳转到介绍页面
   */
  goToAuthorPage(e) {
    const id = e.currentTarget.dataset.id; // 获取当前点击的作者 ID
    wx.navigateTo({
      url: `/pages/Author/Author?id=${id}` // 跳转到作者介绍页面，携带作者的 ID
    });
  },
   
});