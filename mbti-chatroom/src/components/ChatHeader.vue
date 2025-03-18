<template>
  <div class="chat-header">
    <div class="chat-header-content">
      <div class="logo">
        <div class="chat-icon-container">
          <img src="@/assets/chat-icon.svg" alt="Chat Icon" class="chat-icon" />
        </div>
        <span class="title">{{ title }}</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
}>()
</script>

<style scoped>
.chat-header {
  background-color: #1e1e1e;
  background-image: linear-gradient(to right, #333333, #1e1e1e);
  color: white;
  padding: 15px;
  display: flex;
  align-items: center;
  border-bottom: 3px solid #d0f87b;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.chat-header-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.logo {
  display: flex;
  align-items: center;
  gap: 12px;
}

.chat-icon-container {
  background-color: #d0f87b;
  width: 36px;
  height: 36px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
}

.chat-icon-container::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 50%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), transparent);
}

.chat-icon {
  width: 22px;
  height: 22px;
  color: #1e1e1e;
  position: relative;
  z-index: 1;
}

.title {
  font-size: 22px;
  font-weight: bold;
  background: linear-gradient(to right, #d0f87b, #c39bd3);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.title::after {
  content: '';
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 2px;
  background: linear-gradient(to right, #d0f87b, transparent);
  transform: scaleX(0.8);
  transform-origin: left;
}
</style> 