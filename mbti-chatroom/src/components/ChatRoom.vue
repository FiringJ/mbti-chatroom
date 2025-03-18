<template>
  <div class="chat-container">
    <!-- 聊天室标题栏 -->
    <div class="chat-header">
      <div class="back-button">
        <img src="https://unpkg.com/lucide-static@latest/icons/chevron-left.svg" class="icon" alt="Back">
      </div>
      <div class="room-info">
        <h2 class="room-title">公司团队群聊</h2>
        <p class="room-members">16位成员在线</p>
      </div>
      <div class="header-actions">
        <img src="https://unpkg.com/lucide-static@latest/icons/info.svg" class="icon" alt="Info">
        <img src="https://unpkg.com/lucide-static@latest/icons/more-vertical.svg" class="icon" alt="More">
      </div>
    </div>

    <!-- 聊天内容区域 -->
    <div class="chat-body">
      <!-- ENTJ消息 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ENTJ')" class="user-avatar" alt="ENTJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name entj-name">ENTJ <span class="mbti-emoji">{{ getEmoji('ENTJ') }}</span></p>
              <span class="message-time">01:03</span>
            </div>
            <div class="message-bubble entj-bubble">
              <p>凌晨1点发工作文档？<span class="user-mention">@所有人</span> 下周团建方案投票，3分钟内给我结果。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- INFP消息 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('INFP')" class="user-avatar" alt="INFP">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name infp-name">INFP <span class="mbti-emoji">{{ getEmoji('INFP') }}</span></p>
              <span class="message-time">01:05</span>
            </div>
            <div class="message-bubble infp-bubble">
              <p>…可是今天42度欸🥵 人类真的需要团建吗？</p>
              <div class="attachment">
                <img src="https://unpkg.com/lucide-static@latest/icons/music.svg" class="attachment-icon" alt="Music">
                <span class="attachment-text">分享歌曲《逃离地球》</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ESTP消息 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ESTP')" class="user-avatar" alt="ESTP">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name estp-name">ESTP <span class="mbti-emoji">{{ getEmoji('ESTP') }}</span></p>
              <span class="message-time">01:06</span>
            </div>
            <div class="message-bubble estp-bubble">
              <p><span class="user-mention">@ENTJ</span> 不如去冲浪！我刚买了摩托艇，浪越大鱼越贵！</p>
              <div class="attachment">
                <img src="https://unpkg.com/lucide-static@latest/icons/map-pin.svg" class="attachment-icon"
                  alt="Location">
                <span class="attachment-text">三亚后海</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- INTJ消息 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('INTJ')" class="user-avatar" alt="INTJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name intj-name">INTJ <span class="mbti-emoji">{{ getEmoji('INTJ') }}</span></p>
              <span class="message-time">01:08</span>
            </div>
            <div class="message-bubble intj-bubble">
              <p>高温天团建=降低团队效率47.3%，建议改线上。</p>
              <div class="attachment">
                <img src="https://unpkg.com/lucide-static@latest/icons/file-text.svg" class="attachment-icon" alt="PDF">
                <span class="attachment-text">附《空调房生存指南》.pdf</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ESFJ消息 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ESFJ')" class="user-avatar" alt="ESFJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name esfj-name">ESFJ <span class="mbti-emoji">{{ getEmoji('ESFJ') }}</span></p>
              <span class="message-time">01:10</span>
            </div>
            <div class="message-bubble esfj-bubble">
              <p>大家辛苦啦！我买了冰镇西瓜🍉和藿香正气水🥤，明天放公司冰箱~</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ENTJ回复 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ENTJ')" class="user-avatar" alt="ENTJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name entj-name">ENTJ <span class="mbti-emoji">{{ getEmoji('ENTJ') }}</span></p>
              <span class="message-time">01:12</span>
            </div>
            <div class="message-bubble entj-bubble">
              <p><span class="user-mention">@ESTP</span> 摩托艇能开发票吗？<span class="user-mention">@INTJ</span> 你统计下中暑概率。<span
                  class="user-mention">@ESFJ</span> 西瓜钱走报销。</p>
            </div>
          </div>
        </div>
      </div>

      <!-- INFP回复(已撤回) -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('INFP')" class="user-avatar" alt="INFP">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name infp-name">INFP <span class="mbti-emoji">{{ getEmoji('INFP') }}</span></p>
              <span class="message-time">01:15</span>
              <span class="message-status">已撤回</span>
            </div>
            <div class="message-bubble infp-bubble revoked">
              <p>（突然发疯）我要去山里当野人！和松鼠讨论存在主义！！</p>
            </div>
          </div>
        </div>
      </div>

      <!-- ESTP回复(被禁言) -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ESTP')" class="user-avatar" alt="ESTP">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name estp-name">ESTP <span class="mbti-emoji">{{ getEmoji('ESTP') }}</span></p>
              <span class="message-time">01:16</span>
              <span class="banned-status">禁言1分钟</span>
            </div>
            <div class="message-bubble estp-bubble">
              <p><span class="user-mention">@INFP</span> 尊嘟假嘟？带我一个！我知道有个瀑布能裸泳🌊</p>
            </div>
          </div>
        </div>
      </div>

      <!-- INTJ回复 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('INTJ')" class="user-avatar" alt="INTJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name intj-name">INTJ <span class="mbti-emoji">{{ getEmoji('INTJ') }}</span></p>
              <span class="message-time">01:18</span>
            </div>
            <div class="message-bubble intj-bubble">
              <p><span class="user-mention">@INFP</span> 最新研究：当野人WiFi覆盖率为0，你确定吗？</p>
              <div class="attachment">
                <img src="https://unpkg.com/lucide-static@latest/icons/link.svg" class="attachment-icon" alt="Link">
                <span class="attachment-text">《5G基站分布图》</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- ESFJ回复 -->
      <div class="message-wrapper">
        <div class="message-container">
          <img :src="getAvatarImage('ESFJ')" class="user-avatar" alt="ESFJ">
          <div class="message-content-wrapper">
            <div class="message-header">
              <p class="user-name esfj-name">ESFJ <span class="mbti-emoji">{{ getEmoji('ESFJ') }}</span></p>
              <span class="message-time">01:20</span>
            </div>
            <div class="message-bubble esfj-bubble">
              <p><span class="user-mention">@INFP</span> 宝，我陪你周末去公园喂鸽子吧😊</p>
              <div class="attachment">
                <img src="https://unpkg.com/lucide-static@latest/icons/image.svg" class="attachment-icon" alt="Sticker">
                <span class="attachment-text">发送摸摸头表情包</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- 底部输入区域 -->
    <div class="chat-footer">
      <div class="input-tools">
        <img src="https://unpkg.com/lucide-static@latest/icons/plus-circle.svg" class="tool-icon" alt="Add">
        <img src="https://unpkg.com/lucide-static@latest/icons/image.svg" class="tool-icon" alt="Image">
        <img src="https://unpkg.com/lucide-static@latest/icons/mic.svg" class="tool-icon" alt="Voice">
        <img src="https://unpkg.com/lucide-static@latest/icons/smile.svg" class="tool-icon" alt="Emoji">
      </div>
      <div class="input-area">
        <input type="text" class="message-input" placeholder="发送消息..." v-model="newMessage"
          @keyup.enter="sendMessage" />
        <button class="send-button" @click="sendMessage">
          <img src="https://unpkg.com/lucide-static@latest/icons/send.svg" class="send-icon" alt="Send">
        </button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

// MBTI类型对应的表情
const mbtiEmojis: Record<string, string> = {
  'ENTJ': '🛜',
  'INTJ': '🐺',
  'ENTP': '🔍',
  'INTP': '🔬',
  'INFJ': '🔮',
  'ENFJ': '🌟',
  'INFP': '🦋',
  'ENFP': '🎭',
  'ISTJ': '📊',
  'ESTJ': '⏱️',
  'ISFJ': '🍀',
  'ESFJ': '🧡',
  'ISTP': '🔧',
  'ESTP': '🕶️',
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
  max-width: 414px;
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  background-color: white;
}

/* 聊天室标题栏样式 */
.chat-header {
  background-color: #9f7aea;
  color: white;
  padding: 12px 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.back-button .icon {
  width: 24px;
  height: 24px;
  cursor: pointer;
  color: white;
}

.room-info {
  margin-left: 8px;
  flex: 1;
}

.room-title {
  font-weight: 500;
  font-size: 16px;
}

.room-members {
  font-size: 12px;
  color: #f3ebfc;
}

.header-actions {
  display: flex;
  gap: 10px;
}

.header-actions .icon {
  width: 20px;
  height: 20px;
  cursor: pointer;
}

/* 聊天内容区域样式 */
.chat-body {
  flex: 1;
  overflow-y: auto;
  padding: 12px;
  background-color: #f8f8fc;
  display: flex;
  flex-direction: column;
}

.message-wrapper {
  margin-bottom: 16px;
}

.message-container {
  display: flex;
  align-items: flex-start;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
}

.message-content-wrapper {
  margin-left: 8px;
  flex: 1;
}

.message-header {
  display: flex;
  align-items: center;
  margin-bottom: 2px;
}

.user-name {
  font-weight: 600;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.entj-name {
  color: #3182ce;
}

.infp-name {
  color: #9f7aea;
}

.estp-name {
  color: #ed8936;
}

.intj-name {
  color: #1a202c;
}

.esfj-name {
  color: #f56565;
}

.mbti-emoji {
  margin-left: 4px;
  font-size: 16px;
}

.message-time {
  font-size: 12px;
  color: #a0aec0;
  margin-left: 8px;
}

.message-status {
  font-size: 12px;
  color: #718096;
  margin-left: 6px;
  font-style: italic;
}

.banned-status {
  font-size: 11px;
  background-color: #f56565;
  color: white;
  padding: 1px 4px;
  border-radius: 4px;
  margin-left: 6px;
}

.message-bubble {
  padding: 8px 12px;
  border-radius: 12px;
  border-top-left-radius: 0;
  max-width: 85%;
  color: white;
  font-size: 14px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  margin-top: 4px;
  animation: fadeIn 0.3s ease;
}

.entj-bubble {
  background: linear-gradient(to right, #3182ce, #2b6cb0);
}

.infp-bubble {
  background: linear-gradient(to right, #9f7aea, #805ad5);
}

.estp-bubble {
  background: linear-gradient(to right, #ed8936, #dd6b20);
}

.intj-bubble {
  background: linear-gradient(to right, #1a202c, #2d3748);
}

.esfj-bubble {
  background: linear-gradient(to right, #f56565, #e53e3e);
}

.revoked {
  opacity: 0.7;
}

.user-mention {
  color: #facc15;
  font-weight: 600;
}

.attachment {
  background-color: rgba(255, 255, 255, 0.2);
  border-radius: 8px;
  padding: 6px 10px;
  margin-top: 6px;
  display: flex;
  align-items: center;
}

.attachment-icon {
  width: 16px;
  height: 16px;
  margin-right: 8px;
}

.attachment-text {
  font-size: 13px;
}

/* 底部输入区域样式 */
.chat-footer {
  background-color: white;
  border-top: 1px solid #e2e8f0;
  padding: 10px 12px;
}

.input-tools {
  display: flex;
  margin-bottom: 8px;
}

.tool-icon {
  width: 24px;
  height: 24px;
  margin-right: 10px;
  color: #718096;
  cursor: pointer;
}

.input-area {
  display: flex;
  align-items: center;
}

.message-input {
  flex: 1;
  padding: 8px 16px;
  border: none;
  border-radius: 99px;
  outline: none;
  background-color: #f1f1f4;
  font-size: 14px;
}

.send-button {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #9f7aea;
  border: none;
  margin-left: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: background-color 0.2s;
}

.send-button:hover {
  background-color: #805ad5;
}

.send-icon {
  width: 20px;
  height: 20px;
  color: white;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(10px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>