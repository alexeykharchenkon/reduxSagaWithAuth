import { mapDispatchToProps, mapStateToProps } from '@services/initAppProps';
import { User } from '@common/types/types';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';

interface ProfileProps {
    user: User;
}

export const Profile = ({user} : ProfileProps) => {
  return (
    <div className="listMain">
      <Typography variant="h4">Hello {user?.name}</Typography>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile)