import type { Meta, StoryObj } from "@storybook/react";

import { GradientButton } from "./GradientButton";
import { mockGradientButtonProps } from "./GradientButton.mocks";

const meta = {
  title: "UI/GradientButton",
  component: GradientButton,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof GradientButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: mockGradientButtonProps.base,
};

export const Dislabed: Story = {
  args: mockGradientButtonProps.disabled,
};
export const Loading: Story = {
  args: mockGradientButtonProps.loading,
};
