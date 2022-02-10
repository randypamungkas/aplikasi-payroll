import React from "react";
import moment from "moment";
import { BsPencil, BsPrinterFill } from "react-icons/bs";
import { AiOutlineDelete } from "react-icons/ai";

const Tabel = ({ column, datas, handleDeleteEmployee, handleModalDetail }) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    {column.map((col, idx) => (
                      <th
                        key={idx}
                        scope="col"
                        className="px-6 py-3 text-center text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {col.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {(datas || []).map((data, idx) => (
                    <tr key={idx}>
                      {Object.values(column).map((col, id) => (
                        <td key={id} className="px-6 py-4 whitespace-nowrap">
                          {(() => {
                            switch (col.field) {
                              case "date":
                                return (
                                  <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    {data["salary_received"] !== 0
                                      ? moment(data["updatedAt"]).format(
                                          "D MMM YYYY"
                                        )
                                      : "-"}
                                  </div>
                                );

                              case "time":
                                return (
                                  <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    {data["salary_received"] !== 0
                                      ? moment(data["updatedAt"]).format(
                                          "HH:mm"
                                        )
                                      : "-"}
                                  </div>
                                );

                              case "salary":
                                return (
                                  <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    Rp{" "}
                                    {Intl.NumberFormat("en-US").format(
                                      data["salary"]
                                    )}
                                  </div>
                                );

                              case "salary_received":
                                return (
                                  <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    Rp{" "}
                                    {Intl.NumberFormat("en-US").format(
                                      data["salary_received"]
                                    )}
                                  </div>
                                );

                              case "action":
                                return (
                                  <div className="text-sm flex m-auto justify-center font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    <button
                                      onClick={() => null}
                                      className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
                                    >
                                      Cetak
                                      <span>
                                        <BsPrinterFill className="ml-2 text-sm" />
                                      </span>
                                    </button>
                                  </div>
                                );

                              case "process":
                                return (
                                  <div className="text-sm flex m-auto justify-center font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    <button
                                      onClick={() => handleModalDetail(data)}
                                      className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
                                    >
                                      Edit
                                      <span>
                                        <BsPencil className="ml-2 text-sm" />
                                      </span>
                                    </button>
                                    <button
                                      onClick={() =>
                                        handleDeleteEmployee(data.id)
                                      }
                                      className="ml-2 bg-transparent flex justify-between hover:text-textDefault transition hover:border-textDefault items-center text-sm font-medium text-subtitle py-1.5 px-3 border rounded-full"
                                    >
                                      Hapus
                                      <span>
                                        <AiOutlineDelete className="ml-2 text-sm" />
                                      </span>
                                    </button>
                                  </div>
                                );

                              default:
                                return (
                                  <div className="text-sm font-medium text-gray-900 max-w-px __text-elipsis-one-line">
                                    {data[col.field]}
                                  </div>
                                );
                            }
                          })()}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
