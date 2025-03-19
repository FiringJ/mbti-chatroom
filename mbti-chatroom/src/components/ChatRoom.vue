<template>
  <div class="chat-container">
    <!-- 聊天室标题栏 -->
    <div class="chat-header">
      <div class="back-button">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
          <polyline points="15 18 9 12 15 6"></polyline>
        </svg>
      </div>
      <div class="room-info">
        <h2 class="room-title">{{ currentConversation.title }}</h2>
        <p class="room-members">16位成员在线</p>
      </div>
      <div class="header-actions">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M12 16v-4"></path>
          <path d="M12 8h.01"></path>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          @click="switchConversation" class="icon">
          <circle cx="12" cy="12" r="1"></circle>
          <circle cx="12" cy="5" r="1"></circle>
          <circle cx="12" cy="19" r="1"></circle>
        </svg>
      </div>
    </div>

    <!-- 聊天内容区域 -->
    <div class="chat-body">
      <!-- 消息循环 -->
      <div v-for="message in currentConversation.messages" :key="message.id" class="message-wrapper">
        <div class="message-container">
          <MbtiAvatar :mbti-type="message.mbtiType" />
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name" :style="{ color: getMbtiConfig(message.mbtiType).nameColor }">
                {{ message.mbtiType }} <span class="mbti-emoji">{{ getMbtiConfig(message.mbtiType).emoji }}</span>
              </p>
              <span class="message-time">{{ message.time }}</span>
              <span v-if="message.status === 'revoked'" class="message-status">已撤回</span>
              <span v-if="message.status === 'banned'" class="banned-status">禁言{{ message.banTime }}</span>
            </div>
            <div class="message-bubble" :class="{ 'revoked': message.status === 'revoked' }"
              :style="{ background: getMbtiConfig(message.mbtiType).bubbleGradient }">
              <p v-html="message.content"></p>

              <!-- 消息附件 -->
              <div v-if="message.attachments && message.attachments.length > 0"
                v-for="attachment in message.attachments" :key="attachment.text" class="attachment">
                <svg :class="['attachment-icon', attachment.icon]" xmlns="http://www.w3.org/2000/svg" width="16"
                  height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                  stroke-linecap="round" stroke-linejoin="round">
                  <path v-if="attachment.icon === 'music'" d="M9 18V5l12-2v13"></path>
                  <path v-if="attachment.icon === 'music'" d="M6 15.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                  <path v-if="attachment.icon === 'music'" d="M18 15.5a3 3 0 1 0 0 6 3 3 0 0 0 0-6z"></path>
                  <path v-if="attachment.icon === 'map-pin'" d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle v-if="attachment.icon === 'map-pin'" cx="12" cy="10" r="3"></circle>
                  <path v-if="attachment.icon === 'file'"
                    d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z"></path>
                  <polyline v-if="attachment.icon === 'file'" points="13 2 13 9 20 9"></polyline>
                  <path v-if="attachment.icon === 'link'"
                    d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                  <path v-if="attachment.icon === 'link'"
                    d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
                  <rect v-if="attachment.icon === 'image'" x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <circle v-if="attachment.icon === 'image'" cx="8.5" cy="8.5" r="1.5"></circle>
                  <polyline v-if="attachment.icon === 'image'" points="21 15 16 10 5 21"></polyline>
                </svg>
                <span class="attachment-text">{{ attachment.text }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入区域 -->
    <!-- <div class="chat-footer">
      <div class="input-tools">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <line x1="12" y1="8" x2="12" y2="16"></line>
          <line x1="8" y1="12" x2="16" y2="12"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon">
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon">
          <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"></path>
          <path d="M19 10v2a7 7 0 0 1-14 0v-2"></path>
          <line x1="12" y1="19" x2="12" y2="23"></line>
          <line x1="8" y1="23" x2="16" y2="23"></line>
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="tool-icon">
          <circle cx="12" cy="12" r="10"></circle>
          <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
          <line x1="9" y1="9" x2="9.01" y2="9"></line>
          <line x1="15" y1="9" x2="15.01" y2="9"></line>
        </svg>
      </div>
      <div class="input-area">
        <input type="text" class="message-input" placeholder="发送消息..." v-model="newMessage"
          @keyup.enter="sendMessage" />
        <button class="send-button" @click="sendMessage">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none"
            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="send-icon">
            <line x1="22" y1="2" x2="11" y2="13"></line>
            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
          </svg>
        </button>
      </div>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import MbtiAvatar from './MbtiAvatar.vue'
import { allConversations } from '@/constants/chatData'
import { getMbtiConfig } from '@/constants/mbtiTypes'

// MBTI类型对应的表情
const mbtiEmojis: Record<string, string> = {
  'ENTJ': '🦁',
  'INTJ': '🕶️',
  'ENTP': '🔍',
  'INTP': '🔬',
  'INFJ': '🔮',
  'ENFJ': '🌟',
  'INFP': '🦄',
  'ENFP': '🌈',
  'ISTJ': '🐜',
  'ESTJ': '⏱️',
  'ISFJ': '🍀',
  'ESFJ': '🍪',
  'ISTP': '🔧',
  'ESTP': '🎮',
  'ISFP': '🎨',
  'ESFP': '🎉'
}

// 获取表情
const getEmoji = (mbtiType: string) => {
  return mbtiEmojis[mbtiType] || ''
}

// 获取用户头像
const getAvatarImage = (mbtiType: string) => {
  const avatarMap: Record<string, string> = {
    'ENTJ': 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'INFP': 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'ESTP': 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'INTJ': 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
    'ESFJ': 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3',
  }
  return avatarMap[mbtiType] || 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3'
}

// 当前聊天页
const currentConversationId = ref('team-building')

// 当前聊天内容
const currentConversation = computed(() => {
  return allConversations[currentConversationId.value]
})

// 切换会话
const switchConversation = () => {
  // 循环切换对话
  const conversationIds = Object.keys(allConversations)
  const currentIndex = conversationIds.indexOf(currentConversationId.value)
  const nextIndex = (currentIndex + 1) % conversationIds.length
  currentConversationId.value = conversationIds[nextIndex]

  // 滚动到顶部
  setTimeout(() => {
    const chatBody = document.querySelector('.chat-body')
    if (chatBody) {
      chatBody.scrollTop = 0
    }
  }, 0)
}

const newMessage = ref('')

const sendMessage = () => {
  if (newMessage.value.trim() === '') return

  // 消息发送逻辑
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
  max-width: 375px;
  height: 500px;
  /* 设置3:4比例 (375:500) */
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
}

/* 聊天室标题栏样式 */
.chat-header {
  background: linear-gradient(135deg, #9f7aea, #805ad5);
  color: white;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
}

.back-button .icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
  color: white;
}

.room-info {
  margin-left: 5px;
  flex: 1;
}

.room-title {
  font-weight: 600;
  font-size: 16px;
  margin: 0;
  padding: 0;
}

.room-members {
  font-size: 11px;
  color: #f3ebfc;
  margin: 0;
  padding: 0;
}

.header-actions {
  display: flex;
  gap: 8px;
}

.header-actions .icon {
  width: 18px;
  height: 18px;
  cursor: pointer;
}

/* 聊天内容区域样式 */
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 8px 10px;
  background-color: #f8f5ff;
  background-image: linear-gradient(rgba(159, 122, 234, 0.05) 1px, transparent 1px),
    linear-gradient(90deg, rgba(159, 122, 234, 0.05) 1px, transparent 1px);
  background-size: 20px 20px;
  display: flex;
  flex-direction: column;
  /* 隐藏滚动条 */
  scrollbar-width: none;
  /* Firefox */
  -ms-overflow-style: none;
  /* IE/Edge */
}

/* 隐藏Chrome/Safari滚动条 */
.chat-body::-webkit-scrollbar {
  display: none;
}

.message-wrapper {
  margin-bottom: 10px;
}

.message-container {
  display: flex;
  align-items: flex-start;
}

.message-content-wrapper {
  margin-left: 6px;
  flex: 1;
  max-width: calc(100% - 36px);
}

.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 1px;
}

.user-name {
  font-weight: 600;
  font-size: 12px;
  display: flex;
  align-items: center;
  margin: 0;
}

.mbti-emoji {
  margin-left: 3px;
  font-size: 14px;
}

.message-time {
  font-size: 10px;
  color: #a0aec0;
  margin-left: 5px;
}

.message-status {
  font-size: 10px;
  color: #718096;
  margin-left: 4px;
  font-style: italic;
}

.banned-status {
  font-size: 9px;
  background-color: #f56565;
  color: white;
  padding: 1px 3px;
  border-radius: 3px;
  margin-left: 4px;
}

.message-bubble {
  padding: 8px 10px;
  border-radius: 10px;
  border-top-left-radius: 0;
  max-width: 95%;
  color: white;
  font-size: 13px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 2px;
  animation: fadeIn 0.3s ease;
  line-height: 1.4;
}

.revoked {
  opacity: 0.7;
}

.attachment {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 6px;
  padding: 4px 8px;
  margin-top: 4px;
  display: flex;
  align-items: center;
}

.attachment-icon {
  width: 14px;
  height: 14px;
  margin-right: 6px;
  filter: invert(100%);
}

.attachment-text {
  font-size: 11px;
}

.user-mention {
  color: #ffeb3b;
  font-weight: bold;
}

/* 动画 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(5px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* 底部输入区域样式 - 保留但注释掉 */

/* 自定义气泡背景颜色 */
/* 使用 style 绑定在组件中动态应用这些渐变 */
</style>