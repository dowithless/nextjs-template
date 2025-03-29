import type { Meta, StoryObj } from "@storybook/react";

import { fn } from "@storybook/test";
import { BaseTemplate } from "./BaseTemplate";
import { mockBaseTemplateProps } from "./BaseTemplate.mocks";

const meta = {
  title: "Template/BaseTemplate",
  component: BaseTemplate,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {},
  args: {},
} satisfies Meta<typeof BaseTemplate>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: { ...mockBaseTemplateProps.base, onGreet: fn() },
};
