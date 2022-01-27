import { createButton } from './Button';

export default {
  title: 'Components/Button',
  component: createButton,
};

const Template = (args) => {
  return createButton(args);
}

export const Small = Template.bind({});
Small.args = {
  label: 'Small btn',
  color: 'primary',
  onClick: () => {
    console.log('clicked');
  }
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Large btn',
  color: 'primary',
};