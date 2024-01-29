import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '../common/Button';

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
const meta: Meta<typeof Button> = {
  title: 'Example/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

export default meta;

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Primary = {
  args: {
    children: 'Button',
  },
};

export const Secondary = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
};


export const Inverted: StoryObj<typeof Button> = {
  args: {
    children: 'Button',
    variant: 'inverted',
  },
  decorators: [
    (Story) => (
      <div style={{ backgroundColor: 'black', width: '100%', height: '100%' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
};


export const Large = {
  args: {
    size: 'large',
    children: 'Button',
  },
};

export const Small = {
  args: {
    size: 'small',
    children: 'Button',
  },
};
