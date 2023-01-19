import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ItemListFile = ({index,file}) => {
    console.log(file);
  return (
    <tr className="bg-gray-100 border-b">
        <td className="px-6 py-1 whitespace-nowrap text-sm font-medium text-gray-900">
        {index+1}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
        {file.name}
        </td>
        <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
            <FontAwesomeIcon icon={faTrashCan}/>
        </td>
    </tr>
  )
}

export default ItemListFile