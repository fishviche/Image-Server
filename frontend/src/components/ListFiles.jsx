import React from "react";
import ItemListFile from "./ItemListFile";

const ListFiles = ({file}) => {
  return (
    <>
      <table>
        <thead className="bg-white border-b">
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
            {file.map((el,index) => (
                <ItemListFile key={index} index={index} file={el}></ItemListFile>
            ))}
        </tbody>
      </table>
    </>
  );
};

export default ListFiles;
