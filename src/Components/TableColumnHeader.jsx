import React from 'react'

const TableColumnHeader = ({title}) => {
  return (
    <div className="flex justify-center items-center w-2/5 bg-blue-500 text-white p-4 rounded-lg shadow-md">
          <h1>{ title }</h1>
    </div>
  )
}

export default TableColumnHeader;
