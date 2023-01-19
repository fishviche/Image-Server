import React from "react";
import ItemListFile from "./ItemListFile";

const ListFiles = ({file}) => {
  return (
    <>
      <table className="mx-auto mt-10">
        <thead className="bg-white border border-blue-500">
          <tr>
            <th
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              #
            </th>
            <th
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Name
            </th>
            <th
              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
            >
              Action
            </th>
          </tr>
        </thead>
        <tbody>
            {(file.length == 0) ? (
            <tr className="bg-gray-100 border-b">
              <td className="px-6 py-3 whitespace-nowrap text-sm font-medium text-gray-900 text-center" colSpan={3}>
                No files uploaded yet
              </td>
            </tr>) : (file.map((el,index) => (
                <ItemListFile key={index} index={index} file={el}></ItemListFile>
            )))}
        </tbody>
      </table>
    </>
  );
};

export default ListFiles;
