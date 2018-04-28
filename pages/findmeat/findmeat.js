// pages/search/search.js
//定义索引字母数组
var indexArr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var y = 0;
//获取touchstart字母数组角标
function getArrIndex(english) {
  // console.log(Page)
  for (var x = 0; x < indexArr.length; x++) {
    if (english == indexArr[x]) {
      return x;
    }
  }
}
//num 移动了多少位 index 当前字母,返回当前触摸位置节点的字母
function getArrEnglish(num, index) {
  var english = indexArr[index + num];
  if (!(1 > num + index > 26)) {
    return english;
  } else {
    return AAA;
  }
}
Page({
  data: {
    rightShow: false,
    dropShow: false,
    indexShow: false,
    toView: "e",
    scrollTop: 1000,
    indexId: "",
    indexy: "",
    indexEnglish: "",
    arrId: indexArr,
    userInfo: "这个数据要细分",
    className: "",
    whether: "none",
    Brand: "none",
    pron: "none",
    Cilick:"",
    sort:[],
    _num:9999,
    Selected1:"",
    Selected2:"",
    Selected3:"",
    id1:"",
    id2: "",
    id3: "",
    clear:"none",
    products:[],
    handover: "",
    species: "",
    level: "",
    Selling_way: "1",
    price: "1",
    species: "",
    species: "",
    Units:"零售",
    recommend: "1", 
    ico:"⇅"
  },
  category: function (e) {
    var _key = '';
    this.data.whether == "none" ? _key = '-' : _key = "none";
    this.setData({
      whether: _key,
      pron: "none"
    })
  },
  attestation: function (e) {
    var _key = '';
    this.data.pron == "none" ? _key = '-' : _key = "none";
    this.setData({
      pron: _key,
      whether: "none",
    })
  },
  tagChoose: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'current': id,
      species: id + 2
    })
    setTimeout(function () {
      that.setData({
        whether: "none"
      })
    }, 500)
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })


  },
  Choose: function (e) {
    var that = this
    var id = e.currentTarget.dataset.id;
    console.log(id)
    //设置当前样式
    that.setData({
      'currentItem': id,
      level: id + 1
    })
    setTimeout(function () {
      that.setData({
        pron: "none"
      })
    }, 500)

    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })

  },
  Units: function () {
    var that = this

    //设置当前样式
    if (that.data.Selling_way == "1" && that.data.Units == "零售"){
      that.setData({
        Selling_way: '2',
        Units:"批发"
      })
    }else{
      that.setData({
        Selling_way: '1',
        Units: "零售"
      })
    }
    console.log(that.data.Selling_way)
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })

  },
  Price: function () {
    var that = this
    // console.log()
    //设置当前样式
    if (that.data.price == "1"){
      that.setData({
        price:""
      })
    }else{
      that.setData({
        price: "1"
      })
    }
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })

  },
  touchstart: function (e) {
    this.setData({
      indexId: e.target.id,
      toView: e.target.id.toLowerCase(),
      indexy: e.touches[0].pageY,
      indexShow: true,
      indexEnglish: e.target.id
    })
  },
  touchmove: function (e) {
    y = getArrIndex(e.target.id);
    var indexY = e.touches[0].pageY;
    if (getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)) {
      this.setData({
        toView: getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y).toLowerCase(),
        indexEnglish: getArrEnglish(Math.round((indexY - this.data.indexy) / 15), y)
      })
    }
  },
  touchend: function (e) {
    this.setData({
      indexShow: false
    })
  },
  showRequire:function(e){

    console.log(e.currentTarget.dataset)
    if (this.data.Selected1==""){
      this.setData({
        clear: "",
        Selected1: e.currentTarget.dataset.img,
        id1: e.currentTarget.dataset.id
      }) 
    }else if (this.data.Selected1 !== "" && this.data.Selected2 == "" && this.data.Selected1 !== e.currentTarget.dataset.img) {
      this.setData({
        Selected2: e.currentTarget.dataset.img,
        id2: e.currentTarget.dataset.id
      })
    } else if (this.data.Selected1 !== "" && this.data.Selected2 !== "" && this.data.Selected3 == "" && this.data.Selected1 !== e.currentTarget.dataset.img && this.data.Selected2 !== e.currentTarget.dataset.img){
      this.setData({
        Selected3: e.currentTarget.dataset.img,
        id3: e.currentTarget.dataset.id
      })
    }
    
    
  },
  Brand:function(){
    this.setData({
      Brand:"",
      Cilick:"none",
      handover: "none"
    })
  },
  defineBrand: function () {
    var that = this;
    this.setData({
      Brand: "none",
      Cilick: "",   
      handover: ""   
      // clear:"none"
    })
    console.log(that.data.id1)
    console.log(that.data.id2)
    console.log(that.data.id3)
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })
  },
  Clear:function() {
    this.setData({
      Selected1: "",
      Selected2: "",
      Selected3: "",
      id1: "",
      id2: "",
      id3: "",
      // clear:"none"
    })
  },
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowHeight: res.windowHeight,
          indexTop: res.windowHeight / 2 - 200
        });
      }
    })
    wx.request({
      url: 'https://api.mongoliaci.com/api/brand/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        
      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data.sort)
        that.setData({
          sort: res.data.sort
        });
      }
    })
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })
  },
  Recommend: function () {
    var that = this
    // console.log()
    //设置当前样式
    if (that.data.recommend == "1") {
      that.setData({
        recommend: "2"
      })
    } else {
      that.setData({
        recommend: "1"
      })
    }
    wx.request({
      url: 'https://api.mongoliaci.com/api/products/list/37fb591be38db52dd1d5f04b689008f6', //仅为示例，并非真实的接口地址
      data: {
        brand1: that.data.id1,
        brand2: that.data.id2,
        brand3: that.data.id3,
        species: that.data.species,
        level: that.data.level,
        Selling_way: that.data.Selling_way,
        price: that.data.price,
        recommended: that.data.recommend

      },
      header: {
        'content-type': 'application/json' // 默认值
      },
      success: function (res) {
        console.log(res.data)
        that.setData({
          products: res.data.products
        });
      }
    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})