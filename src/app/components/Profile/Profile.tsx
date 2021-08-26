import { mapDispatchToProps, mapStateToProps } from '@services/initAppProps';
import { User } from '@common/types/types';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { Navbar } from '@common/components/Navbar';

interface ProfileProps {
    authActions: any;
    user: User;
    isLogged: boolean;
}

const Profile = ({user, isLogged, authActions} : ProfileProps) => {
  const {login, logout, register} = authActions;
  return (
    <div className="main_container">
      <Navbar
        logout={logout}
        login={login}
        register={register}
        user={user}
        isLogged={isLogged}
      />
      <div className="main">   
        <Typography variant="h4">Hello {user?.name}</Typography>
      </div>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)