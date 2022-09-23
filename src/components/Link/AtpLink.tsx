import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './AtpLink.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  to: string;
  className?: string;
}>;

export const AtpLink: FC<Props> = ({ children, to, className }) => (
  <div className={classNames('atp-link', className)}>
    <Link to={to}>{children}</Link>
  </div>
);

export default AtpLink;
