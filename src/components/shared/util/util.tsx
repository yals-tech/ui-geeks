import React, { CSSProperties } from 'react';
import {
  IIndentProps,
  IOrderedListItemType,
  IOrderedListProps,
  IScriptTagProps
} from '../../../types/common';
import { AppPrefix } from '../../../util/app-constants';
import Word from '../word/word';

const ScriptTag = (props: IScriptTagProps) => {
  const { children, closing = false } = props;
  return (
    <>
      &lt;{closing && '/'}script{children && children}&gt;
    </>
  );
};

const NewLine = () => {
  return <br />;
};

const BI = (props: any) => {
  const { children } = props;

  return (
    <Word bold italic>
      {children}
    </Word>
  );
};

const I = (props: any) => {
  const { children } = props;

  return <Word italic>{children}</Word>;
};

const B = (props: any) => {
  const { children } = props;

  return <Word bold>{children}</Word>;
};

const IU = (props: any) => {
  const { children } = props;

  return (
    <Word underline italic>
      {children}
    </Word>
  );
};

const Indent = (props: IIndentProps) => {
  const { children, indent = 1 } = props;
  const indentStyle: CSSProperties = {
    marginLeft: `${indent * 3}rem`
  };

  return <span style={indentStyle}>{children}</span>;
};

const OrderedList = (props: IOrderedListProps) => {
  const { items, unOrdered = false, expanded = false } = props;

  const clsName = `${AppPrefix}-ordered-list${expanded ? '-expanded' : ''}`;
  if (!items) {
    return null;
  }

  const liItems = (list: Array<IOrderedListItemType>) => {
    return list.map((itm: IOrderedListItemType, index: number) => {
      return <li key={`${index}`}>{itm.label}</li>;
    });
  };

  if (unOrdered) {
    return (
      <ul className={clsName}>
        {items.map((itm: IOrderedListItemType, index: number) => {
          return (
            <li key={`${index}`}>
              {itm.label}
              {itm.items && <ul className={clsName}>{liItems(itm.items)}</ul>}
            </li>
          );
        })}
      </ul>
    );
  }

  return (
    <ol className={clsName}>
      {items.map((itm: IOrderedListItemType, index: number) => {
        return (
          <li key={`${index}`}>
            {itm.label}
            {itm.items && <ol className={clsName}>{liItems(itm.items)}</ol>}
          </li>
        );
      })}
    </ol>
  );
};

const loadComponentFromPath = (path: string) => {
  console.log('loadComponentFromPath');
  return React.lazy(() => import(`../../fe/${path}`));
};

export {
  ScriptTag,
  NewLine,
  Indent,
  OrderedList,
  BI,
  IU,
  I,
  B,
  loadComponentFromPath
};
