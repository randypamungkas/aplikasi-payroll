import React from 'react'
import moment from 'moment'

export const ComponentToPrint = React.forwardRef(({ dataWithId }, ref) => {
  return (
    <div ref={ref} className="__print-out" style={{ padding: '50px' }}>
      <div
        style={{
          float: 'left',
          padding: '.5em',
          fontSize: '32px',
          fontWeight: 'bold',
        }}
      >
        PAYSLIP
      </div>
      <div
        style={{
          float: 'right',
          padding: '.5em',
          fontSize: '32px',
          fontWeight: 'bold',
        }}
      >
        {moment(dataWithId?.data?.responseData.createdAt).format(
          'DD MMMM YYYY',
        )}
      </div>
      <table
        style={{
          width: '100%',
          border: '2px solid #000',
        }}
      >
        <tr style={{ fontSize: '22px' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Nama</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            {dataWithId?.data?.responseData.name}
          </td>
        </tr>
        <tr style={{ fontSize: '22px' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Kode Karyawan</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            {dataWithId?.data?.responseData.code}
          </td>
        </tr>
        <tr style={{ fontSize: '22px' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Nomor Rekening</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            {dataWithId?.data?.responseData.account_number}
          </td>
        </tr>
        <tr style={{ fontSize: '22px' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Gaji</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            Rp{' '}
            {Intl.NumberFormat('en-US').format(
              dataWithId?.data?.responseData.salary,
            )}
          </td>
        </tr>
        <tr style={{ fontSize: '22px', borderBottom: '2px solid #000' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Gaji Lembur</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            Rp{' '}
            {Intl.NumberFormat('en-US').format(
              dataWithId?.data?.responseData.overtime * 60000,
            )}
          </td>
        </tr>
        <tr style={{ fontSize: '22px' }}>
          <th style={{ float: 'left', padding: '.5em' }}>Total Gaji</th>
          <td style={{ float: 'right', padding: '.5em' }}>
            Rp{' '}
            {Intl.NumberFormat('en-US').format(
              dataWithId?.data?.responseData.salary_received,
            )}
          </td>
        </tr>
      </table>
    </div>
  )
})

const PdfExport = ({ componentRef, dataWithId }) => {
  return (
    <div>
      <ComponentToPrint ref={componentRef} dataWithId={dataWithId} />
    </div>
  )
}

export default PdfExport
