import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { Select, SvgIcon, Button } from '@mui/material';


export default function Header() {
    const [selectedOption, setSelectedOption] = React.useState('option1');
    const [userName, setUserName] = React.useState('James');
    const navItems = ['Store', 'Orders', 'Analytics'];
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" sx={{ backgroundColor: '#0b6e25', px: '3rem' }}>
                <Toolbar sx={{ mx: "3rem" }}>
                    <Typography
                        variant="h5"
                        noWrap
                        component="div"
                        sx={{ display: { xs: 'none', sm: 'block', fontWeight: 'bold' } }}
                    >
                        Reeco
                        {/* <SvgIcon>
                            {reecoLogo}
                        </SvgIcon> */}
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button key={item} sx={{ color: '#fff', ml: "3rem" ,textTransform: 'none'}}>
                                {item}
                            </Button>
                        ))}
                    </Box>
                    <Box sx={{ flexGrow: 1 }} />
                    <Box sx={{ display: { xs: 'none', md: 'flex' }, border: 'none' }}>
                        <IconButton size="large" aria-label="show 4 new mails" color="white">
                            <Badge
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                badgeContent={1} color="success">
                                <ShoppingCartOutlinedIcon />
                            </Badge>
                        </IconButton>
                        <Select
                            labelId="select-label"
                            id="select"
                            value={selectedOption}
                            label="Select Option"
                            onChange={setSelectedOption}
                            sx={{ color: "white", border: 'none', textDecoration: 'none' }}
                        >
                            <MenuItem value="option1">{"Hello, " + userName}</MenuItem>
                            <MenuItem value="option2">Logout</MenuItem>
                        </Select>

                    </Box>

                </Toolbar>

            </AppBar>

        </Box>
    );
}