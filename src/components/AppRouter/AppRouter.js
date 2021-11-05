import React from "react";
import { useSelector } from "react-redux";
import { privateRoutes, publicRoutes } from "./routes";
import { Route, Switch, Redirect } from "react-router-dom";

const AppRouter = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return isAuth ? (
    <Switch>
      {privateRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to="/users" />
    </Switch>
  ) : (
    <Switch>
      {publicRoutes.map(({ path, Component }) => (
        <Route key={path} path={path} component={Component} exact={true} />
      ))}
      <Redirect to="/auth" />
    </Switch>
  );
};

export default AppRouter;
