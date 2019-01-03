/*
  通过判断用户发送的消息类型，设置具体返回的响应内容
 */
const {url} = require('../config');

module.exports = message => {
  
  //初始化消息配置对象
  let options = {
    toUserName: message.FromUserName,
    fromUserName: message.ToUserName,
    createTime: Date.now(),
    msgType: 'text'
  }
  
  //初始化一个消息文本
  let content = 'hi,小可爱,欢迎你哦~🎉🎉🎉';
  
  if (message.MsgType === 'text') {
    if (message.Content === '游游侠') {  //全匹配
      content = '游游侠,让旅行简单快乐';
    } else if (message.Content.includes('滑雪')) {  //半匹配
      //回复图文消息
      options.msgType = 'news';
      options.title = '欢迎关注游游侠户外旅行';
      options.description = '游游侠,让旅行简单快乐!';
      options.picUrl = 'https://pic.yyxtrip.com/yyxpic/201812/80BCB7A26DA44D8CB1C62F5D334A03CB.png';
      options.url = 'https://www.yyxtrip.com/';
    } else if (message.Content.includes ('崇礼')) {
      //回复图文消息
      options.msgType = 'news';
      options.title = '欢迎关注游游侠户外旅行';
      options.description = '游游侠,让旅行简单快乐!让生活多姿多彩!';
      options.picUrl = 'https://pic.yyxtrip.com/yyxpic/201812/80BCB7A26DA44D8CB1C62F5D334A03CB.png';
      options.url = 'https://www.yyxtrip.com/';
    }
  } else if (message.MsgType === 'voice') {
    //说明用户发送的是语音消息
    content = `语音识别结果为: ${message.Recognition}`;
  } else if (message.MsgType === 'location') {
    //用户主动发送位置
    content = `纬度：${message.Location_X}  经度：${message.Location_Y} 地图的缩放大小：${message.Scale} 位置详情：${message.Label}`;
  } else if (message.MsgType === 'event') {
    if (message.Event === 'subscribe') {
      //关注事件/订阅事件
      content = '欢迎您关注游游侠公众号~';
      if (message.EventKey) {
        //说明扫了带参数的二维码
        content = '欢迎您关注公众号~';
      }
    } else if (message.Event === 'unsubscribe') {
      //取消关注事件
      console.log('无情取关~');
    } else if (message.Event === 'LOCATION') {
      //用户初次访问公众号，会自动获取地理位置
      content = `纬度：${message.Latitude} 经度：${message.Longitude}`;
    } else if (message.Event === 'CLICK') {
      //用户初次访问公众号，会自动获取地理位置
      content = `用户点击了：${message.EventKey}`;
    }
  }
  //判断用户发送消息的内容，根据内容返回特定的响应
  options.content = content;
  return options;
  
}
