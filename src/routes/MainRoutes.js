import LoginPage from "../pages/LoginPage";
import EmployeePage from "../pages/EmployeePage";
import EmployeeSalary from "../pages/EmployeeSalary";
import EmployeePaySlips from "../pages/EmployeePaySlips";

const routeList = [
  {
    name: "Login Page",
    path: "/login",
    exact: true,
    component: <LoginPage />,
    permission: false,
  },
  {
    name: "Data Karyawan",
    path: "/",
    exact: true,
    component: <EmployeePage />,
    permission: false,
  },
  {
    name: "Data Gaji Karyawan",
    path: "/employee_salary",
    exact: true,
    component: <EmployeeSalary />,
    permission: false,
  },
  {
    name: "Cetak Slip Gaji Karyawan",
    path: "/employee_payslips",
    exact: true,
    component: <EmployeePaySlips />,
    permission: false,
  },
];

export default routeList;
