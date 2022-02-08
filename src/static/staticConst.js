import { BiBook, BiMoney, BiPrinter } from "react-icons/bi";

export const staticConst = {
  profile_menu: {
    user: {
      name: "Randy Admin",
      role_name: "Admin",
      user_menu: [
        {
          menu: {
            title: "Data Karyawan",
            icon: <BiBook className="text-xl" />,
            path: "/",
          },
        },
        {
          menu: {
            title: "Data Gaji Karyawan",
            icon: <BiMoney className="text-xl" />,
            path: "/employee-salary",
          },
        },
        {
          menu: {
            title: "Cetak Slip Gaji Karyawan",
            icon: <BiPrinter className="text-xl" />,
            path: "/employee-payslips",
          },
        },
      ],
    },
  },
};
