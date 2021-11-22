import React, { Suspense } from 'react';
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom';
import { Login } from 'pages/index';
import Layout from 'layout/index';
import { useAppSelector } from 'store/index';
import { AppLoading } from 'components/index';

const Router: React.FC = () => {
  const token = useAppSelector(state => state.auth.token);

  return (
    <BrowserRouter>
      <Suspense fallback={<AppLoading />}>
        <Switch>
          <Route path="/login" exact component={Login} />
          <Route
            path="/"
            render={props => {
              // 不存在token
              if (!token) {
                return <Redirect to="/login" />;
              }

              return <Layout />;
            }}
          />
        </Switch>
      </Suspense>
    </BrowserRouter>
  );
};

export default React.memo(Router);
