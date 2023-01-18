import React from 'react';
import { IOrderedListItemType } from '../../../../types/common';
import { ImagePaths } from '../../../../util/image-path-constants';
import Heading from '../../../shared/heading/heading';
import Para from '../../../shared/para/para';
import Space from '../../../shared/space/space';
import { B, OrderedList } from '../../../shared/util/util';
import { FlexAlignItemsTypes } from '../../../shared/yals-flex/yals-flex.types';
import YalsImage from '../../../shared/yals-image/yals-image';

const keyFeatures: Array<IOrderedListItemType> = [
  {
    label: (
      <>
        <B>Lightweight</B>, <B>fast</B> and modern way of creating <Space />
        <B>User Interfaces</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Reusable component-based</B> approach.
      </>
    )
  },
  {
    label: (
      <>
        Quick Rendering With <B>Virtual DOM</B>.
      </>
    )
  },
  {
    label: (
      <>
        <B>Uni-directional</B> data flow, provides stable code.
      </>
    )
  },
  {
    label: (
      <>
        An open-source Facebook library: <B>Huge ecosystem</B> and flexibility.
      </>
    )
  },
  {
    label: `Backward compatibility.`
  },
  {
    label: (
      <>
        Efficient Design And <B>Developer Tools</B>.
      </>
    )
  },
  {
    label: `Ease Of Use.`
  }
];

const ReactKeyFeatures = () => {
  return (
    <>
      <Heading as='h2'>Key Features</Heading>

      <Para>
        <YalsImage
          imagePath={ImagePaths.REACT.KEY_FEATURES}
          height='500px'
          width='100%'
          alt='React Key Features'
          imageAlign={FlexAlignItemsTypes.FlexStart}
        />
      </Para>

      <Para>
        <OrderedList unOrdered items={keyFeatures} />
      </Para>
    </>
  );
};

export default ReactKeyFeatures;
