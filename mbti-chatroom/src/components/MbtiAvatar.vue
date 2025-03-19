<template>
  <div class="mbti-avatar" :class="[category + '-bg']">
    <img :src="getAvatarUrl()" class="pixel-avatar" :alt="mbtiType">
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { getMbtiCategory } from '@/constants/mbtiTypes'
import enfj from '@/assets/avatars/enfj.png'
import entp from '@/assets/avatars/entp.png'
import entj from '@/assets/avatars/entj.png'
import estp from '@/assets/avatars/estp.png'
import estj from '@/assets/avatars/estj.png'
import esfp from '@/assets/avatars/esfp.png'
import esfj from '@/assets/avatars/esfj.png'
import infp from '@/assets/avatars/infp.png'
import infj from '@/assets/avatars/infj.png'
import intp from '@/assets/avatars/intp.png'
import intj from '@/assets/avatars/intj.png'
import isfp from '@/assets/avatars/isfp.png'
import isfj from '@/assets/avatars/isfj.png'
import istp from '@/assets/avatars/istp.png'
import istj from '@/assets/avatars/istj.png'
import enfp from '@/assets/avatars/enfp.png'



const props = defineProps<{
  mbtiType: string
}>()

// 获取MBTI类型的分类
const category = computed(() => {
  return getMbtiCategory(props.mbtiType)
})

// 获取头像URL
const getAvatarUrl = () => {
  // 使用在线的卡通头像
  const avatarUrls: Record<string, string> = {
    // NT分析家 (紫色)
    'INTJ': intj, // 建筑师
    'INTP': intp, // 逻辑学家
    'ENTJ': entj, // 指挥官
    'ENTP': entp, // 辩论家

    // NF理想家 (绿色)
    'INFJ': infj, // 提倡者
    'INFP': infp, // 调停者
    'ENFJ': enfj, // 主人公
    'ENFP': enfp, // 竞选者

    // SP探险家 (黄色)
    'ISTP': istp, // 鉴赏家
    'ISFP': isfp, // 探险家
    'ESTP': estp, // 企业家
    'ESFP': esfp, // 表演者

    // SJ守卫者 (蓝色)
    'ISTJ': istj, // 物流师
    'ISFJ': isfj, // 守卫者
    'ESTJ': estj, // 总经理
    'ESFJ': esfj, // 执政官
  };

  return avatarUrls[props.mbtiType] || 'https://i.imgur.com/P1zS55k.png'; // 默认头像
}
</script>

<style scoped>
.mbti-avatar {
  width: 30px;
  height: 30px;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
}

.pixel-avatar {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* 背景色 */
.green-bg {
  background: linear-gradient(135deg, #38a169, #68d391);
}

.purple-bg {
  background: linear-gradient(135deg, #6b46c1, #9f7aea);
}

.yellow-bg {
  background: linear-gradient(135deg, #dd6b20, #f6ad55);
}

.blue-bg {
  background: linear-gradient(135deg, #2b6cb0, #63b3ed);
}
</style>