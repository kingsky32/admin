import React from 'react';
import { gql, useQuery } from '@apollo/client';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { TOKEN_STORE_KEY } from '#commons/defines';
import Login from '#pages/auth/login';
import Configs from '#pages/configs';
import { IRoute, IUser } from '#interfaces/index';
import withSuspense from '#components/withSuspense';
import Layout from '#components/Layout';
import HomePage from '#pages/index';
import LoadingPage from '#pages/loading';

interface RoutesData {
  routes: IRoute[];
}

interface MeData {
  me: IUser;
}

const GET_ROUTES = gql`
  query {
    routes {
      uri
      label
      icon
      parent {
        uri
        label
        icon
      }
    }
  }
`;

const ME = gql`
  query {
    me {
      id
      username
      email
      roles
    }
  }
`;

function App(): React.ReactElement {
  const routes = useQuery<RoutesData>(GET_ROUTES);
  const me = useQuery<MeData>(ME, { fetchPolicy: 'network-only', skip: !localStorage.getItem(TOKEN_STORE_KEY) });
  const loading = React.useMemo<boolean>(() => routes.loading || me.loading, [routes.loading, me.loading]);

  return (
    <Router>
      {loading ? (
        <LoadingPage />
      ) : (
        <Layout routes={routes.data?.routes ?? []}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/configs" element={<Configs />} />
            <Route path="/auth/login" element={me.data ? <Navigate replace to="/" /> : <Login />} />
          </Routes>
        </Layout>
      )}
    </Router>
  );
}

export default withSuspense(App);
