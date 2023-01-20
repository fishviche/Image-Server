import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'

const ItemListFile = ({index,file}) => {
  return (
    <tr className="bg-gray-100 border-b">
        <td 
          className="px-6 py-1 text-sm font-medium text-gray-900 text-center">
          {index+1}
        </td>
        <td 
          className="text-sm text-gray-900 font-light px-6 py-4"
        >
          <p className='truncate w-40'>
            {file.name}
          </p>
        </td>
        <td 
          className="text-sm text-gray-900 font-light px-6 py-4 text-center">
          <FontAwesomeIcon icon={faTrashCan}/>
        </td>
    </tr>
  )
}

export default ItemListFile