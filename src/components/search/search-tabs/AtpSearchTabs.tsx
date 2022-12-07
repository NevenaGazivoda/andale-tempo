import React, { ReactElement, useState } from 'react';

import './AtpSearchTabs.scss';
import AtpTabTitle, { Props as AtpTabTitleProps } from './AtpTabTitle';

type Props = {
  children: ReactElement<AtpTabTitleProps>[];
  preSelectedTabIndex?: number;
};

const AtpSearchTabs = (props: Props): JSX.Element => {
  const { children, preSelectedTabIndex } = props;

  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(preSelectedTabIndex || 0);

  return (
    <>
      <ul className="atp-search-tabs">
        {children.map((item, index) => (
          <AtpTabTitle
            key={item.props.title}
            title={item.props.title}
            index={index}
            isActive={index === selectedTabIndex}
            setSelectedTab={setSelectedTabIndex}
          />
        ))}
      </ul>

      {/* show selcted tab by index*/}
      {children[selectedTabIndex]}
    </>
  );
};

export default AtpSearchTabs;
