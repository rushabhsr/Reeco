import * as React from 'react';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { useSelector } from 'react-redux';
import Link from '@mui/material/Link';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import { Box, Stack, Button } from '@mui/material';

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

export default function Breadcrumb() {
    const {order_id} = useSelector((state) => state.orders[0]);
    const breadcrumbs = [
        <Link underline="hover" key="1" color="inherit" href="/" onClick={handleClick}>
            Orders
        </Link>,
        <Typography key="3" color="text.primary">
            {/* {orderId} */}
            Order {order_id}
        </Typography>,
    ];

    return (
        <Stack sx={{ py: "1.5rem",px:"7.5rem" ,
        // borderBottom:"1px solid black"
        background:'white',
        boxShadow: '0px 4px 10px -2px rgba(0,0,0,0.2)', 
        }}>
            <Breadcrumbs
                separator={<NavigateNextIcon fontSize="small" />}
                aria-label="breadcrumb"
            >
                {breadcrumbs}
            </Breadcrumbs>

            <Stack direction={'row'}>
                <Typography sx={{ fontWeight: 'bold' }} key="3" color="text.primary">
                    {/* {orderId} */}
                    Order {order_id}
                </Typography>
                <Box sx={{ flexGrow: 1 }} />
                <Button sx={{ mr: '1rem', borderRadius: '99px',textTransform: 'none' }} color="success" variant="outlined">Back</Button>
                <Button sx={{ borderRadius: '99px', mr: '1rem',textTransform: 'none' }} color="success" variant='contained' defaultValue='Approve Order'>Approve Order</Button>
            </Stack>
        </Stack>
    );
}