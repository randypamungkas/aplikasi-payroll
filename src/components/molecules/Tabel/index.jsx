import React from "react";
// import { staticConst } from "../../static/staticConst";
// import { BsPencil } from "react-icons/bs";

const Tabel = ({ column }) => {
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
                        className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                      >
                        {col.name}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200"></tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tabel;
