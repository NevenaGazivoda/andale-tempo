import React, { ReactElement } from 'react';

type Props = {
  title: string;
  children: ReactElement | ReactElement[];
};

const AtpTabPane = ({ children }: Props): JSX.Element => <div>{children}</div>;

export default AtpTabPane;
