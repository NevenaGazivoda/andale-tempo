import React, { FC, PropsWithChildren } from 'react';
import { Link } from 'react-router-dom';
import './AtpLink.scss';
import classNames from 'classnames';

type Props = PropsWithChildren<{
  to: string;
  className?: string;
}>;

export const AtpLink: FC<Props> = ({ children, to, className }) => (
  <Link to={to} className={classNames('atp-link', className)}>
    {children}
  </Link>
);

export default AtpLink;
