import React, { useMemo } from "react";
import { useTable,useSortBy,useGlobalFilter,useFilters } from "react-table";
import MOCK_DATA from "../MOCK_DATA.json";
import { COLUMNS } from "../Columns";
import "../table.css";
import GFilter from "./GFilter";

const GlobalFilter = () => {
  const columns = useMemo(() => COLUMNS, []);
  const data = useMemo(() => MOCK_DATA, []);

  const { getTableProps, getTableBodyProps, headerGroups, rows, 
    state, prepareRow,setGlobalFilter ,} =
    useTable({
      columns,
      data,
    },useGlobalFilter,useFilters);//Filter hook use global filer 

    const {globalFilter}=state

  return (
    <>
    <GFilter filter={globalFilter} setFilter={setGlobalFilter}/>

    <table{...getTableProps()}>
                <thead>
                    {
                        headerGroups.map((headerGroups) => (
                            <tr {...headerGroups.getFooterGroupProps()}>
                                {
                                    headerGroups.headers.map((column) => (
                                        <th{...column.getHeaderProps()}>{column.render('Header')}
                                        <div>{column.canFilter ? column.render('Filter'):null}</div>
                                        </th>
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
            </table>
     
    </>
  );
};

export default GlobalFilter;
