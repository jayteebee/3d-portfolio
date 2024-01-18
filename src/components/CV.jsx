import React, { useEffect, useState } from 'react';
import { styles } from '../styles'; 
import { Document, Page } from 'react-pdf';
import { pdfjs } from 'react-pdf';
import 'react-pdf/dist/esm/Page/AnnotationLayer.css';
import cvPDF from "../../src/assets/JethroBlockCV.pdf"

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

// react-pdf__Page__textContent textLayer
// react-pdf__Page__textContent textLayer
const CV = ({ closeCV }) => {

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-center items-center" >
      <div className={`bg-white p-5 rounded-lg max-w-3xl w-full ${styles.padding}  overflow-y-auto max-h-[80vh]`}>
      <button onClick={closeCV} className={`${styles.heroSubText} float-right`} style={{zIndex: 500, position: "relative"}}>Close</button>

        <Document file={cvPDF}>
            <Page pageNumber={1} />
            <Page pageNumber={2} />
        </Document>

      </div>
    </div>
  );
};

export default CV;
