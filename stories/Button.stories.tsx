import React from 'react'
import { Story, Meta } from '@storybook/react'

import { Button, ButtonProps } from './Button'

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    color: {
      control: {
        type: 'radio',
        options: ['purple', 'gray'],
      },
    },
  },
} as Meta

const Template: Story<ButtonProps> = (args) => (
  <Button color="purple" {...args} />
)

export const Normal = Template.bind({})
Normal.args = {
  label: 'Button',
}

export const Disabled = Template.bind({})
Disabled.args = {
  label: 'Disabled',
  disabled: true,
}

export const Loading = Template.bind({})
Loading.args = {
  label: 'Button',
  loading: true,
}

export const Purple = Template.bind({})
Purple.args = {
  label: 'Purple',
  color: 'purple',
}

export const Gray = Template.bind({})
Gray.args = {
  label: 'Gray',
  color: 'gray',
}
