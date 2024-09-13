Page({
  data: {
    artist: {},
    works: []
  },

  onLoad(options) {
    const id = options.id; // 获取传递的艺术家ID
    
    // 假设这是模拟的艺术家数据
    const artists = [
      { id: 1, name: 'Artist 1', description: 'This is artist 1 description' },
      { id: 2, name: 'Artist 2', description: 'This is artist 2 description' },
      { id: 3, name: 'Artist 3', description: 'This is artist 3 description' },
      { id: 4, name: 'Artist 4', description: 'This is artist 4 description' },
      { id: 5, name: 'Artist 5', description: 'This is artist 5 description' },
      { id: 6, name: 'Artist 6', description: 'This is artist 6 description' }
    ];

    // 模拟作品数据
    const works = [
      { id: 1, imgSrc: "image/artists/Artist 1.jpg", name: "\ntest1", intro: "\nIntroduction1" },
      { id: 2, imgSrc: "image/artists/Artist 2.jpg", name: "\ntest2", intro: "\nIntroduction2" },
      { id: 3, imgSrc: "image/artists/Artist 3.jpg", name: "\ntest3", intro: "\nIntroduction3" },
      { id: 4, imgSrc: "image/artists/Artist 4.jpg", name: "\ntest4", intro: "\nIntroduction4" },
      { id: 5, imgSrc: "image/artists/Artist 5.jpg", name: "\ntest5", intro: "\nIntroduction5" }
    ];

    // 根据id找到对应的艺术家信息
    const artist = artists.find(item => item.id === parseInt(id));
    if (artist) {
      this.setData({
        artist,
        works: works // 这里可以将作品列表传入页面数据中
      });
    }
  }
});
