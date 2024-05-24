import { faker } from '@faker-js/faker'
import type { Meta, StoryObj } from '@storybook/react';

import ShopProfileImage from '.';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta = {
  title: 'ShopProfileImage',
  component: ShopProfileImage,
  tags: ['autodocs'],
} satisfies Meta<typeof ShopProfileImage>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const DefaultShopProfileImage: Story = {
  args: {  },
};

export const ImagedShopProfileImage: Story = {
  args: {
    imageUrl: faker.image.dataUri(),
  },
}
