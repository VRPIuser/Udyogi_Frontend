import React from "react";

const CustomTable = ({ tableData, tableClassName, tableStyles }) => {
  return (
    <table className="min-w-full divide-y divide-gray-200 ">
      <thead className="rounded-lg">
        <tr>
          {tableData.titles.map((title, index) => (
            <th
              key={index}
              className="px-6 py-3 text-center text-xs font-medium text-gray-400 uppercase tracking-wider"
            >
              {title}
            </th>
          ))}
        </tr>
      </thead>
      <tbody className="bg-white">
        {tableData.rows.map((row, rowIndex) => (
          <tr
            key={rowIndex}
            onClick={row.action}
            className="hover:bg-zinc-100 transition-all cursor-pointer  border-b border-gray-200"
          >
            {row.map((cell, cellIndex) => (
              <td
                key={cellIndex}
                className="px-2 py-2 whitespace-nowrap text-sm text-gray-600 font-medium text-center"
              >
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CustomTable;
