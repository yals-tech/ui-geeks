import { ValueOf } from '../../../types/common';

export const CodeLanguageTypes = {
  JavaScript: 'javascript',
  TypeScript: 'typescript',
  HTML: 'html',
  CSS: 'css',
  JSX: 'jsx'
};

export const CodeThemeTypes = {
  Dracula: 'dracula',
  AnOldHope: 'anOldHope',
  Github: 'github'
};

export type CodeLanguageType = ValueOf<typeof CodeLanguageTypes>;
export type CodeThemeType = ValueOf<typeof CodeThemeTypes>;

export interface ICodeProps {
  children: string;
  language?: CodeLanguageType;
  showLineNumbers?: boolean;
  theme?: CodeThemeType;
  codeBlock?: boolean;
  highlight?: string;
  copyBtn?: boolean;
}
