import * as React from 'react';
import { useState } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import Stack from '@mui/material/Stack';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { setOrders } from '../redux/orderSlice';


export default function StickyHeadTable() {
  const order = useSelector((state) => state.orders[0]);
  const dispatch = useDispatch()
  const [status, setStatus] = useState(new Array(8).fill("na"));
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  if (!order) {
    return null
  }
  const columns = [
    { id: 'name', label: 'Product Name', align: 'center', },
    { id: 'brand', label: 'Brand Name', },
    {
      id: 'price',
      label: 'Price',
      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'quantity',
      label: 'Quantity',

      align: 'left',
      format: (value) => value.toLocaleString('en-US'),
    },
    {
      id: 'total',
      label: 'Total',

      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'status',
      label: 'Status',

      align: 'left',
      format: (value) => value.toFixed(2),
    },
    {
      id: 'operation',
      label: '',
      align: 'left',
      format: (value) => value.toFixed(2),
    },
  ];

  function createData(image, name, brand, price, quantity, status, id) {
    const total = price * quantity;
    return { image, name, brand, price, quantity, total, status, id, "operation": "operations" };
  }
  const rows = [];
  order?.order_details?.forEach(orderItem => {
    rows.push(createData(orderItem.img, orderItem.name, orderItem.brand, orderItem.price, orderItem.quantity, orderItem.status, orderItem.id))
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleApprove = (index) => {
    console.log(JSON.stringify(status));
    if (status[index] !== "a") {
      const newStatus=status
      newStatus[index] = "a"
      setStatus(newStatus)
    }
  }
  return (

    <Paper sx={{ width: '100%', overflow: 'hidden', mt: "2rem" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead >
            <TableRow sx={{ borderTopLeftRadius: '99px', border: '1px solid red' }}>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                // style={{ minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      // console.log(value);
                      return (
                        <TableCell key={column.id} >
                          <Stack direction={'row'} sx={{ alignItems: 'center', justifyContent: "center" }}>
                            {column.id === 'name' && (
                              <img style={{ height: '40px', marginRight: '1rem' }} src={row['image']} alt='productimage' />
                            )}
                            {column.id === 'operation' && (
                              <Stack direction='row' px={'1rem'} >
                                <Button><ClearOutlinedIcon sx={{ color: status[index] !== "missing" ? 'grey' : 'red' }}></ClearOutlinedIcon></Button>
                                <Button onClick={() => handleApprove(index)}><DoneOutlinedIcon sx={{ color: status[index] !== "a" ? 'grey' : 'green' }} /></Button>
                                <Button sx={{ textTransform: 'none', color: 'grey' }}>Edit</Button>
                              </Stack>
                            )}
                            {!(column.id === 'operation') && column.id === 'name' && value}
                          </Stack>
                          {!(column.id === 'operation') && !(column.id === 'name') && value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
