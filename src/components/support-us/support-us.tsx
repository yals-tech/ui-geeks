import React, { memo, useState } from 'react';
import Heading from '../shared/heading/heading';
import YalsImage from '../shared/yals-image/yals-image';

import classNames from 'classnames';
import { AppPrefix } from '../../util/app-constants';
import { ImagePaths } from '../../util/image-path-constants';
import Para from '../shared/para/para';
import Space from '../shared/space/space';
import { B, BI, NewLine } from '../shared/util/util';
import YalsButton from '../shared/yals-button/yals-button';
import { YALSButtonVariantTypes } from '../shared/yals-button/yals-button.types';
import './support-us.scss';

const SupportComponent = () => {
  const [isValidCountry] = useState(false);
  const extCls = classNames({
    [`${AppPrefix}-support-us`]: true
  });

  // useEffect(() => {
  //   const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  //   setIsValidCountry(() => timeZone === 'Asia/Calcutta');
  // });

  return (
    <div className={extCls}>
      <NewLine />
      <Heading as='h1'>Support Us</Heading>

      <Para>
        We are a group of hardworking and passionate <BI>UI/UX</BI>
        <Space /> professionals. We are working to build a platform where
        anybody can easily learn the core & advanced concepts of UI/UX
        frameworks and technologies like <Space />
        <B>ReactJs, Angular, JavaScript, TypeScript, SCSS/CSS/LESS, NodeJs</B>
        <Space /> and various others. We try to publish short, precise and
        quality content which would allow readers to learn UI/UX terminologies
        with ease.
      </Para>

      <Para>
        If you liked our content, you may support us in writing more useful
        content. Your smallest support would keep us motivated to keep writing.
      </Para>

      <Para>You can support us in the below given ways.</Para>

      <hr />
      <Para textAlign='center'>
        <Heading as='h2'>Become a Sponsor</Heading>
        <Para textAlign='center'>
          You may join us as a sponsor and we'll display your name, logo and
          other details on our website. Please send us mail at below address:
          <NewLine />
          <NewLine />
          <YalsButton
            href='mailto:mail.ui.geeks.in@gmail.com'
            className='text-light mail-link'
            variant={YALSButtonVariantTypes.Link}
          >
            <b>mail.ui.geeks.in@gmail.com</b>
          </YalsButton>
        </Para>
      </Para>
      <hr />

      <Para textAlign='center'>
        <Heading as='h2'>Buy a Coffee</Heading>
        <YalsImage
          imagePath={ImagePaths.SUPPORT_US.BUY_ME_COFFEE}
          alt={'Support us by buying a coffee.'}
          width='160px'
        />
      </Para>

      {isValidCountry && (
        <>
          <hr />
          <Para textAlign='center'>
            <Heading as='h2'>By sending support via Paytm</Heading>
            <div className='text-danger'>
              Please verify <B>Mobile Number</B> and <B>Name</B> before
              transferring the money.
            </div>
            <YalsImage
              imagePath={ImagePaths.SUPPORT_US.PAYTM}
              alt={'Support us by sending donation on Paytm.'}
              width='100%'
            />
          </Para>
        </>
      )}
    </div>
  );
};

export default memo(SupportComponent);
