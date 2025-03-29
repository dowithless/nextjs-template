import { fn } from "@storybook/test";
import { GradientButtonProps } from "./interface";

const base: GradientButtonProps = {
  children: "Gradient Button",
  onClick: fn(),
};

const disabled: GradientButtonProps = {
  ...base,
  disabled: true,
};
const loading: GradientButtonProps = {
  ...base,
  loading: true,
};

export const mockGradientButtonProps = {
  base,
  disabled,
  loading,
};
