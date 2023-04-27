import React, { useEffect, useMemo, useState } from 'react'
import MaterialReactTable from 'material-react-table';
import { Api } from '../../constant/Api';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const Ticket = () => {
  const [user, setuser] = useState([]);

  useEffect(() => {

    const fetchData = async () => {

      try {

        let result
        const res = await fetch(Api.userList)
        result = await res.json();
        //console.log("res", result?.data);
        setuser(result?.data)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData();

  }, [])


  const data = [
    {

      details: 'Contact Email not Linked',
      name: {
        firstName: 'John',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"red",width:"35px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>HIGH</div>,
      action: <MoreVertIcon />
    },
    {

      details: 'Adding Images to Featured Posts',
      name: {
        firstName: 'Tom',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"#FEC400",width:"35px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>LOW</div>,
      action: <MoreVertIcon />

    },
    {

      details: 'When will I be charged this month?',
      name: {
        firstName: 'Henry',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"#29CC97",width:"65px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>NORMAL</div>,
      action: <MoreVertIcon />

    },
    {

      details: 'Payment not going through',
      name: {
        firstName: 'Sam',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"red",width:"35px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>HIGH</div>,
      action: <MoreVertIcon />

    },
    {

      details: 'Unable to add replies',
      name: {
        firstName: 'Jack',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"#29CC97",width:"65px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>NORMAL</div>,
      action: <MoreVertIcon />

    },
    {

      details: 'Referral Bonus',
      name: {
        firstName: 'Peter',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"#FEC400",width:"35px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>LOW</div>,
      action: <MoreVertIcon />

    },
    {

      details: 'How do I change my password?',
      name: {
        firstName: 'Ali',
        lastName: 'Doe',
      },
      Date: 'May 26, 2019',
      Priority: <div style={{background:"#FEC400",width:"35px",textAlign:"center",padding:'5px 10px',borderRadius:8,color:'white'}}>LOW</div>,
      action: <MoreVertIcon />

    },
    
  ];

  //should be memoized or stable
  const columns = useMemo(
    () => [
      {
        accessorKey: 'details', //access nested data with dot notation
        header: 'Ticket details',
      },
      {
        accessorKey: 'name.firstName',
        header: 'Customer name',
      },
      {
        accessorKey: 'Date', //normal accessorKey
        header: 'Date',
      },
      {
        accessorKey: 'Priority',
        header: 'Priority',
      },
      {
        accessorKey: `action`,
        header: '',
      },

    ],
    [],
  );


  return (
    <div>
      <MaterialReactTable
        columns={columns}
        data={data}
        enableColumnActions={false}
      />
    </div>
  )
}

export default Ticket