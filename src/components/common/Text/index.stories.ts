import type { Meta, StoryObj } from '@storybook/react';

import Text from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Text',
  component: Text,
  tags: ['autodocs'],
  args:{
    children: 'Hello world'
  }
} satisfies Meta<typeof Text>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultText: Story = {
  args: {  
    size: 'md',
    color: 'black',
    weight: 'normal',
  },
};

