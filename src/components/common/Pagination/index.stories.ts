import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker'
import Pagination from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Pagination',
  component: Pagination,
  tags: ['autodocs'],
  args:{},
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const DefaultProduct: Story = {
  args: {
    currentPage: 1,
    count: 100
  },
}
