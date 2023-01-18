import React from 'react';
import { Col, Row } from 'react-bootstrap';
import useDeviceType from '../../../../custom-hooks/use-device-type';
import { DeviceType } from '../../../../util/app-constants';
import { ImagePaths } from '../../../../util/image-path-constants';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B } from '../../../shared/util/util';
import YalsImage from '../../../shared/yals-image/yals-image';

const ReactTrends = () => {
  const deviceType = useDeviceType();

  return (
    <>
      <Heading as='h2'>Why React</Heading>

      <Para>
        <Para>
          The key features of React makes it quite popular among other frontend
          libraries and frameworks. Below trends from <B>Google</B> and
          <Space /> <B>NPM</B> shows why companies are choosing React for
          developing the UI.
        </Para>

        <Row>
          <Col lg={6} md={12}>
            <YalsImage
              imagePath={
                deviceType === DeviceType.Desktop
                  ? ImagePaths.REACT.GOOGLE_TREND_DESKTOP
                  : ImagePaths.REACT.GOOGLE_TREND_MOBILE
              }
              height='280px'
              width='100%'
              alt='Google Trends For React'
              imageTitle='Google Trends For React'
            />
          </Col>

          <Col lg={6} md={12}>
            <YalsImage
              imagePath={
                deviceType === DeviceType.Desktop
                  ? ImagePaths.REACT.NPM_TREND_DESKTOP
                  : ImagePaths.REACT.NPM_TREND_MOBILE
              }
              height='280px'
              width='100%'
              alt='NPM Trends For React'
              imageTitle='NPM Trends For React'
            />
          </Col>
        </Row>
      </Para>
    </>
  );
};

export default ReactTrends;
