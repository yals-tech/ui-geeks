import React from 'react';
import Code from '../../../shared/code/code';
import { CodeLanguageTypes } from '../../../shared/code/code.types';
import DemoComponentWrapper from '../../../shared/demo-component-wrapper/demo-component-wrapper';
import Space from '../../../shared/space/space';
import { IU, NewLine } from '../../../shared/util/util';
import { IYalsTabType } from '../../../shared/yals-tabs/yals-tabs.types';
import ReactDemoList, {
  ReactDemoListCode
} from '../react-home-demo-component/list-demo';

const ReactListExample = () => {
  const tabs: Array<IYalsTabType> = [
    {
      id: 1,
      content: <ReactDemoList />,
      label: 'Output'
    },
    {
      id: 2,
      content: (
        <Code language={CodeLanguageTypes.JSX}>{ReactDemoListCode}</Code>
      ),
      label: 'Code'
    }
  ];

  const demoComponents = [
    {
      id: 1,
      codeLanguage: CodeLanguageTypes.JSX,
      tabs: tabs
    }
  ];

  return (
    <>
      <IU>Example:</IU>
      <Space />
      Displaying first 10 numbers and also showing whether number is "Even" or
      "Odd".
      <NewLine />
      <NewLine />
      <DemoComponentWrapper
        demoComponentList={demoComponents}
        homePage={undefined}
        homePageLabel={undefined}
        language='React'
      />
    </>
  );
};

export default ReactListExample;
