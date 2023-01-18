import classNames from 'classnames';
import React, { memo, useContext } from 'react';
import {
  anOldHope,
  CopyBlock,
  dracula,
  github,
  pojoaque
} from 'react-code-blocks';
import { AppPrefix, THEME_CONSTANT } from '../../../util/app-constants';
import { AppContext } from '../../../util/app-context';
import './code.scss';
import { ICodeProps } from './code.types';

const Code = (props: ICodeProps) => {
  const {
    children,
    language = 'typescript',
    theme,
    showLineNumbers = false,
    codeBlock = false,
    highlight,
    copyBtn = true
  } = props;

  const appContext = useContext(AppContext);

  const codeClasses = classNames({
    [`${AppPrefix}-code`]: true,
    [`${AppPrefix}-code-no-copy-btn`]: !copyBtn
  });

  const getTheme = () => {
    switch (theme) {
      case 'dracula':
        return dracula;
      case 'anOldHope':
        return anOldHope;
      case 'github':
        return github;

      default:
        return appContext.theme === THEME_CONSTANT.DARK_THEME
          ? pojoaque
          : anOldHope;
    }
  };

  return (
    <div className={codeClasses} style={{ textAlign: 'left' }}>
      <CopyBlock
        text={children}
        language={language}
        showLineNumbers={showLineNumbers}
        theme={getTheme()}
        wrapLines={true}
        codeBlock={codeBlock}
        highlight={highlight}
      />
    </div>
  );
};

export default memo(Code);
