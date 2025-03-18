export interface MbtiTypeConfig {
  category: 'green' | 'purple' | 'yellow' | 'blue';
  emoji: string;
  bubbleGradient: string;
  nameColor: string;
}

export type MbtiCategoryColors = {
  [key: string]: {
    nameColor: string;
    bubbleGradient: string;
  }
}

// MBTI类型分组
export const mbtiCategories: Record<string, Array<string>> = {
  // 绿人 - NF理想家 (Idealists)
  green: ['INFJ', 'INFP', 'ENFJ', 'ENFP'],

  // 紫人 - NT分析家 (Rationals)
  purple: ['INTJ', 'INTP', 'ENTJ', 'ENTP'],

  // 黄人 - SP探险家 (Artisans)
  yellow: ['ISTP', 'ISFP', 'ESTP', 'ESFP'],

  // 蓝人 - SJ守卫者 (Guardians)
  blue: ['ISTJ', 'ISFJ', 'ESTJ', 'ESFJ']
};

// 根据MBTI类型获取其所属分类
export function getMbtiCategory(mbtiType: string): 'green' | 'purple' | 'yellow' | 'blue' {
  for (const [category, types] of Object.entries(mbtiCategories)) {
    if (types.includes(mbtiType)) {
      return category as 'green' | 'purple' | 'yellow' | 'blue';
    }
  }
  return 'purple'; // 默认为紫色
}

// 类别颜色配置
export const categoryColors: MbtiCategoryColors = {
  green: {
    nameColor: '#276749',
    bubbleGradient: 'linear-gradient(to right, #38a169, #276749)'
  },
  purple: {
    nameColor: '#805ad5',
    bubbleGradient: 'linear-gradient(to right, #9f7aea, #6b46c1)'
  },
  yellow: {
    nameColor: '#d69e2e',
    bubbleGradient: 'linear-gradient(to right, #f6ad55, #dd6b20)'
  },
  blue: {
    nameColor: '#3182ce',
    bubbleGradient: 'linear-gradient(to right, #63b3ed, #2b6cb0)'
  }
};

// MBTI表情符号
export const mbtiEmojis: Record<string, string> = {
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
};

// 获取MBTI类型配置
export function getMbtiConfig(mbtiType: string): MbtiTypeConfig {
  const category = getMbtiCategory(mbtiType);
  return {
    category,
    emoji: mbtiEmojis[mbtiType] || '',
    bubbleGradient: categoryColors[category].bubbleGradient,
    nameColor: categoryColors[category].nameColor
  };
} 