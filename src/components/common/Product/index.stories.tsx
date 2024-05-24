import type { Meta, StoryObj } from '@storybook/react';
import { faker } from '@faker-js/faker'
import Product from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'Product',
  component: Product,
  tags: ['autodocs'],
  args:{},
  decorators: [
    (Story) => (
      <div className="mt-6 grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 xl:gap-x-8 lg:grid-cols-4">
        <Story />
      </div>
    )
  ]
} satisfies Meta<typeof Product>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args

export const DefaultProduct: Story = {
  args: {
    title: '샘플 제품',
    price: 50_000,
    createdAt: '2021-01-01',
    imageUrl: faker.image.dataUri(),
  },
}

export const SoldoutProduct: Story = {
  args: {
    title: '샘플 제품',
    price: 50_000,
    createdAt: '2021-01-01',
    imageUrl: faker.image.dataUri(),
    isSoldOut: true,
  },
}