export const COLUMNS=[
    {
        Header:'Id',
        Footer:'Id',
        accessor:'id'
        
    },
    {
        Header:'First Name',
        Footer:'first_name',
        accessor:'first_name'
    },
    {
        Header:'Last Name',
        Footer:'last_name',
        accessor:'last_name'
    },

    {
        Header:'Date of Birth',
        Footer:'date_of_birth',
        accessor:'date_of_birth'
    },

    {
        Header:'Country',
        Footer:'country',
        accessor:'country'
    },

    {
        Header:'Phone',
        Footer:'phone',
        accessor:'phone'
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