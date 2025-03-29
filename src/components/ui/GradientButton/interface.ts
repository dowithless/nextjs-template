export interface GradientButtonProps {
  // 渐变的起始颜色
  startColor?: string;
  // 渐变的结束颜色
  endColor?: string;
  // 按钮文字
  children: React.ReactNode;
  // 其他按钮属性
  className?: string;
  // 禁用
  disabled?: boolean;
  // loading
  loading?: boolean;
  // 按钮点击事件
  onClick?: () => void;
}
