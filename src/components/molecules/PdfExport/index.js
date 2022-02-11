import React from 'react'
import Pdf from 'react-to-pdf'
import { BsPrinterFill } from 'react-icons/bs'

const ref = React.createRef()

const PdfExport = ({ exportData }) => {
  const options = {
    orientation: 'landscape',
    unit: 'in',
    format: [4, 2],
  }

  return (
    <div className="App">
      <Pdf targetRef={ref} filename="code-example.pdf" options={options}>
        {({ toPdf, targetRef }) => (
          <div className="text-sm flex m-auto justify-center font-medium text-gray-900 max-w-px __text-elipsis-one-line">
            <button
              ref={targetRef}
              onClick={toPdf}
              className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
            >
              Cetak
              <span>
                <BsPrinterFill className="ml-2 text-sm" />
              </span>
            </button>
          </div>
        )}
      </Pdf>
    </div>
  )
}

export default PdfExport
