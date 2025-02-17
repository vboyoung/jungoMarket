import type { Meta, StoryObj } from '@storybook/react';

import Button from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Button',
  component: Button,
  tags: ['autodocs'],
  args:{
    children: 'Hello world'
  }
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultButton: Story = {
  args: {  },
};

