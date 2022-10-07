import React, { FC, PropsWithChildren } from 'react';
import '../button/AtpButton.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  isSecondary?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  className?: string;
  isFilterButton?: boolean;
}>;

export const AtpButton: FC<Props> = ({
  children,
  isSecondary,
  onClick,
  className,
  isFilterButton,
}) => {
  return (
    <button
      onClick={onClick}
      className={classNames(
        'atp-button',
        className,
        `${isSecondary ? 'atp-button--secondary' : 'atp-button--primary'}`,
        `${isFilterButton ? 'atp-button__filter' : ''}`
      )}
    >
      {children}
    </button>
  );
};

export default AtpButton;
