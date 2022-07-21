import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES_PATH } from '../routes/routes';

export type UseRoutesReturn = {
  routes: {
    home: () => void;
  };
};

export function useRoutes(): UseRoutesReturn {
  let navigate = useNavigate();
  const routes = useMemo(
    () => ({
      home: () => {
        navigate(ROUTES_PATH.home.use);
      },
    }),
    [navigate]
  );

  return {
    routes,
  };
}
