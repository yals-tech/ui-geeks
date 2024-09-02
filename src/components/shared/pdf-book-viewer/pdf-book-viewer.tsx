import classNames from 'classnames';
import React from 'react';
import { AppPrefix } from '../../../util/app-constants';

export interface IPDFBookViewerItemType {
  label: string;
  id: string | string[];
  url: string;
}

interface IPDFBookViewerProps {
  url: string | undefined;
}

const PDFBookViewer = (props: IPDFBookViewerProps) => {
  const { url } = props;
  console.log(url);

  const pdfBookClasses = classNames({
    [`${AppPrefix}-book-pdf-viewer`]: true
  });

  return (
    <div className={pdfBookClasses}>
      <iframe
        src={`${url}/preview`}
        width='100%'
        height='850px'
        allow='autoplay'
      ></iframe>
    </div>
  );
};

export default PDFBookViewer;
