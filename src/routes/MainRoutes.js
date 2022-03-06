import LoginPage from '../pages/LoginPage'
import EmployeePage from '../pages/EmployeePage'
import EmployeeSalary from '../pages/EmployeeSalary'
import EmployeePaySlips from '../pages/EmployeePaySlips'

const routeList = [
  {
    name: 'Login Page',
    path: '/login',
    exact: true,
    component: <LoginPage />,
    permission: false,
  },
  {
    name: 'Data Karyawan',
    path: '/',
    exact: false,
    component: <EmployeePage />,
    permission: true,
  },
  {
    name: 'Data Gaji Karyawan',
    path: '/employee-salary',
    exact: false,
    component: <EmployeeSalary />,
    permission: true,
  },
  {
    name: 'Cetak Slip Gaji Karyawan',
    path: '/employee-payslips',
    exact: false,
    component: <EmployeePaySlips />,
    permission: true,
  },
]

export default routeList
