/*
  菜单配置模块
 */

module.exports =  {
  "button":[
    {
      "name":"活动",
      "sub_button":[
        {
          "type":"view",
          "name":"本周活动",
          "url":"https://www.yyxtrip.com/m-service/activity/list?page=1&size=10&time=week"
        },
        {
          "type":"view",
          "name":"所有活动",
          "url":"https://www.yyxtrip.com/m-service/activity/list?page=1&size=10&time=week"
        },
        {
          "type":"click",
          "name":"活动咨询~",
          "key":"添加客服微信,咨询活动详情=>烧饼:w18210176544"
          
        },
      ]
    },
    {
      "name":"游游侠",
      "sub_button":[
        {
          "type":"view",
          "name":"活动反馈",
          "url":"http://cn.mikecrm.com/BWTePR3"
        },
        {
          "type":"view",
          "name":"关于游游侠",
          "url":"https://www.yyxtrip.com/"
        },
        {
          "type":"view",
          "name":"游游侠美文",
          "url":"https://www.yyxtrip.com/leader/list"
        },
        {
          "type":"view",
          "name":"游游侠招募贴",
          "url":"https://mp.weixin.qq.com/s/p7OSldhy01A_2sIq2ObsVQ"
        },
      ]
    },
    {
      "name":"我的",
      "sub_button":[
        {
          "type":"view",
          "name":"个人中心",
          "url":"https://www.yyxtrip.com/wechat/user/userInfo"
        },
        {
          "type":"view",
          "name":"我的订单",
          "url":"https://www.yyxtrip.com/wechat/orders/getUserOrders"
        },
        {
          "name": "我的位置",
          "type": "location_select",
          "key": "rselfmenu_2_0"
        },
        {
          "type": "media_id",
          "name": "图片",
          "media_id": "8FpT055Wb8qXDmCxltG6e_Lt_DtCqR0qLsWUC_djMuI"
        },
        {
          "type": "view_limited",
          "name": "图文消息",
          "media_id": "media_id: '8FpT055Wb8qXDmCxltG6e0MkeQAXyfQs8J-fgC2a8SU"
        }
        
      ]
    }
    ]
}



