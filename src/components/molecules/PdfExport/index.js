import React from 'react'
import axios from 'axios'
import FileSaver from 'file-saver'
import moment from 'moment'

import { BsPrinterFill } from 'react-icons/bs'

const PdfExport = ({ exportData }) => {
  const handleExportPdf = async () => {
    try {
      const response = await axios(
        {
          method: 'get',
          url: `http://localhost:5500/employees/print-payslip-employee/${exportData.id}`,
        },
        { responseType: 'arraybuffer' },
      )

      const blob = new Blob([response.data], {
        type: 'application/pdf;charset=utf-8',
      })

      FileSaver.saveAs(
        blob,
        `Export${window.location.pathname}-${moment().format(
          'DDMMYYYY-HHMMSS',
        )}.pdf`,
      )
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div className="text-sm flex m-auto justify-center font-medium text-gray-900 max-w-px __text-elipsis-one-line">
      <button
        onClick={handleExportPdf}
        className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
      >
        Cetak
        <span>
          <BsPrinterFill className="ml-2 text-sm" />
        </span>
      </button>
    </div>
  )
}

export default PdfExport
