import React, { memo, useContext } from 'react';

import { AppContext } from '../../../../util/app-context';
import HeaderSection from '../header-section';
import LeftSection from '../left-section';
import PersonalInfo from '../personal-info';
import QualificationList from '../qualifications';
import ToolsUsed from '../tools-used';
import './home.scss';

const Home = () => {
  const appContext = useContext(AppContext);

  return (
    <div className={`home-layout theme-${appContext.theme}`}>
      <div className='row'>
        <div className='col-md-12'>
          <HeaderSection key={appContext.theme} />
        </div>

        <div className='col-lg-8 col-md-12 left-section'>
          <LeftSection />
        </div>

        <div className='col-lg-4 col-md-12'>
          {/* <CertificationsList /> */}
          <QualificationList />
          <ToolsUsed />
          <PersonalInfo />
        </div>
      </div>
    </div>
  );
};

export default memo(Home);
