export interface Attachment {
  type: 'music' | 'location' | 'file' | 'image' | 'link';
  icon: string;
  text: string;
}

export interface Message {
  id: number;
  mbtiType: string;
  content: string;
  time: string;
  status?: 'revoked' | 'banned';
  banTime?: string;
  attachments?: Attachment[];
  mentions?: string[];
}

export interface Conversation {
  id: string;
  title: string;
  messages: Message[];
}

// 定义团建话题的聊天记录
export const teamBuildingConversation: Conversation = {
  id: 'team-building',
  title: '公司团队群聊',
  messages: [
    {
      id: 1,
      mbtiType: 'ENTJ',
      content: '凌晨1点发工作文档？<br/><span class="user-mention">@所有人</span> 下周团建方案投票，3分钟内给我结果。',
      time: '01:03',
      mentions: ['所有人']
    },
    {
      id: 2,
      mbtiType: 'INFP',
      content: '…可是今天42度欸🥵 人类真的需要团建吗？',
      time: '01:05',
      attachments: [
        {
          type: 'music',
          icon: 'music',
          text: '分享歌曲《逃离地球》'
        }
      ]
    },
    {
      id: 3,
      mbtiType: 'ESTP',
      content: '<span class="user-mention">@ENTJ</span> 不如去冲浪！我刚买了摩托艇，浪越大鱼越贵！',
      time: '01:06',
      attachments: [
        {
          type: 'location',
          icon: 'map-pin',
          text: '三亚后海'
        }
      ],
      mentions: ['ENTJ']
    },
    {
      id: 4,
      mbtiType: 'INTJ',
      content: '高温天团建=降低团队效率47.3%，建议改线上。',
      time: '01:08',
      attachments: [
        {
          type: 'file',
          icon: 'file-text',
          text: '附《空调房生存指南》.pdf'
        }
      ]
    },
    {
      id: 5,
      mbtiType: 'ESFJ',
      content: '大家辛苦啦！我买了冰镇西瓜🍉和藿香正气水🥤，明天放公司冰箱~',
      time: '01:10'
    },
    {
      id: 6,
      mbtiType: 'ENTJ',
      content: '<span class="user-mention">@ESTP</span> 摩托艇能开发票吗？<br/><span class="user-mention">@INTJ</span> 你统计下中暑概率。<br/><span class="user-mention">@ESFJ</span> 西瓜钱走报销。',
      time: '01:12',
      mentions: ['ESTP', 'INTJ', 'ESFJ']
    },
    {
      id: 7,
      mbtiType: 'INFP',
      content: '（突然发疯）我要去山里当野人！和松鼠讨论存在主义！！',
      time: '01:15',
      status: 'revoked'
    },
    {
      id: 8,
      mbtiType: 'ESTP',
      content: '<span class="user-mention">@INFP</span> 尊嘟假嘟？带我一个！我知道有个瀑布能裸泳🌊',
      time: '01:16',
      status: 'banned',
      banTime: '1分钟',
      mentions: ['INFP']
    },
    {
      id: 9,
      mbtiType: 'INTJ',
      content: '<span class="user-mention">@INFP</span> 最新研究：当野人WiFi覆盖率为0，你确定吗？',
      time: '01:18',
      attachments: [
        {
          type: 'link',
          icon: 'link',
          text: '《5G基站分布图》'
        }
      ],
      mentions: ['INFP']
    },
    {
      id: 10,
      mbtiType: 'ESFJ',
      content: '<span class="user-mention">@INFP</span> 宝，我陪你周末去公园喂鸽子吧😊',
      time: '01:20',
      attachments: [
        {
          type: 'image',
          icon: 'image',
          text: '发送摸摸头表情包'
        }
      ],
      mentions: ['INFP']
    }
  ]
};

// 创建第二个对话数据：BE剧话题
export const beDramaConversation: Conversation = {
  id: 'be-drama',
  title: 'MBTI相亲相爱一家人',
  messages: [
    {
      id: 1,
      mbtiType: 'INFP',
      content: '你那是不懂BE美学',
      time: '22:15'
    },
    {
      id: 2,
      mbtiType: 'ENFP',
      content: 'BE美学我知道！爱而不得！',
      time: '22:16'
    },
    {
      id: 3,
      mbtiType: 'ISTJ',
      content: '但是过多的忧伤对现实生活没有任何好处啊',
      time: '22:18'
    },
    {
      id: 4,
      mbtiType: 'ENFJ',
      content: '爱和悲剧本身就是一种力量！',
      time: '22:20'
    },
    {
      id: 5,
      mbtiType: 'ISTP',
      content: '为什么明天就要上班了，你们还能聊得这么开心',
      time: '22:22'
    }
  ]
};

// 创建第三个对话数据：影视剧评论
export const dramaReviewConversation: Conversation = {
  id: 'drama-review',
  title: '电视剧讨论组',
  messages: [
    {
      id: 1,
      mbtiType: 'INFP',
      content: '友友们《XXXX》真的很好看（抹眼泪.jpg',
      time: '20:30',
      attachments: [
        {
          type: 'image',
          icon: 'image',
          text: '抹眼泪.jpg'
        }
      ]
    },
    {
      id: 2,
      mbtiType: 'ESFP',
      content: '是HE还是BE啊？',
      time: '20:32'
    },
    {
      id: 3,
      mbtiType: 'ISFP',
      content: '啊是那个剧啊',
      time: '20:33'
    },
    {
      id: 4,
      mbtiType: 'ISFP',
      content: '那个剧很好好哭的',
      time: '20:33'
    },
    {
      id: 5,
      mbtiType: 'ESFP',
      content: '救命为什么不是HE，我喜欢看大团圆结局',
      time: '20:35'
    }
  ]
};

// 创建第四个对话数据：MBTI摆烂互助群
export const mbtiGroupConversation: Conversation = {
  id: 'mbti-group',
  title: '周一请假理由研发中心',
  messages: [
    {
      id: 1,
      mbtiType: 'ENTJ',
      content: '（凌晨3点）<span class="user-mention">@所有人</span> 本周KPI冲刺方案V12已发群，重点：<br/><br/>上厕所必须小跑<br/><br/>午睡改用睁眼冥想术',
      time: '03:00',
      mentions: ['所有人'],
      attachments: [
        {
          type: 'file',
          icon: 'file-text',
          text: '《如何把咖啡因注射到颈动脉》.pdf'
        }
      ]
    },
    {
      id: 2,
      mbtiType: 'INFP',
      content: '…我的灵魂说它要冬眠到2035年<br/>（妈妈秒回：先把你冰箱里的酸奶盒扔了）',
      time: '03:05'
    },
    {
      id: 3,
      mbtiType: 'ESTP',
      content: '笑死！我刚把辞职信折成纸飞机扔老板脸上',
      time: '03:10',
      attachments: [
        {
          type: 'link',
          icon: 'link',
          text: '《职场刺客の108种死法》'
        }
      ]
    },
    {
      id: 4,
      mbtiType: 'ISTJ',
      content: '已统计本群本月请假理由：<br/>▫️ 痔疮复发（32次）<br/>▫️ 二舅的狗的绝育手术（15次）<br/>▫️ 被外星人绑架未遂（1次）',
      time: '03:15'
    },
    {
      id: 5,
      mbtiType: 'ENTJ',
      content: '被外星人绑架未遂',
      time: '03:16',
      status: 'revoked'
    },
    {
      id: 6,
      mbtiType: 'ENFP',
      content: '啊啊啊！我想当流浪画家/奶茶店员/南极科考员…<br/>（同时报名8个培训班并花光工资）',
      time: '03:20'
    },
    {
      id: 7,
      mbtiType: 'INTJ',
      content: '<span class="user-mention">@ENTJ</span> 数据显示你司离职率超过殡仪馆满意度<br/>建议：把工位改装成休眠舱，实现24小时可持续性压榨',
      time: '03:25',
      mentions: ['ENTJ']
    },
    {
      id: 8,
      mbtiType: 'ESFJ',
      content: '宝们辛苦了！我烤了脑干形状饼干放前台😘<br/>（INFP因过度共情饼干开始写诗）',
      time: '03:30'
    },
    {
      id: 9,
      mbtiType: 'ISTP',
      content: '（突然潜水）通知：<br/>本周团建项目——<br/><br/>凌晨徒步戈壁滩<br/><br/>在钉钉群表演胸口碎大石换年假',
      time: '03:40'
    },
    {
      id: 10,
      mbtiType: '全体成员',
      content: '（头像集体变灰）',
      time: '03:45'
    }
  ]
};

// 导出所有对话
export const allConversations: Record<string, Conversation> = {
  'team-building': teamBuildingConversation,
  'be-drama': beDramaConversation,
  'drama-review': dramaReviewConversation,
  'mbti-group': mbtiGroupConversation
}; 