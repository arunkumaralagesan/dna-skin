import React from 'react';
import cx from 'classnames';

import './primaryButton.css';

function PrimaryButton({ text, onClick, className }) {
  return (
    <div className={cx('primary-button', className)} onClick={onClick}>
      <span>
        {text}
      </span>
    </div>
  )
}

export default PrimaryButton;
