import React, { useMemo } from 'react'
import { useTable } from 'react-table'
import MOCK_DATA from '../MOCK_DATA.json'
import { COLUMNS } from '../Columns'
import '../table.css'

const FootorTable = () => {
    const columns = useMemo(() => COLUMNS, [])
    const data = useMemo(() => MOCK_DATA, [])

    const tableInstance = useTable({
        columns,
        data
    })

    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow,footerGroups} = tableInstance
  return (
    <>
         <table{...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroups) => (
                            <tr {...headerGroups.getFooterGroupProps()}>
                                {
                                    headerGroups.headers.map((column) => (
                                        <th{...column.getHeaderProps()}>{column.render('Header')}</th>
                                    ))
                                }

                            </tr>

                        ))
                    }

                </thead>
                <tbody {...getTableBodyProps()}>
                    {
                        rows.map(row => {
                            prepareRow(row)
                            return (
                                <tr {...row.getRowProps
                                    ()}>
                                    {
                                        row.cells.map((cell) => {
                                            return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                                        })
                                    }

                                </tr>
                            )
                        })
                    }

                </tbody>
                <tfoot>
                {
                    footerGroups.map(footerGroups=>(
                        <tr{...footerGroups.getFooterGroupProps()}>{footerGroups.headers.map(column=>(
                            <td{...column.getFooterProps}>
                            {column.render('Footer')}</td>
                        ))}</tr>
                    ))
                }
                </tfoot>
            </table>
    </>
  )
}

export default FootorTable