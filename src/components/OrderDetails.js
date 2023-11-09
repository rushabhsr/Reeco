
import React from 'react'
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { Box, Button, IconButton } from '@mui/material';
import LocalPrintshopOutlinedIcon from '@mui/icons-material/LocalPrintshopOutlined';
import OrderData from './OrderData';

function OrderDetails() {
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: '2rem',
        width: '100%',
        border: '1px solid #ccc',
        borderRadius: '99px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        right: 0, // Align the icon to the right
    }));

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            paddingLeft: theme.spacing(4), // Add padding to the left of the input
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    return (
        <Stack sx={{ justifyContent: 'space-around', textAlign: 'left', width: '75%', border: '1px solid rgba(0, 0, 0, 0.1)', background: 'white', borderRadius: 2 }} px={5} py={3} mt={4} mx='auto'>
            <Stack direction={'row'} sx={{ width: '100%' }}>
                <Search>
                    <SearchIconWrapper>
                        <SearchIcon />
                    </SearchIconWrapper>
                    <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                    />
                </Search>
                <Box sx={{ flexGrow: 1 }} />
                <Button sx={{ ml: '2rem', textTransform: 'none', color: 'green', border: '1px solid green', borderRadius: '99px' }} variant='outlined'>Add Item</Button>
                <IconButton sx={{ ml: '2rem', textTransform: 'none', color: 'green', borderRadius: '99px' }} variant='outlined'>
                    <LocalPrintshopOutlinedIcon />
                </IconButton>
            </Stack>
            <OrderData ></OrderData>
        </Stack>
    )
}

export default OrderDetails