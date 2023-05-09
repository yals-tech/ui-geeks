import classNames from 'classnames';
import React, { memo, useEffect, useState } from 'react';
import { AppPrefix } from '../../util/app-constants';
import Heading from '../shared/heading/heading';
import { I } from '../shared/util/util';
import YALSBadge from '../shared/yals-badge/yals-badge';
import YALSBox from '../shared/yals-box/yals-box';
import { YALSButtonVariantTypes } from '../shared/yals-button/yals-button.types';
import YalsFlex from '../shared/yals-flex/yals-flex';
import { FlexJustifyContentTypes } from '../shared/yals-flex/yals-flex.types';
import YalsImage from '../shared/yals-image/yals-image';
import './vscode-extension.scss';

const VSCodeExtesnsionComponent = () => {
  const extCls = classNames({
    [`${AppPrefix}-vscode-extention`]: true,
    'mt-4': true
  });

  const [extensionList] = useState([
    {
      extensionId: 'd5849a88-f199-41b9-9061-3633cd7edece',
      extensionName: 'npm-dependencies-ui-geeks',
      displayName: 'NPM Dependency Report',
      flags: 'validated, public',
      shortDescription: 'Generate Visual NPM Package Dependency Report.',
      versions: [
        {
          version: '1.0.0',
          flags: 'validated',
          lastUpdated: '2023-05-05T17:20:00.077Z',
          files: [
            {
              assetType: 'Microsoft.VisualStudio.Services.Icons.Small',
              source:
                'https://skumarmca2010.gallerycdn.vsassets.io/extensions/skumarmca2010/npm-dependencies-ui-geeks/1.0.0/1683306986931/Microsoft.VisualStudio.Services.Icons.Small'
            }
          ]
        }
      ],
      categories: ['Visualization'],
      tags: [
        'dev dependencies',
        'node',
        'npm',
        'npm modules',
        'npm packages',
        'package dependencies',
        'report',
        'ui geeks',
        'ui-geeks'
      ],
      statistics: [
        {
          statisticName: 'install',
          value: 9
        },
        {
          statisticName: 'weightedRating',
          value: 4.403204729309272
        },
        {
          statisticName: 'downloadCount',
          value: 2
        }
      ]
    },
    {
      extensionId: '232e506e-6fdd-40c7-bc1b-bf30c9e38a56',
      extensionName: 'npm-audit-ui-geeks',
      displayName: 'NPM Audit Report',
      flags: 'validated, public',
      shortDescription: 'Generate Visual NPM Package Audit Report.',
      versions: [
        {
          version: '1.0.0',
          files: [
            {
              assetType: 'Microsoft.VisualStudio.Services.Icons.Small',
              source:
                'https://skumarmca2010.gallerycdn.vsassets.io/extensions/skumarmca2010/npm-audit-ui-geeks/1.0.0/1683306961513/Microsoft.VisualStudio.Services.Icons.Small'
            }
          ]
        }
      ],
      categories: ['Visualization'],
      tags: [
        'node',
        'npm',
        'npm audit',
        'npm dependencies audit',
        'npm modules',
        'npm packages',
        'package dependencies',
        'ui geeks',
        'ui-geeks'
      ],
      statistics: [
        {
          statisticName: 'install',
          value: 17
        },
        {
          statisticName: 'weightedRating',
          value: 4.403204729309272
        },
        {
          statisticName: 'downloadCount',
          value: 3
        }
      ]
    }
  ]);
  const getExtentionList = () => {};

  useEffect(() => {
    getExtentionList();
  });

  return (
    <div className={extCls}>
      <Heading as='h1'>Visual Studio Code Extensions</Heading>
      {extensionList.map((ext: any) => {
        return (
          <YALSBox key={ext.extensionName}>
            <YalsFlex justifyContent={FlexJustifyContentTypes.FlexStart}>
              <div className='ext-image'>
                <YalsImage
                  width='80px'
                  height='80px'
                  imagePath={ext.versions[0].files[0].source}
                  alt={ext.displayName}
                />
              </div>

              <div className='ext-detail'>
                <a
                  target='_blank'
                  href={`https://marketplace.visualstudio.com/items?itemName=skumarmca2010.${ext.extensionName}`}
                >
                  <b>
                    {ext.displayName} (v{ext.versions[0].version})
                  </b>
                </a>

                <br />
                <div className='text-secondary'>{ext.extensionName}</div>
                <div className='mb-2'>
                  <I>{ext.shortDescription}</I>
                </div>

                <div>
                  {ext.statistics.map((stat: any) => {
                    return (
                      <div className='ext-stat' key={stat.statisticName}>
                        <YALSBadge
                          content={`${stat.statisticName}: ${stat.value}`}
                          bg='secondary'
                        />
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className='ext-tags'>
                {ext.tags.map((tag: string) => {
                  return (
                    <div className='ext-stat' key={tag}>
                      <YALSBadge
                        content={tag}
                        bg={YALSButtonVariantTypes.Success}
                      />
                    </div>
                  );
                })}
              </div>
            </YalsFlex>
          </YALSBox>
        );
      })}
    </div>
  );
};

export default memo(VSCodeExtesnsionComponent);
