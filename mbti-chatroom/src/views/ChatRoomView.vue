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
  background: linear-gradient(to bottom right, #f7faaa, #a7f3a0);
  position: relative;
  overflow: hidden;
  padding: 20px;
}

.chat-room-page::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-size: 80px 80px;
  background-image: linear-gradient(45deg, rgba(255, 255, 255, 0.2) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.2) 50%, rgba(255, 255, 255, 0.2) 75%, transparent 75%, transparent);
  z-index: 1;
}

.chat-room-container {
  width: 100%;
  max-width: 414px;
  height: 100vh;
  max-height: 800px;
  overflow: hidden;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
  border-radius: 16px;
  position: relative;
  z-index: 10;
  background-color: white;
}

@media screen and (max-width: 480px) {
  .chat-room-page {
    padding: 0;
  }

  .chat-room-container {
    max-height: 100vh;
    border-radius: 0;
    box-shadow: none;
  }
}
</style>