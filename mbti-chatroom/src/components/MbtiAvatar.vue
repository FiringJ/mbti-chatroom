<template>
  <div class="mbti-avatar" :style="avatarStyle">
    <span class="mbti-initials">{{ mbtiType }}</span>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  mbtiType: string
}>()

// 根据MBTI类型分配背景颜色
const avatarStyle = computed(() => {
  const colors: Record<string, { bg: string, text?: string, gradient?: string }> = {
    'ENFP': { bg: '#ffcc5c', gradient: 'linear-gradient(135deg, #ffcc5c 0%, #ffb347 100%)' },
    'INFP': { bg: '#ce93d8', gradient: 'linear-gradient(135deg, #ce93d8 0%, #ba68c8 100%)' },
    'ISTJ': { bg: '#aed581', gradient: 'linear-gradient(135deg, #aed581 0%, #8bc34a 100%)' },
    'ENFJ': { bg: '#ff8a65', gradient: 'linear-gradient(135deg, #ff8a65 0%, #ff5722 100%)' },
    'ISTP': { bg: '#64b5f6', gradient: 'linear-gradient(135deg, #64b5f6 0%, #2196f3 100%)' },
    'ESFP': { bg: '#f06292', gradient: 'linear-gradient(135deg, #f06292 0%, #e91e63 100%)' },
    'ISFP': { bg: '#4db6ac', gradient: 'linear-gradient(135deg, #4db6ac 0%, #009688 100%)' },
    'INTJ': { bg: '#7986cb', gradient: 'linear-gradient(135deg, #7986cb 0%, #3f51b5 100%)' },
    'ENTJ': { bg: '#ff7043', gradient: 'linear-gradient(135deg, #ff7043 0%, #ff5722 100%)' },
    'INTP': { bg: '#4dd0e1', gradient: 'linear-gradient(135deg, #4dd0e1 0%, #00bcd4 100%)' },
    'ENTP': { bg: '#ffd54f', gradient: 'linear-gradient(135deg, #ffd54f 0%, #ffc107 100%)' },
    'ISFJ': { bg: '#9ccc65', gradient: 'linear-gradient(135deg, #9ccc65 0%, #8bc34a 100%)' },
    'ESFJ': { bg: '#ba68c8', gradient: 'linear-gradient(135deg, #ba68c8 0%, #9c27b0 100%)' },
    'ESTJ': { bg: '#4fc3f7', gradient: 'linear-gradient(135deg, #4fc3f7 0%, #03a9f4 100%)' }
  }

  const style = colors[props.mbtiType] || { bg: '#9e9e9e', gradient: 'linear-gradient(135deg, #9e9e9e 0%, #616161 100%)' }

  return {
    background: style.gradient || style.bg,
    color: style.text || 'white',
    boxShadow: `0 4px 10px rgba(0, 0, 0, 0.15), inset 0 -3px 0 rgba(0, 0, 0, 0.1)`
  }
})
</script>

<style scoped>
.mbti-avatar {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 13px;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;
  transform: perspective(800px) rotateY(0deg);
  letter-spacing: 0.5px;
  border: 2px solid rgba(255, 255, 255, 0.5);
  animation: bounce 3s ease-in-out infinite;
}

.mbti-avatar::before {
  content: '';
  position: absolute;
  top: -5px;
  left: -5px;
  right: -5px;
  bottom: -5px;
  background: linear-gradient(45deg, transparent 40%, rgba(255, 255, 255, 0.4) 50%, transparent 60%);
  z-index: 1;
  transform: rotate(45deg);
  animation: shimmer 3s infinite;
}

.mbti-avatar:hover {
  transform: perspective(800px) rotateY(-15deg) translateY(-5px);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2) !important;
}

.mbti-initials {
  position: relative;
  z-index: 2;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
}

@keyframes shimmer {
  0% {
    transform: rotate(45deg) translateX(-120%);
  }

  50% {
    transform: rotate(45deg) translateX(120%);
  }

  100% {
    transform: rotate(45deg) translateX(120%);
  }
}

@keyframes bounce {

  0%,
  100% {
    transform: translateY(0);
  }

  50% {
    transform: translateY(-3px);
  }
}
</style>