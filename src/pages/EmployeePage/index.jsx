import { useState } from "react";
import { BsPlusLg } from "react-icons/bs";
import SideMenu from "../../components/molecules/SideMenu";
import Modal from "../../components/molecules/Modal";
import Tabel from "../../components/molecules/Tabel";

const EmployeePage = () => {
  const [handleModal, setHandleModal] = useState(false);

  const AddItem = (
    <div className="px-10 py-6 bg-white max-w-max rounded-md __montserat-text">
      <h1 className="font-bold pt-4 text-2xl text-center">
        Tambah Data Karyawan
      </h1>

      <div className="mt-4">
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">
            ID Karyawan
          </label>
          <input
            disabled
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
        </div>
        <div class="mb-3 pt-0 flex flex-col">
          <label className="text-sm font-medium text-subtitle">
            Kode Karyawan
          </label>
          <input
            type="text"
            class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
            style={{ width: 330 }}
          />
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">
            Nama Karyawan
          </label>
          <div>
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">
            Alamat Karyawan
          </label>
          <div>
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">
            No. Rekening Bank
          </label>
          <div>
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 330 }}
            />
          </div>
        </div>
        <div className="flex flex-col mt-4">
          <label className="text-sm font-medium text-subtitle">
            Gaji Pokok (Rp.)
          </label>
          <div>
            <input
              type="text"
              class="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 330 }}
            />
          </div>
        </div>

        <div className="flex flex-col justify-center mt-9 items-center">
          <button className=" w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded">
            Tambahkan
          </button>
        </div>
      </div>
    </div>
  );

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
                  <div className="font-semibold">Data Karyawan</div>
                </div>
                <button
                  onClick={() => setHandleModal(true)}
                  className="ml-2 bg-gray-800 flex justify-between hover:text-white transition hover:border-gray-800 items-center text-sm font-medium text-gray-100 py-1.5 px-3 border rounded-full"
                >
                  Tambah Data Karyawan
                  <span>
                    <BsPlusLg className="ml-2 text-sm" />
                  </span>
                </button>
              </div>
              <div className="mt-8">
                <Tabel />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal
        isOpen={handleModal}
        component={AddItem}
        handleClose={() => setHandleModal(false)}
      />
    </div>
  );
};

export default EmployeePage;
