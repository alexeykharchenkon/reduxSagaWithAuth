import { Register } from "@components/Auth/Register";
import { Login } from "@components/Auth/Login";
import { Popover } from "@material-ui/core";

interface LRPopoverProps {
    handleClose: () => void;
    handleMenuClose: () => void;
    anchorEl: HTMLButtonElement | null;
    login: () => void;
    register: () => void;
    isLogin: boolean;
}

export const LRPopover = ({handleClose, anchorEl, login, register, isLogin, handleMenuClose}: LRPopoverProps) => {
    return (
        <Popover
            open={Boolean(anchorEl)}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
            transformOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
           {isLogin && <Login login={login} handleClose={handleClose} handleMenuClose={handleMenuClose}/> }
           {!isLogin && <Register register={register} handleClose={handleClose} handleMenuClose={handleMenuClose} /> }
        </Popover>
    );
}