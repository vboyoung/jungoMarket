import type { Meta, StoryObj } from '@storybook/react';

import Input from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Input',
  component: Input,
  tags: ['autodocs'],
  args:{
    value: 'Hello world',
    disabled: false
  }
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultInput: Story = {
  args: {  },
};

