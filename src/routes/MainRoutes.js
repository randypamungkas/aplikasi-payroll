import LoginPage from "../pages/LoginPage";
import EmployeePage from "../pages/EmployeePage";

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
];

export default routeList;
