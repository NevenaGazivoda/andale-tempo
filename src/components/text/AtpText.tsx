import React, { FC, PropsWithChildren } from 'react';
import './AtpText.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  className?: string;
}>;

export const AtpText: FC<Props> = ({ children, className }) => (
  <p className={classNames('atp-text', className)}>{children}</p>
);

export default AtpText;
