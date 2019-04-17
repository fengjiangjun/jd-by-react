import React from 'react';
import Slider from 'react-slider-fjj';
import { render } from 'react-dom';
import { One, Six, Ten, Seven, Edging } from '../src/merge/merge.js';
import './demo.css';

const txt = [
  {
    txt1: '北京',

  }
];
const five = 'http://ku.90sjimg.com/element_origin_min_pic/17/11/11/f73c3f182dedf7b1d1bf13d4d2530e41.jpg';
const two = [
  {
    text: '您好，请登录',
    href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dbaidu-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_baidupinzhuan%26utm_term%3D0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ed2a4c6f6e1845628aba5cdb52a12bb8'

  },
  {
    text: '免费注册',
    href: 'https://reg.jd.com/reg/person?ReturnUrl=https%3A//www.jd.com/%3Fcu%3Dtrue%26utm_source%3Dbaidu-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_baidupinzhuan%26utm_term%3D0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ed2a4c6f6e1845628aba5cdb52a12bb8'
  },
  {
    text: '|'
  },
  {
    text: '我的订单',
    href: 'https://passport.jd.com/uc/login?ReturnUrl=https%3A%2F%2Forder.jd.com%2Fcenter%2Flist.action'
  },
  {
    text: '|'
  },
  {
    text: '我的京东',
    href: 'https://passport.jd.com/uc/login?ReturnUrl=https%3A%2F%2Forder.jd.com%2Fcenter%2Flist.action'

  },
  {
    text: '|'
  },
  {
    text: '京东会员',
    href: 'https://passport.jd.com/uc/login?ReturnUrl=https%3A%2F%2Forder.jd.com%2Fcenter%2Flist.action'

  },
  {
    text: '|'
  },
  {
    text: '企业采购',
    href: 'https://b.jd.com/'
  },
  {
    text: '|'
  },
  {
    text: '客户服务'
  },
  {
    text: '|'
  },
  {
    text: '网购导航'
  },
  {
    text: '|'
  },
  {
    text: '手机京东'
  }
];
let display = 'none';
const six = [
  ['北京', '上海', '天津', '重庆', '河北'],
  ['山西', '河南', '辽宁', '吉林', '黑龙江'],
  ['内蒙古', '山东', '江苏', '安徽', '浙江'],
  ['福建', '湖北', '湖南', '广东', '广西']];
const seven = [['待处理订单', '返修退换货', '降价商品'], ['消息', '我的问答', '我的关注']];
const eight = [['企业购', '工业品'], ['商品场景馆', '礼品卡']];
const nine = [['帮助中心', '电话客服', '在线客服', '金融资讯'], ['售后服务', '意见建议', '客服邮箱', '全球售客服',]];
const ten = [['特色主题'], ['行业频道'], ['生活服务'], ['更多精选']];
const yes = 'https://misc.360buyimg.com/mtd/pc/index_2017/2.1.0/static/images/mobile_qrcode.png';
const ones = [
  {
    text: '美发风尚节',
    href: 'https://pro.jd.com/mall/active/3Fv5vcMoGn61RiS3yroNnvK1uggJ/index.html'
  },
  /*{
    text: '四月减肥季',
    herf: 'https://pro.jd.com/mall/active/3Fv5vcMoGn61RiS3yroNnvK1uggJ/index.html'
  },
  {
    text: '家电家装季',
    herf: 'https://pro.jd.com/mall/active/3Fv5vcMoGn61RiS3yroNnvK1uggJ/index.html'
  },*/
  {
    text: '200减100',
    href: 'https://pro.jd.com/mall/active/46Vsus7SpKRgDbyAUitFHeBJnthu/index.html'
  },
  {
    text: '9.9元',
    href: 'https://pro.jd.com/mall/active/2E2TZXAkgRzMyEzqFy1J2eRpsapC/index.html'
  },
  {
    text: '天梭手表',
    href: 'https://pro.jd.com/mall/active/2jKvr8D5kLpsrCzvcTX8ufyGoNvK/index.html'
  },
  {
    text: 'x390新品',
    href: 'https://pro.jd.com/mall/active/2M4o7NTzHH6jEJXS7VbpbTAANQB9/index.html'
  },
  {
    text: '领卷满减',
    href: 'https://h5static.m.jd.com/pc/mall/active/3MKMtLrAkdse3158NN9fdSzCcjM4/index.html'
  },
  {
    text: '建材放价',
    href: 'https://pro.jd.com/mall/active/r1t1zRia6hkmS4MZwVw2jwGp5t8/index.html'
  },
  {
    text: '泰国榴莲',
    href: 'https://pro.jd.com/mall/active/2v1S1wu5QCKwvrQibhnJaU7JUFGe/index.html'
  },
  {
    text: '减肥季',
    href: 'https://pro.jd.com/mall/active/25XMe3mEmqdzZqp743pDR9rQGANh/index.html'
  }];
const twos = {
  text: '我的购物车',
  href: 'https://cart.jd.com/cart.action'
};
const threes = [
  {
    text: '秒杀',
    href: 'https://miaosha.jd.com/'
  },
  {
    text: '优惠卷',
    href: 'https://a.jd.com/'
  },
  {
    text: 'PLUS会员',
    href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fplus.jd.com%2Findex%3Fflow_system%3Dappicon%26flow_entrance%3Dappicon11%26flow_channel%3Dpc'
  },
  {
    text: '闪购',
    href: 'https://red.jd.com/'
  },
  {
    text: '|'
  },
  {
    text: '拍卖',
    href: 'https://auction.jd.com/home.html'
  },
  {
    text: '京东时尚',
    href: 'https://channel.jd.com/fashion.html'
  },
  {
    text: '京东超市',
    href: 'https://chaoshi.jd.com/'
  },
  {
    text: '京东生鲜',
    href: 'https://fresh.jd.com/'
  },
  {
    text: '|'
  },
  {
    text: '海囤全球',
    href: 'https://www.jd.hk/'
  },
  {
    text: '京东金融',
    href: 'https://jr.jd.com/'
  }

];
const tens = [
  [
    {
      text: '家用电器',
      href: 'https://jiadian.jd.com/'
    }
  ],
  [
    {
      text: '手机',
      href: 'https://shouji.jd.com/'
    },
    {
      text: '/'
    },
    {
      text: '运营商',
      herf: 'https://wt.jd.com/'
    },
    {
      text: '/'
    },
    {
      text: '数码',
      href: 'https://shuma.jd.com/'
    }
  ],
  [
    {
      text: '电脑',
      href: 'https://diannao.jd.com/'
    },
    {
      text: '/'
    },
    {
      text: '办公',
      href: 'https://bg.jd.com/'
    }
  ],
  [
    {
      text: '家居',
      href: 'https://channel.jd.com/home.html'
    },
    {
      text: '/'
    },
    {
      text: '家具',
      href: 'https://channel.jd.com/furniture.html'
    },
    {
      text: '/'
    },
    {
      text: '家装',
      href: 'https://channel.jd.com/decoration.html'
    },
    {
      text: '/'
    },
    {
      text: '厨具',
      href: 'https://channel.jd.com/kitchenware.html'
    }
  ],
  [
    {
      text: '男装',
      href: 'https://channel.jd.com/1315-1342.html'
    },
    {
      text: '/'
    },
    {
      text: '女装',
      href: 'https://channel.jd.com/women.html'
    },
    {
      text: '/'
    },
    {
      text: '童装',
      href: 'https://channel.jd.com/children.html'
    },
    {
      text: '/'
    },
    {
      text: '内衣',
      href: 'https://channel.jd.com/underwear.html'
    }
  ],
  [
    {
      text: '美妆',
      href: 'https://beauty.jd.com/'
    },
    {
      text: '/'
    },
    {
      text: '个护清洁',
      href: 'https://channel.jd.com/beauty.html'
    },
    {
      text: '/'
    },
    {
      text: '宠物',
      href: 'https://channel.jd.com/pet.html'
    }
  ],
  [
    {
      text: '女鞋',
      href: 'https://channel.jd.com/womensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '箱包',
      href: 'https://channel.jd.com/bag.html'
    },
    {
      text: '/'
    },
    {
      text: '钟表',
      href: 'https://channel.jd.com/watch.html'
    },
    {
      text: '/'
    },
    {
      text: '珠宝',
      href: 'https://channel.jd.com/jewellery.html'
    }
  ],
  [
    {
      text: '男鞋',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '运动',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '户外',
      href: 'https://channel.jd.com/mensshoes.html'
    }
  ],
  [
    {
      text: '房产',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '汽车',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '汽车用品',
      href: 'https://channel.jd.com/mensshoes.html'
    }
  ],
  [
    {
      text: '母婴',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '玩具乐器',
      href: 'https://channel.jd.com/yundongcheng.html'
    },

  ],
  [
    {
      text: '食品',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '酒类',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '生鲜',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '特产',
      herf: 'https://channel.jd.com/mensshoes.html'
    }
  ],
  [
    {
      text: '艺术',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '礼品鲜花',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '农资绿植',
      href: 'https://channel.jd.com/mensshoes.html'
    },
  ],
  [
    {
      text: '医疗保健',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '计生情趣',
      href: 'https://channel.jd.com/yundongcheng.html'
    }
  ],
  [
    {
      text: '图书',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '文娱',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '电子书',
      href: 'https://channel.jd.com/yundongcheng.html'
    }
  ],
  [
    {
      text: '机票',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '酒店',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '旅游',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '生活',
      href: 'https://channel.jd.com/yundongcheng.html'
    }
  ],
  [
    {
      text: '理财',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '众筹',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '白条',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '保险',
      href: 'https://channel.jd.com/yundongcheng.html'
    }

  ],
  [
    {
      text: '安装',
      href: 'https://channel.jd.com/mensshoes.html'
    },
    {
      text: '/'
    },
    {
      text: '维修',
      href: 'https://channel.jd.com/yundongcheng.html'
    },
    {
      text: '/'
    },
    {
      text: '清洗保养',
      href: 'https://channel.jd.com/mensshoes.html'
    }
  ],
  [
    {
      text: '工业品',
      href: 'https://channel.jd.com/mensshoes.html'
    }
  ]
];
const tenImg = {
  img: 'http://misc.360buyimg.com/mtd/pc/index_2017/2.1.0/static/images/sprite.head.png',
  href: 'https://hellojoy.jd.com/?babelChannel=1518455&activityId=9690&source=01'
}
const imgss = [
  {
    img: 'http://img13.360buyimg.com/babel/s380x300_jfs/t1/23110/38/13042/10431/5c9c40ceE572d12bb/df2e13d9ce7024cf.jpg!q90!cc_190x150',
    href: 'https://fresh.jd.com/'
  },
  {
    img: 'http://img13.360buyimg.com/babel/s380x300_jfs/t1/11740/5/15089/34719/5ca5aec2E927d3daf/b6bce72a61ee6ca5.jpg!q90!cc_190x150',
    href: 'https://pro.jd.com/mall/active/25XMe3mEmqdzZqp743pDR9rQGANh/index.html'
  },
  {
    img: 'http://img1.360buyimg.com/pop/s380x300_jfs/t1/15737/21/14262/42629/5ca5edaeEefcb3517/78a2899c4e3bb1fa.jpg!q90!cc_190x150',
    href: 'https://sale.jd.com/mall/LKHdqZUIYk.html?extension_id=eyJhZCI6IjM1MDYiLCJjaCI6IjIiLCJzaG9wIjoiMTAwMDAwMTQ1MiIsInRzIjoiMTU1NDc5NDEyNCIsInVuaXFpZCI6IntcImNsaWNrX2lkXCI6XCIzZGM2MTA1Yi04NzgwLTQ2MmEtOGY1YS05YzcxYzBhYzI2MmZcIixcIm1hdGVyaWFsX2lkXCI6XCIzOTgxMDY5MjlcIixcInBvc19pZFwiOlwiMzUwNlwiLFwic2lkXCI6XCJlYWY2MzAyOS0zZjQ2LTRhZWQtYmUzZi0wZWYzMmQ2NjNjZDVcIn0ifQ==&jd_pop=3dc6105b-8780-462a-8f5a-9c71c0ac262f&abt=1'
  }
];
const img1 = {
  img: 'http://m.360buyimg.com/babel/jfs/t1/29371/33/13908/4283/5ca33e65E13b65d4c/fe45904df7c0f33b.gif',
  href: 'https://pro.jd.com/mall/active/2M4o7NTzHH6jEJXS7VbpbTAANQB9/index.html'
};
const img2 = {
  img: 'http://misc.360buyimg.com/mtd/pc/common/img/no_login.jpg',
  href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=http%3A%2F%2Fhome.jd.com%2F'
};
const text1 = 'hi~欢迎来到京东';
const text2 = [
  {
    text: '登陆',
    href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dbaidu-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_baidupinzhuan%26utm_term%3D0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ed2a4c6f6e1845628aba5cdb52a12bb8'
  },
  {
    text: '注册',
    href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fwww.jd.com%2F%3Fcu%3Dtrue%26utm_source%3Dbaidu-pinzhuan%26utm_medium%3Dcpc%26utm_campaign%3Dt_288551095_baidupinzhuan%26utm_term%3D0f3d30c8dba7459bb52f2eb5eba8ac7d_0_ed2a4c6f6e1845628aba5cdb52a12bb8'
  }
];
const text3 = [
  {
    text: '新人福利',
    href: 'https://xinren.jd.com/?channel=99'
  },
  {
    text: 'PLUS会员',
    href: 'https://passport.jd.com/new/login.aspx?ReturnUrl=https%3A%2F%2Fplus.jd.com%2Findex%3Fflow_system%3Dappicon%26flow_entrance%3Dappicon3%26flow_channel%3Dpc'
  }
];
const text4 = '京东快报';
const text5 = {
  text: '更多 >',
  href: 'https://kuaibao.jd.com/?ids=172497433,172584359'
};

function leave (e) {
  display = 'none';
  render1();
}
function enter (e) {
  display = 'flex';
  render1();
}

var displays = '';
function leaves (e) {
  displays = 'none';
  render1();
}
function enters (e) {
  displays = 'flex';
  render1();
}

let page;
const list = [{
  text: 'http://m.360buyimg.com/babel/jfs/t1/21603/24/11437/100132/5ca44dafEbf4161c2/62d61414970581d5.jpg',
  href: 'https://pro.jd.com/mall/active/3Fv5vcMoGn61RiS3yroNnvK1uggJ/index.html'
},
{
  text: 'http://img1.360buyimg.com/pop/jfs/t1/14615/40/12900/68298/5c9c865aE1435ab25/565c81701f2c8b4b.jpg',
  href: 'https://pro.jd.com/mall/active/4D543XqZ85rbXFCH28dAXBJkECN3/index.html?extension_id=eyJhZCI6IiIsImNoIjoiIiwic2hvcCI6IiIsInNrdSI6IiIsInRzIjoiIiwidW5pcWlkIjoie1wiY2xpY2tfaWRcIjpcIjFiNjI0MGFiLTQyMTgtNGJkMi1iMjRhLWNjYzQ5MGVhYjdiYlwiLFwibWF0ZXJpYWxfaWRcIjpcIjM4OTc4NDg1MFwiLFwicG9zX2lkXCI6XCIzNTAzXCIsXCJzaWRcIjpcImU1Yjg1YjkwLTNkMmYtNGFhMS05NWQ5LTE5MzZhMTgzM2Q2N1wifSJ9&jd_pop=1b6240ab-4218-4bd2-b24a-ccc490eab7bb&abt=1'
},
{
  text: 'http://img1.360buyimg.com/pop/jfs/t1/18497/22/15405/171725/5cad48e8E0ab223b6/de451f7860d7b6fe.jpg',
  href: 'https://pro.jd.com/mall/active/3QNubnVKMAiribdQRYPtZnofFsXe/index.html?extension_id=eyJhZCI6IjM1MDQiLCJjaCI6IjIiLCJzaG9wIjoiMTAwMDAwMTk2MSIsInRzIjoiMTU1NDg4MTM0MyIsInVuaXFpZCI6IntcImNsaWNrX2lkXCI6XCIxOWZmMzYwYi0xNjA4LTQ5ODQtYjBhNC1iNDE2YjI5Y2ZiYzhcIixcIm1hdGVyaWFsX2lkXCI6XCI0MDE3Nzk5NzZcIixcInBvc19pZFwiOlwiMzUwNFwiLFwic2lkXCI6XCI4MDJlMzg3ZS02ZGYxLTQxOTQtOWUzMi00YzdiNzlkMzU0MDBcIn0ifQ==&jd_pop=19ff360b-1608-4984-b0a4-b416b29cfbc8&abt=1'
},
{
  text: 'http://m.360buyimg.com/babel/jfs/t1/19934/4/14989/83482/5cab00ddE3162b5b6/1a07231dd6bdc367.jpg',
  href: 'https://pro.jd.com/mall/active/373RLVB4c1CseUuxt6z1LgdiUedU/index.html'
},
];
const text6 = [
  {
    text: '公告',
    href: 'https://kuaibao.jd.com/notice?id=715'
  },
  {
    text: '活动',
    href: 'https://channel-m.jd.com/pc/brand/1975749?cpdad=1DLSUE'
  },
  {
    text: '热议',
    href: 'https://kuaibao.jd.com/article?id=172940611'
  },
  {
    text: 'HOT',
    href: 'https://kuaibao.jd.com/article?id=172140563'
  }
];
const text7 = [
  {
    text: '瑞士钟表品牌宝齐莱...',
    href: 'https://kuaibao.jd.com/notice?id=715'
  },
  {
    text: '优选好货',
    href: 'https://channel-m.jd.com/pc/brand/1975749?cpdad=1DLSUE'
  },
  {
    text: '苹果为“讨好”中国...',
    href: "https://kuaibao.jd.com/article?id=172940611"
  },
  {
    text: '华为确认放弃安卓,...',
    href: 'https://kuaibao.jd.com/article?id=172140563'
  }
];
const text8 = [
  [
    {
      img: 'http://ww2.sinaimg.cn/small/da3876f0jw1esgup8mh57j20hs0hstab.jpg',
      text: '话费'
    },
    {
      img: 'http://bpic.588ku.com/element_origin_min_pic/00/94/09/7856f2b8c6951e1.jpg',
      text: '机票'
    },
    {
      img: 'http://pic.ffpic.com/files/2016/0711/sl0612p6u1k.jpg',
      text: '酒店'
    },
    {
      img: 'http://pic.90sjimg.com/design/00/07/85/23/5933c8a627310.png',
      text: '游戏'
    }
  ],
  [
    {
      img: 'http://img4.imgtn.bdimg.com/it/u=3560733637,1342090879&fm=26&gp=0.jpg',
      text: '企业购'
    },
    {
      img: 'http://duanhongxuan.com/upload/2018071035460345.jpg',
      text: '加油卡'
    },
    {
      img: 'http://pic.51yuansu.com/pic3/cover/01/44/98/5939864bb24dd_610.jpg',
      text: '电影票'
    },
    {
      img: 'http://a4.att.hudong.com/87/63/20300001251063130617638565783.jpg',
      text: '火车票'
    }
  ],
  [
    {
      img: 'http://img3.imgtn.bdimg.com/it/u=813037981,66812996&fm=26&gp=0.jpg',
      text: '众筹'
    },
    {
      img: 'http://img4.imgtn.bdimg.com/it/u=1214451332,4020202128&fm=26&gp=0.jpg',
      text: '理财'
    },
    {
      img: 'http://pic.51yuansu.com/pic2/cover/00/43/69/5813979bd3398_610.jpg',
      text: '礼品卡'
    },
    {
      img: 'http://img1.imgtn.bdimg.com/it/u=230629239,3015248800&fm=26&gp=0.jpg',
      text: '白条'
    }
  ]

];
const sevenList = [
  {
    src: 'http://img14.360buyimg.com/mobilecms/s280x280_jfs/t1/34841/10/1802/197661/5cb417f3Ef62c49a6/c9cae820e50ec243.jpg!q90.webp',
    text: '宝贝第一（Babyfirst）汽车儿童安全座椅 约9个月-12岁 ISOFIX接口 3C认证 铠甲舰队尊享版 星际蓝',
    price1: '$ 1149.00',
    price2: '$ 1190.00'
  },
  {
    src: 'http://img11.360buyimg.com/mobilecms/s280x280_jfs/t17263/288/1456956871/622203/c00f3c64/5acb23dcNd4d2cc36.jpg!q90.webp',
    text: '张裕（CHANGYU）红酒  特选级窖藏（圆筒装）干红葡萄酒750ml*6瓶整箱',
    price1: '$ 305.00',
    price2: '$ 339.00'
  },
  {
    src: 'http://img12.360buyimg.com/mobilecms/s280x280_jfs/t1/33549/18/2406/108518/5cae9fb6E8239a9e9/96653ddcc087ccce.jpg!q90.webp',
    text: '潘婷氨基酸洗发水丝质顺滑750ml (柔顺 水润 光泽 新老包装随机发货）',
    price1: '$ 38.90',
    price2: '$ 75.99'
  },
  {
    src: 'http://img11.360buyimg.com/mobilecms/s280x280_jfs/t1/30320/33/11165/199056/5cb4205dE9fff2b69/306b5d6803cb6994.jpg!q90.webp',
    text: '华硕(ASUS)飞行堡垒6Plus 17.3英寸游戏笔记本电脑(i7-8750H 8G 256GSSD+1T GTX1060 72%NTSC 144Hz)金属电竞',
    price1: '$ 8468.00',
    price2: '$ 9999.00'
  }
];
const list2 = [
  {
    text: 'http://img30.360buyimg.com/mobilecms/s360x520_jfs/t1/26350/10/15342/106714/5cb089eeE9eeea7c2/f319990400cad980.jpg!q90!cc_180x260'
  },
  {
    text: 'http://img11.360buyimg.com/mobilecms/s360x520_jfs/t1/19344/28/15568/52497/5cb09c16Edfa51090/5b65a5ad45b04c10.jpg!q90!cc_180x260'
  }
]

function render1 () {
  page = <div className="content">
    <One txt={txt} two={two} five={five} leave={leave} enter={enter} leaves={leaves} enters={enters} six={six} display={display} displays={displays} seven={seven} />
    <div><Six yes={yes} ones={ones} twos={twos} threes={threes} />
      <Ten tens={tens} tenImg={tenImg} imgss={imgss} img1={img1} img2={img2} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6} text7={text7} text8={text8}><Slider roundClassName={'round1'} roundActiveClassName={'roundActive1'} list={list} transitionTime={'3s'} width={590} height={470} /></Ten>
      <Seven sevenList={sevenList}><Slider roundClassName={'round'} roundActiveClassName={'roundActive'} list={list2} width={180} height={260}></Slider></Seven>
    </div >
    <Edging />
  </div>
  render(page, document.getElementById('root'));
}

render1();
