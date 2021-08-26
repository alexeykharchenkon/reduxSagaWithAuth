import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import Profile from "@components/Profile/Profile";
import { mapDispatchToProps, mapStateToProps } from "./initAppProps";

interface RequireAuthProps {
    isLogged: boolean;
    match: any;
}

const RequireAuth = ({ match: { path }, isLogged }: RequireAuthProps) => 
  !isLogged ? ( <Redirect to="/" />) : (
    <div>
      <Route path={`${path}`} component={Profile} />
    </div>
  );


export default connect(mapStateToProps, mapDispatchToProps)(RequireAuth);