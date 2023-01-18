import React, { useEffect, useState } from 'react';
import Para from '../../../shared/para/para';
import { NewLine } from '../../../shared/util/util';

const JSHomeDemoDeviceInfo = () => {
  const [deviceInfo, setDeviceInfo] = useState({
    language: '',
    platform: '',
    browser: {
      name: '',
      version: 0
    },
    deviceWidth: 0,
    deviceHeight: 0,
    currentURL: '',
    bandwidth: 0,
    connectionType: '',
    dateTime: '',
    deviceType: ''
  });

  const getDeviceInfo = () => {
    const userAgent = (navigator.userAgent || '').toLowerCase();
    const matchMedia =
      window.matchMedia && window.matchMedia('(any-pointer:coarse)');

    let isMobile = matchMedia ? matchMedia.matches : false;

    let isTablet = false;

    const clientInformation: any = window.clientInformation;
    const userAgentInfo: any = clientInformation
      ? clientInformation.userAgentData
      : {};

    const browserInfo = userAgentInfo.brands && userAgentInfo.brands[1];

    const today = new Date();
    let datetime = '';

    try {
      isTablet =
        /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
          userAgent
        );
      datetime = today.toLocaleDateString() + '  ' + today.toLocaleTimeString();
    } catch (e) {}

    setDeviceInfo((prev: any) => {
      return {
        ...prev,
        deviceType: isTablet
          ? 'Tablet'
          : userAgentInfo
          ? userAgentInfo.mobile || isMobile
            ? 'Mobile'
            : 'Desktop/Laptop'
          : '',
        language: clientInformation ? clientInformation.language : '',
        platform: userAgentInfo ? userAgentInfo.platform : '',
        browser: {
          name: browserInfo ? browserInfo.brand : '',
          version: browserInfo ? browserInfo.version : ''
        },
        deviceWidth: window.innerWidth,
        deviceHeight: window.innerHeight,
        currentURL: window.location && window.location.href,
        bandwidth:
          clientInformation &&
          clientInformation.connection &&
          clientInformation.connection.downlink,
        connectionType:
          clientInformation &&
          clientInformation.connection &&
          clientInformation.connection.effectiveType,
        dateTime: datetime
      };
    });
  };

  useEffect(() => {
    getDeviceInfo();
  }, []);

  return (
    <>
      <div>
        <Para>
          <NewLine />
          {deviceInfo.platform && (
            <div className='result-item'>
              <span className='key-label'>Operating System:</span>
              <span className='key-value'>{deviceInfo.platform}</span>
            </div>
          )}

          {deviceInfo.browser.name && (
            <div className='result-item'>
              <span className='key-label'>Browser:</span>
              <span className='key-value'>
                {deviceInfo.browser.name}{' '}
                {deviceInfo.browser.version
                  ? `(version ${deviceInfo.browser.version})`
                  : ''}
              </span>
            </div>
          )}

          <div className='result-item'>
            <span className='key-label'>Network:</span>
            <span className='key-value'>
              {deviceInfo.connectionType} ({deviceInfo.bandwidth} Mbps)
            </span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Device Type:</span>
            <span className='key-value'>{deviceInfo.deviceType}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Screen Size:</span>
            <span className='key-value'>
              {deviceInfo.deviceWidth}W x {deviceInfo.deviceHeight}H
            </span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Language:</span>
            <span className='key-value'>{deviceInfo.language}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Current URL:</span>
            <span className='key-value'>{deviceInfo.currentURL}</span>
          </div>

          <div className='result-item'>
            <span className='key-label'>Date {`&`} Time:</span>
            <span className='key-value'>{deviceInfo.dateTime}</span>
          </div>
        </Para>
      </div>
    </>
  );
};

export default JSHomeDemoDeviceInfo;

export const JSHomeDemoDeviceInfoCode = `const getDeviceInfo = () => {
  const userAgent = navigator.userAgent.toLowerCase();
  let isMobile = window.matchMedia('(any-pointer:coarse)').matches;
  const isTablet =
    /(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(
    userAgent
  );

  const { clientInformation } = window;
  const userAgentInfo = clientInformation.userAgentData || null;
  const browserInfo = userAgentInfo.brands && userAgentInfo.brands[1];

  return {
    deviceType: isTablet
      ? 'Tablet'
      : userAgentInfo.mobile || isMobile
        ? 'Mobile'
        : 'Desktop/Laptop',
    language: clientInformation.language,
    platform: userAgentInfo ? userAgentInfo.platform : '',
    browser: {
      name: browserInfo ? browserInfo.brand : '',
      version: browserInfo ? browserInfo.version : ''
    },
    deviceWidth: window.innerWidth,
    deviceHeight: window.innerHeight,
    currentURL: window.location.href,
    bandwidth: clientInformation.connection.downlink,
    connectionType: clientInformation.connection.effectiveType,
    dateTime: new Date().toLocaleDateString() + ' ' + new Date().toLocaleTimeString()
  }
}`;
