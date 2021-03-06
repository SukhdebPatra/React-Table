// for date sorting import format from date function
// add a cell function in date to format

import {format} from 'date-fns'
import ColumnFilter from './FilterTable/ColumnFilter'

export const COLUMNS=[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id',
       // Filter:ColumnFilter,
        disableFilters:true// It will Disable the filter from Id 
        
    },
    {
        Header:'First Name',
        Footer:'first_name',
        accessor:'first_name',
      //  Filter:ColumnFilter
    },
    {
        Header:'Last Name',
        Footer:'last_name',
        accessor:'last_name',
       // Filter:ColumnFilter
    },

    {
        Header:'Date of Birth',
        Footer:'date_of_birth',
        accessor:'date_of_birth',
        Cell: ({ value }) => {
          return format(new Date(value), 'dd/MM/yyyy')
        
        },
       // Filter:ColumnFilter
    },

    {
        Header:'Country',
        Footer:'country',
        accessor:'country',
      //  Filter:ColumnFilter
    },

    {
        Header:'Phone',
        Footer:'phone',
        accessor:'phone',
       // Filter:ColumnFilter
    },

]

export const GROUPED_COLUMNS = [
    {
      Header: 'Id',
      Footer: 'Id',
      accessor: 'id'
    },
    {
      Header: 'Name',
      Footer: 'Name',
      columns: [
        {
          Header: 'First Name',
          Footer: 'First Name',
          accessor: 'first_name'
        },
        {
          Header: 'Last Name',
          Footer: 'Last Name',
          accessor: 'last_name'
        }
      ]
    },
    {
      Header: 'Info',
      Footer: 'Info',
      columns: [
        {
          Header: 'Date of Birth',
          Footer: 'Date of Birth',
          accessor: 'date_of_birth'
        },
        {
          Header: 'Country',
          Footer: 'Country',
          accessor: 'country'
        },
        {
          Header: 'Phone',
          Footer: 'Phone',
          accessor: 'phone'
        }
      ]
    }
  ]