import SideMenu from "../../components/molecules/SideMenu";
import Tabel from "../../components/molecules/Tabel";

const EmployeeSalary = () => {
  const column = [
    {
      field: "code",
      name: "KODE",
    },
    {
      field: "name",
      name: "NAMA",
    },
    {
      field: "account_number",
      name: "NO. REKENING",
    },
    {
      field: "salary_code",
      name: "KODE GAJI",
    },
    {
      field: "salary",
      name: "GAJI POKOK",
    },
    {
      field: "overtime",
      name: "UANG LEMBUR",
    },
    {
      field: "salary_received",
      name: "GAJI DITERIMA",
    },
    {
      field: "date",
      name: "TANGGAL TRANSFER",
    },
    {
      field: "time",
      name: "JAM TRANSFER",
    },
  ];
  
  const span1 =[
    {
      name:"001"
    },
    {
      name:"Ahmad "
    },
    {
      name:"0524958673"
    },
    {
      name:"GJ001"
    },
    {
      name:"3.500.000,00"
    },
    {
      name:"4.161.849,00"
    },
    {
      name:"34.161.849,00"
    },
    {
      name:"29/11/2018"
    },
    {
      name:"05:21:01"
    },
  ];

  const span2 =[
    {
      name:"001"
    },
    {
      name:"Ahmad "
    },
    {
      name:"0524958673"
    },
    {
      name:"GJ001"
    },
    {
      name:"3.500.000,00"
    },
    {
      name:"242.774,00"
    },
    {
      name:"34.161.849,00"
    },
    {
      name:"29/11/2018"
    },
    {
      name:"05:33:47"
    },
  ];
  return (
    <div>
      <div
        className="mycontainer mobile:mycontainerfull py-7 gap-x-7 grid"
        style={{ gridTemplateColumns: "1.2fr 5fr" }}
      >
        <div className="mt-20">
          <SideMenu />
        </div>
        <div className="mt-20">
          <div className="rounded-lg shadow border __montserat-text border-gray-200 bg-white p-5">
            <div className="mb-11">
              <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <div>
                  <div className="font-semibold">Data Gaji Karyawan</div>
                </div>
              </div>
              <div className="mt-8">
                <Tabel column={column} />
                <Tabel column={span1} />
                <Tabel column={span2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeSalary;
