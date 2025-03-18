<template>
  <div class="chat-container">
    <div class="chat-header">
      <div class="back-button">
        <span>&lt;</span>
      </div>
      <div class="room-title">MBTI相亲相爱一家人</div>
      <div class="close-button" @click="switchChatGroup">
        <span>×</span>
      </div>
    </div>
    
    <div class="chat-body">
      <div v-for="(message, index) in messages" :key="index" class="message-container">
        <div class="avatar-container">
          <MbtiAvatar :mbti-type="message.mbtiType" />
          <div class="mbti-type">{{ message.mbtiType }}</div>
        </div>
        
        <div class="message-bubble" :class="{ 'message-right': message.position === 'right', 'message-left': message.position === 'left' }">
          <div class="message-content">{{ message.content }}</div>
        </div>
      </div>
    </div>
    
    <div class="chat-footer">
      <input type="text" class="message-input" placeholder="输入消息..." v-model="newMessage" @keyup.enter="sendMessage" />
      <button class="send-button" @click="sendMessage">发送</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import MbtiAvatar from './MbtiAvatar.vue'

interface Message {
  mbtiType: string
  content: string
  position: 'left' | 'right'
}

// 创建第二种聊天对话
const chatGroups = {
  group1: [
    {
      mbtiType: 'INFP',
      content: '你那是不懂BE美学',
      position: 'left'
    },
    {
      mbtiType: 'ENFP',
      content: 'BE美学我知道！爱而不得！',
      position: 'right'
    },
    {
      mbtiType: 'ISTJ',
      content: '但是过多的忧伤对现实生活没有任何好处啊',
      position: 'left'
    },
    {
      mbtiType: 'ENFJ',
      content: '爱和悲剧本身就是一种力量！',
      position: 'right'
    },
    {
      mbtiType: 'ISTP',
      content: '为什么明天就要上班了，你们还能聊得这么开心',
      position: 'left'
    }
  ],
  group2: [
    {
      mbtiType: 'INFP',
      content: '友友们《XXXX》真的很好看（抹眼泪.jpg',
      position: 'left'
    },
    {
      mbtiType: 'ESFP',
      content: '是HE还是BE啊？',
      position: 'right'
    },
    {
      mbtiType: 'ISFP',
      content: '啊是那个剧啊',
      position: 'left'
    },
    {
      mbtiType: 'ISFP',
      content: '那个剧很好好哭的',
      position: 'left'
    },
    {
      mbtiType: 'ESFP',
      content: '救命为什么不是HE，我喜欢看大团圆结局',
      position: 'right'
    }
  ]
}

// 默认显示第一组对话
const messages = reactive<Message[]>(chatGroups.group1)

// 切换对话组
const switchChatGroup = () => {
  messages.splice(0, messages.length, ...(
    messages[0].mbtiType === 'INFP' && messages[0].content === '你那是不懂BE美学' 
      ? chatGroups.group2 
      : chatGroups.group1
  ))
}

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() === '') return
  
  // 随机选择一个MBTI类型发送消息（实际应用中应该是根据用户类型）
  const mbtiTypes = ['ENFP', 'INFP', 'ISTJ', 'ENFJ', 'ISTP', 'ESFP', 'ISFP']
  const randomType = mbtiTypes[Math.floor(Math.random() * mbtiTypes.length)]
  
  messages.push({
    mbtiType: randomType,
    content: newMessage.value,
    position: Math.random() > 0.5 ? 'left' : 'right'
  })
  
  newMessage.value = ''
  
  // 滚动到底部
  setTimeout(() => {
    const chatBody = document.querySelector('.chat-body')
    if (chatBody) {
      chatBody.scrollTop = chatBody.scrollHeight
    }
  }, 0)
}
</script>

<style scoped>
.chat-container {
  width: 100%;
  max-width: 414px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  border: 1px solid #ccc;
  background-color: white;
}

.chat-header {
  background-color: #c39bd3;
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.back-button, .close-button {
  width: 30px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 24px;
}

.room-title {
  font-weight: bold;
  text-align: center;
  flex: 1;
}

.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 15px;
  background-color: white;
  display: flex;
  flex-direction: column;
}

.message-container {
  display: flex;
  margin-bottom: 25px;
  align-items: flex-start;
}

.avatar-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  width: 60px;
}

.mbti-type {
  font-size: 12px;
  margin-top: 5px;
  color: #8e44ad;
  font-weight: bold;
  display: flex;
  align-items: center;
}

.mbti-emoji {
  margin-left: 2px;
  font-size: 14px;
}

.message-bubble {
  max-width: 70%;
  padding: 12px 15px;
  border-radius: 0px;
  font-size: 14px;
  position: relative;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05);
}

.message-left {
  background-color: #b8e986;
  margin-right: auto;
}

.message-left::before {
  content: '';
  position: absolute;
  top: 10px;
  left: -10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-right: 10px solid #b8e986;
}

.message-right {
  background-color: #ce93d8;
  margin-left: auto;
}

.message-right::before {
  content: '';
  position: absolute;
  top: 10px;
  right: -10px;
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 10px solid #ce93d8;
}

.message-content {
  word-break: break-word;
  line-height: 1.4;
}

.chat-footer {
  display: flex;
  padding: 15px;
  background-color: #c39bd3;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}

.message-input {
  flex: 1;
  padding: 12px;
  border: none;
  border-radius: 5px;
  outline: none;
  margin-right: 10px;
  font-size: 14px;
}

.send-button {
  background-color: #d0f87b;
  color: #333;
  border: none;
  border-radius: 5px;
  padding: 0 20px;
  cursor: pointer;
  font-weight: bold;
  font-size: 16px;
}

.send-button:hover {
  background-color: #c0e86b;
}
</style> 