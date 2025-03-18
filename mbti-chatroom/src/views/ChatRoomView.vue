<template>
  <div class="chat-room-page">
    <div class="chat-room-container">
      <ChatHeader title="MBTI聊天" />
      <ChatRoom />
    </div>
  </div>
</template>

<script setup lang="ts">
import ChatRoom from '@/components/ChatRoom.vue'
import ChatHeader from '@/components/ChatHeader.vue'
</script>

<style scoped>
.chat-room-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #e9f7a9;
  background-image: linear-gradient(45deg, #e9f7a9 25%, #d8f588 25%, #d8f588 50%, #e9f7a9 50%, #e9f7a9 75%, #d8f588 75%, #d8f588 100%);
  background-size: 80px 80px;
  position: relative;
  overflow: hidden;
}

.chat-room-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(135deg, rgba(195, 155, 211, 0.2) 0%, rgba(155, 89, 182, 0.2) 100%);
  z-index: 1;
}

.chat-room-container {
  width: 100%;
  max-width: 414px;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  border-radius: 16px;
  position: relative;
  z-index: 10;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
}

@media screen and (max-width: 480px) {
  .chat-room-container {
    max-height: 100vh;
    border-radius: 0;
    animation: none;
  }
}
</style> 