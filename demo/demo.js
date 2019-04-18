import React from 'react';
import Slider from 'react-slider-fjj';
import { render } from 'react-dom';
import { One, Six, Ten, Seven, Edging } from '../src/merge/merge.js';
import topMenu from '../src/store/top-menu';
import searchBottom from '../src/store/search-bottom';
import mainMenu from '../src/store/main-menu';
import goodsForSale from '../src/store/goods-for-sale';
import rightMenu from '../src/store/right-menu';
import leftMenu from '../src/store/left-menu';
import './demo.css';

const txt = [
  {
    txt1: '北京',
  }
];
const five = 'http://ku.90sjimg.com/element_origin_min_pic/17/11/11/f73c3f182dedf7b1d1bf13d4d2530e41.jpg';

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

const twos = {
  text: '我的购物车',
  href: 'https://cart.jd.com/cart.action'
};

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

const list2 = [
  {
    text: 'http://img30.360buyimg.com/mobilecms/s360x520_jfs/t1/26350/10/15342/106714/5cb089eeE9eeea7c2/f319990400cad980.jpg!q90!cc_180x260'
  },
  {
    text: 'http://img11.360buyimg.com/mobilecms/s360x520_jfs/t1/19344/28/15568/52497/5cb09c16Edfa51090/5b65a5ad45b04c10.jpg!q90!cc_180x260'
  }
];

function render1 () {
  page = <div className="content">
    <One txt={txt} two={topMenu} five={five} leave={leave} enter={enter} leaves={leaves} enters={enters} six={six} display={display} displays={displays} seven={seven} />
    <div><Six yes={yes} ones={searchBottom} twos={twos} threes={mainMenu} />
      <Ten tens={leftMenu} tenImg={tenImg} imgss={imgss} img1={img1} img2={img2} text1={text1} text2={text2} text3={text3} text4={text4} text5={text5} text6={text6} text7={text7} text8={rightMenu}><Slider roundClassName={'round1'} roundActiveClassName={'roundActive1'} list={list} transitionTime={'3s'} width={590} height={470} /></Ten>
      <Seven sevenList={goodsForSale}><Slider roundClassName={'round'} roundActiveClassName={'roundActive'} list={list2} width={180} height={260}></Slider></Seven>
    </div >
    <Edging />
  </div>
  render(page, document.getElementById('root'));
}

render1();
