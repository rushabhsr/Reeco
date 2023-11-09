import React from 'react';
import { useSelector } from 'react-redux';
import { Stack, Typography, Divider } from '@mui/material';

const OrderSummaryPage = () => {
    const order = useSelector((state) => state.orders[0]);

    if (!order) {
        return null;
    }

    const totalAmount = order.order_details.reduce(
        (acc, product) => acc + product.price * product.quantity,
        0
    );

    const boldTextStyle = { fontWeight: 'bold' };

    return (
        <Stack direction='row' sx={{ justifyContent: 'space-around', textAlign: 'left', width: '75%', border: '1px solid rgba(0, 0, 0, 0.1)',background:'white', borderRadius: 2 }} p={2} mt={4} mx='auto'>
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>
                    Supplier
                </Typography>
                <Typography sx={boldTextStyle}>{order.supplier}</Typography>
            </Stack>
            <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>Shipping Date</Typography>
                <Typography sx={boldTextStyle} >{order.shipping_details}</Typography>
            </Stack>
            <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>Total</Typography>
                <Typography sx={boldTextStyle} >${totalAmount.toFixed(2)}</Typography>
            </Stack>
            <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>Category</Typography>
                <Typography sx={boldTextStyle} >{order.category}</Typography>
            </Stack>
            <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>Department</Typography>
                <Typography sx={boldTextStyle} >{order.department}</Typography>
            </Stack>
            <Divider orientation='vertical' sx={{ mx: 2 }} flexItem />
            <Stack pr={5} pl={2}>
                <Typography color='rgba(0, 0, 0, 0.38)' variant='subtitle2' sx={boldTextStyle}>Status</Typography>
                <Typography sx={boldTextStyle} >{order.status}</Typography>
            </Stack>
        </Stack>
    );
};

export default OrderSummaryPage;
