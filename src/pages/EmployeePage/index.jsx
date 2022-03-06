import { useEffect, useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import axios from "axios";
import Swal from "sweetalert2";
import SideMenu from "../../components/molecules/SideMenu";
import Modal from "../../components/molecules/Modal";
import Tabel from "../../components/molecules/Tabel";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const EmployeePage = () => {
  const [handleModal, setHandleModal] = useState(false);
  const [datas, setDatas] = useState(null);
  const [isEdit, setEdit] = useState(false);
  const [employee, setEmployee] = useState({
    id: "",
    code: "",
    name: "",
    address: "",
    account_number: "",
    overtime: 0,
    salary: 0,
    salary_received: 0,
  });

  const getDatas = async () => {
    try {
      const response = await axios({
        method: "get",
        url: "http://localhost:5500/employees/get-all-employee",
      });

      setDatas(response.data.responseData);
    } catch (err) {
      console.log(err);
    }
  };

  const handleModalDetail = async (data) => {
    setHandleModal(true);
    setEdit(true);
    setEmployee(data);
  };

  const handleModalClose = () => {
    setHandleModal(false);
    setEdit(false);
    setEmployee({
      id: "",
      code: "",
      name: "",
      address: "",
      account_number: "",
      overtime: 0,
      salary: 0,
      salary_received: 0,
    });
  };

  const handleDeleteEmployee = async (id) => {
    try {
      const response = await axios({
        method: "delete",
        url: `http://localhost:5500/employees/delete-employee/${id}`,
      });

      Swal.fire({
        title: "Anda yakin ingin menghapus Karyawan?",
        text: "Anda tidak akan dapat mengembalikan ini",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Iya, hapus!",
        cancelButtonText: "Batal",
      }).then((result) => {
        if (result.isConfirmed) {
          setDatas(response.data.responseData);

          Swal.fire("Data terhapus!", "File Anda telah dihapus.", "success");
        }
      });
    } catch (err) {
      console.log(err);
    }
  };

  const onChangeInput = (key, val) => {
    setEmployee({
      ...employee,
      [key]: val,
      salary_received:
        key === "overtime"
          ? val * 60000 + employee.salary
          : employee.salary_received,
    });
  };

  const handleCreateAndUpdateEmployee = async () => {
    try {
      const response = await axios({
        method: isEdit ? "put" : "post",
        url: `http://localhost:5500/employees/${
          isEdit ? "update" : "create"
        }-employee/${isEdit ? employee.id : ""}`,
        data: {
          ...employee,
          createAt: null,
          updatedAt: null,
        },
      });
      Swal.fire("Good job!", `${response.data.responseDesc}`, "success").then(
        (result) => {
          if (result.isConfirmed) {
            setEmployee({
              id: "",
              code: "",
              name: "",
              address: "",
              account_number: "",
              overtime: 0,
              salary: 0,
              salary_received: 0,
            });
            getDatas();
          }
        }
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getDatas();
  }, []);

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
      field: "address",
      name: "ALAMAT",
    },
    {
      field: "account_number",
      name: "NO. REKENING",
    },
    {
      field: "salary",
      name: "GAJI",
    },
    {
      field: "process",
      name: "PROSES",
    },
  ];

  const schema = yup
    .object()
    .shape({
      code: yup.string().required("masukan kode karyawan"),
      name: yup.string().required("masukan nama karyawan"),
      address: yup.string().required("masukan alamat karyawan"),
      account_number: yup.string().required("masukan nomor rekening karyawan"),
      salary: yup
        .number("masukan gaji karyawan")
        .positive("masukan gaji karyawan")
        .required(),
    })
    .required();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const AddItem = (
    <div className="px-10 py-6 m-auto bg-white max-w-max rounded-md __montserat-text">
      <h1 className="font-bold pt-4 text-2xl text-center">
        Tambah Data Karyawan
      </h1>
      <div className="mt-4">
        <form onSubmit={handleSubmit(handleCreateAndUpdateEmployee)}>
          <div className="mb-3 pt-0 flex flex-col">
            <label className="text-sm font-medium text-subtitle">
              ID Karyawan
            </label>
            <input
              disabled
              value={employee.id}
              type="text"
              className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{
                width: 330,
              }}
            />
          </div>
          <div className="mb-3 pt-0 flex flex-col">
            <label className="text-sm font-medium text-subtitle">
              Kode Karyawan<span className="text-danger">*</span>
            </label>
            <input
              name="code"
              value={employee.code}
              type="text"
              className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{
                width: 330,
              }}
              {...register("code", {
                onChange: (e) => onChangeInput("code", e.target.value),
              })}
            />
            {errors.code?.message && (
              <p className="text-danger">{errors.code?.message}</p>
            )}
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-subtitle">
              Nama Karyawan<span className="text-danger">*</span>
            </label>
            <div>
              <input
                name="name"
                value={employee.name}
                type="text"
                className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                style={{
                  width: 330,
                }}
                {...register("name", {
                  onChange: (e) => onChangeInput("name", e.target.value),
                })}
              />
              {errors.name?.message && (
                <p className="text-danger">{errors.name?.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-subtitle">
              Alamat Karyawan<span className="text-danger">*</span>
            </label>
            <div>
              <input
                name="address"
                value={employee.address}
                type="text"
                className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                style={{
                  width: 330,
                }}
                {...register("address", {
                  onChange: (e) => onChangeInput("address", e.target.value),
                })}
              />
              {errors.address?.message && (
                <p className="text-danger">{errors.address?.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-subtitle">
              No.Rekening Bank<span className="text-danger">*</span>
            </label>
            <div>
              <input
                value={employee.account_number}
                type="text"
                maxLength={20}
                className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                style={{
                  width: 330,
                }}
                {...register("account_number", {
                  onChange: (e) =>
                    onChangeInput("account_number", e.target.value),
                })}
              />
              {errors.account_number?.message && (
                <p className="text-danger">{errors.account_number?.message}</p>
              )}
            </div>
          </div>
          <div className="flex flex-col mt-4">
            <label className="text-sm font-medium text-subtitle">
              Gaji Pokok(Rp.)<span className="text-danger">*</span>
            </label>
            <div>
              <input
                value={employee.salary}
                type="text"
                maxLength={8}
                pattern="\d*"
                className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                style={{
                  width: 330,
                }}
                {...register("salary", {
                  onChange: (e) => onChangeInput("salary", e.target.value),
                })}
              />
              {errors.salary?.message && (
                <p className="text-danger">{errors.salary?.message}</p>
              )}
            </div>
          </div>
          {isEdit && (
            <>
              <div className="flex flex-col mt-4">
                <label className="text-sm font-medium text-subtitle">
                  Jam Lembur
                </label>
                <div>
                  <input
                    value={employee.overtime}
                    onChange={(e) => onChangeInput("overtime", e.target.value)}
                    type="text"
                    maxLength={1}
                    pattern="\d*"
                    className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                    style={{
                      width: 330,
                    }}
                  />
                </div>
              </div>
              <div className="flex flex-col mt-4">
                <label className="text-sm font-medium text-subtitle">
                  Gaji Diterima(Rp.)
                </label>
                <div>
                  <input
                    value={employee.salary_received}
                    type="text"
                    disabled
                    maxLength={11}
                    pattern="\d*"
                    className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
                    style={{
                      width: 330,
                    }}
                  />
                </div>
              </div>
            </>
          )}
        </form>
        <div className="flex flex-col justify-center mt-9 items-center">
          <button
            onClick={handleSubmit(handleCreateAndUpdateEmployee)}
            className=" w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
          >
            {isEdit ? "Edit" : "Tambahkan"}
          </button>
        </div>
      </div>
    </div>
  );

  return (
    <div>
      <div
        className="mycontainer mobile:mycontainerfull py-7 gap-x-7 grid"
        style={{
          gridTemplateColumns: "1.2fr 5fr",
        }}
      >
        <div className="mt-20">
          <SideMenu />
        </div>
        <div className="mt-20">
          <div className="rounded-lg shadow border __montserat-text border-gray-200 bg-white p-5">
            <div className="mb-11">
              <div className="flex justify-between items-center border-b-2 border-gray-200 pb-4">
                <div>
                  <div className="font-semibold"> Data Karyawan </div>
                </div>
                <button
                  onClick={() => setHandleModal(true)}
                  className="ml-2 bg-gray-800 flex justify-between hover:text-white transition hover:border-gray-800 items-center text-sm font-medium text-gray-100 py-2 px-4 border rounded-full"
                >
                  Tambah Data Karyawan
                  <span>
                    <BsPlusLg className="ml-2 text-sm" />
                  </span>
                </button>
              </div>
              <div className="mt-8">
                <Tabel
                  column={column}
                  datas={datas}
                  handleModalDetail={handleModalDetail}
                  handleDeleteEmployee={handleDeleteEmployee}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={handleModal}
        component={AddItem}
        handleClose={handleModalClose}
      />
    </div>
  );
};

export default EmployeePage;
