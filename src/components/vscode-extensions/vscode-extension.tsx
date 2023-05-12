import classNames from 'classnames';
import React, { memo, useState } from 'react';
import useDeviceType from '../../custom-hooks/use-device-type';
import { AppPrefix, DeviceType } from '../../util/app-constants';
import Heading from '../shared/heading/heading';
import { I } from '../shared/util/util';
import YALSBox from '../shared/yals-box/yals-box';
import YalsButton from '../shared/yals-button/yals-button';
import {
  YALSButtonVariantTypes,
  YALSSizeTypes
} from '../shared/yals-button/yals-button.types';
import YalsFlex from '../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../shared/yals-flex/yals-flex.types';
import YalsImage from '../shared/yals-image/yals-image';
import YalsModal from '../shared/yals-modal/yals-modal';
import ExtensionList from './vs-extensions.json';
import './vscode-extension.scss';
import { IVSCodeExtensionType } from './vscode-extension.types';

const VSCodeExtesnsionComponent = () => {
  const deviceType = useDeviceType();
  const extCls = classNames({
    [`${AppPrefix}-vscode-extention`]: true,
    'mt-4': true
  });

  const [extensionList] = useState(ExtensionList);

  const [selectedExtension, setselectedExtension] =
    useState<IVSCodeExtensionType | null>(null);

  const [showModal, setShowModal] = useState(false);
  const showDemo = (ext: IVSCodeExtensionType) => {
    setselectedExtension(() => ext);
    setShowModal(() => true);
  };

  const closeSearchModal = () => {
    setShowModal(() => false);
    setselectedExtension(() => null);
  };

  return (
    <>
      <div className={extCls}>
        <Heading as='h1'>
          Visual Studio Code Extensions
          <YalsButton
            variant={YALSButtonVariantTypes.Link}
            target='_blank'
            href='https://marketplace.visualstudio.com/search?term=ui-geeks&target=VSCode&category=All%20categories&sortBy=Relevance'
            size='sm'
          >
            View in Marketplace
          </YalsButton>
        </Heading>
        <div className='ext-content'>
          <YalsFlex
            justifyContent={FlexJustifyContentTypes.FlexStart}
            className='ext-box'
          >
            {extensionList.map((ext: IVSCodeExtensionType) => {
              return (
                <YALSBox key={ext.extensionName}>
                  <div className='ext-image'>
                    <div className='img-box'>
                      <img
                        width='80px'
                        height='80px'
                        src={ext.icon}
                        alt={ext.displayName}
                      />
                    </div>

                    <div className='ext-detail'>
                      <a
                        target='_blank'
                        className='ext-name'
                        href={`https://marketplace.visualstudio.com/items?itemName=skumarmca2010.${ext.extensionName}`}
                      >
                        <b>
                          {ext.displayName} (v{ext.version})
                        </b>
                      </a>

                      <br />
                      <div className='text-secondary'>{ext.extensionName}</div>
                      <div className='mb-2'>
                        <I>{ext.shortDescription}</I>
                      </div>
                      <div>
                        <YalsButton
                          variant={YALSButtonVariantTypes.Info}
                          outline={true}
                          size={YALSSizeTypes.Small}
                          onClick={showDemo.bind(this, ext)}
                        >
                          Demo
                        </YalsButton>
                      </div>
                    </div>
                  </div>
                </YALSBox>
              );
            })}
          </YalsFlex>
        </div>
      </div>

      {showModal && selectedExtension && (
        <YalsModal
          modalHeader={selectedExtension.displayName}
          show={true}
          onHide={closeSearchModal}
          fullScreen={deviceType === DeviceType.Mobile}
          size={YALSSizeTypes.Large}
          modalContent={
            <YalsImage
              imagePath={selectedExtension.demoURL}
              alt={selectedExtension.displayName}
              imageTitle={`Demo of ${selectedExtension.displayName}`}
              width='100%'
            />
          }
        ></YalsModal>
      )}
    </>
  );
};

export default memo(VSCodeExtesnsionComponent);
