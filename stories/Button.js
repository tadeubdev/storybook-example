import './Buttons.css';

export const createButton = ({
  size = 'small',
  color = 'primary',
  label = 'click me',
  onClick
}) => {
  const btn = document.createElement('button');
  btn.className = [`btn`, `btn--${size}`, `btn--${color}`].join(' ');
  btn.innerText = label;
  btn.addEventListener('click', onClick);

  return btn;
}