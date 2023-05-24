import * as React from 'react';
import { Meta, Story } from '@storybook/react';
import Exam, {Props} from '../src/components/Exam';

const meta: Meta = {
  title: 'Exam',
  component: Exam,
  parameters: {
    controls: { expanded: true },
  },
};

export default meta;

const Template: Story<Props> = args => <Exam {...args} />;

// By passing using the Args format for exported stories, you can control the props for a component for reuse in a test
// https://storybook.js.org/docs/react/workflows/unit-testing
export const Default = Template.bind({});

Default.args = {};
