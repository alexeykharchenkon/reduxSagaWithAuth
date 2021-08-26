import { AppBar, IconButton, Menu, MenuItem, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import { useState } from "react";
import { User } from "@common/types/types";
import { LRPopover } from "./LRPopover";
import { NavLink } from "react-router-dom";

interface NavBarProps {
    logout: any;
    login: any;
    register: any;
    user: User;
    isLogged: boolean;
}

export const Navbar = ({logout, login, register, user, isLogged} : NavBarProps) => {
    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [anchorElMenu, setAnchorElMenu] = useState<null | HTMLElement>(null);
    const handleProfileMenuOpen = (e: React.MouseEvent<HTMLElement>) => setAnchorElMenu(e.currentTarget);
    const handleMenuClose = () => setAnchorElMenu(null);
    const isMenuOpen = Boolean(anchorElMenu);

    const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>, login: boolean) => {
        setAnchorEl(e.currentTarget);
        setIsLogin(login);
    }
    const handleClose = () => setAnchorEl(null);

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorElMenu}
            anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
            id={menuId}
            keepMounted
            transformOrigin={{ vertical: 'top', horizontal: 'right' }}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={(e: any) => handleClick(e, true)}>
                Login
            </MenuItem>
            <MenuItem onClick={(e: any) => handleClick(e, false)}>
                Register
            </MenuItem>
            <MenuItem onClick={logout}>Logout</MenuItem>
        </Menu>
    );

    return(
        <div className="navbar">
            <AppBar position="fixed">
                <Toolbar>
                    <NavLink to="/" style={{textDecoration: 'none', color: '#ffffff', marginRight: '15px'}}>
                        <Typography variant="h6">
                            Main
                        </Typography>
                    </NavLink> 
                    <NavLink to="/profile" style={{textDecoration: 'none', color: '#ffffff'}}>
                        <Typography variant="h6">
                            Profile Page
                        </Typography>
                    </NavLink> 
                    <div style={{flexGrow: 1}}/>
                    {isLogged && <div style={{display: 'flex'}}>Hello {user.name}</div>}
                    <div style={{display: 'flex'}}>
                        <IconButton
                            edge="end"
                            aria-label="account of current user"
                            aria-controls={menuId}
                            aria-haspopup="true"
                            onClick={handleProfileMenuOpen}
                            color="inherit"
                        >
                            <AccountCircle />
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
            {renderMenu}
            <LRPopover 
                handleClose={handleClose}
                handleMenuClose={handleMenuClose}
                anchorEl={anchorEl}   
                login={login}
                register={register}
                isLogin={isLogin}
            />
        </div>
    );
}