import React, { useCallback } from 'react';

export type Props = {
  title: string;
  index: number;
  setSelectedTab: (index: number) => void;
  isActive?: boolean;
};
//refactoring - atp prefix
const AtpTabTitle = (props: Props): JSX.Element => {
  const { title, setSelectedTab, index } = props;

  const handleOnClick = useCallback(() => {
    setSelectedTab(index);
  }, [setSelectedTab, index]);

  return (
    <li className="atp-search-tabs__link" onClick={handleOnClick}>
      {title}
    </li>
  );
};

export default AtpTabTitle;
