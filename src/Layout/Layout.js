import { AppBar, MenuItem, Toolbar } from "@mui/material";
import { Box } from "@mui/system";
import { Link, Outlet, useLocation } from "react-router-dom";
import './Layout.css'


export default function Layout() {

    const currLocation = useLocation()
    console.log('Layout:', currLocation)

    

    return(
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense">
                <MenuItem>
                    <Link to='/' className='nav-link'>
                        Home
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='chuckjoke/'
                            className='nav-link'>
                        Chuck Norris Jokes
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='countries/'
                            className='nav-link'>
                        Countries
                    </Link>
                </MenuItem>
                <MenuItem>
                    <Link to='about/'
                            className='nav-link'>
                        about
                    </Link>
                </MenuItem>
                </Toolbar>
            </AppBar>

            <Outlet />
        </Box>
    )
    
}