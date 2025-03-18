<template>
  <div class="chat-header">
    <div class="chat-header-content">
      <div class="logo">
        <img src="https://unpkg.com/lucide-static@latest/icons/message-square.svg" class="chat-icon" alt="Chat Icon">
        <span class="title">{{ title }}</span>
      </div>
      <div class="header-actions">
        <img src="https://unpkg.com/lucide-static@latest/icons/search.svg" class="action-icon" alt="Search">
        <img src="https://unpkg.com/lucide-static@latest/icons/settings.svg" class="action-icon" alt="Settings">
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

.chat-icon {
  width: 24px;
  height: 24px;
  color: #d0f87b;
}

.title {
  font-size: 20px;
  font-weight: bold;
  background: linear-gradient(to right, #d0f87b, #9f7aea);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  position: relative;
}

.header-actions {
  display: flex;
  gap: 15px;
}

.action-icon {
  width: 20px;
  height: 20px;
  color: white;
  cursor: pointer;
  transition: transform 0.2s;
}

.action-icon:hover {
  transform: scale(1.1);
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
  animation: pulse 2s infinite;
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

@keyframes pulse {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(1.05);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes colorShift {
  0% {
    filter: hue-rotate(0deg);
  }

  100% {
    filter: hue-rotate(15deg);
  }
}
</style>