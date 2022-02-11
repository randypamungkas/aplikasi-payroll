import React from 'react'
import { BsPrinterFill } from 'react-icons/bs'
import { CSVLink } from 'react-csv'
import moment from 'moment'

const CsvExport = ({ exportData }) => {
  return (
    <button className="mt-4 bg-gray-800 flex justify-between hover:text-white transition hover:border-gray-800 items-center text-sm font-medium text-gray-100 py-1.5 px-3 border rounded-full">
      <CSVLink
        data={exportData || []}
        filename={`Export${window.location.pathname}-${moment().format(
          'DDMMYYYY',
        )}`}
      >
        <div className="flex items-center py-2 px-4">
          <span>
            <BsPrinterFill className="mr-2 text-sm" />
          </span>
          Cetak Data Gaji
        </div>
      </CSVLink>
    </button>
  )
}

export default CsvExport
