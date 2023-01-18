import classNames from 'classnames';
import React, { useState } from 'react';
import Tab from 'react-bootstrap/esm/Tab';
import Tabs from 'react-bootstrap/esm/Tabs';
import { AppPrefix } from '../../../util/app-constants';
import './yals-tabs.scss';
import { IYalsTabsProps, IYalsTabType } from './yals-tabs.types';
const YALSTabs = (props: IYalsTabsProps) => {
  const { id, tabs, activeTab, stretch = false, fillEvenly = false } = props;
  const [currentTab, setCurrentTab] = useState(activeTab || tabs[0].id);

  const tabsClasses = classNames({
    [`${AppPrefix}-tabs`]: true
  });

  const updateCurrentTab = (tabId: string | number | null) => {
    if (tabId) {
      setCurrentTab(() => tabId);
    }
  };

  return (
    <div className={tabsClasses}>
      <Tabs
        defaultActiveKey={activeTab}
        id={id}
        fill={stretch}
        justify={fillEvenly}
        onSelect={(k) => updateCurrentTab(k)}
      >
        {tabs.map((tab: IYalsTabType) => {
          return (
            <Tab
              key={tab.id}
              eventKey={tab.id}
              title={tab.label}
              disabled={tab.disabled}
            >
              {tab.id == currentTab && <>{tab.content}</>}
            </Tab>
          );
        })}
      </Tabs>
    </div>
  );
};

export default YALSTabs;
