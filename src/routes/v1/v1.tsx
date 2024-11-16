import React, { useCallback, useEffect, useState } from 'react';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import { v1 } from './config';
import Dashboard from 'pages/Dashboard/Dashboard';
import Setting from 'pages/Setting/Setting';
import Breadcrumb from 'components/common/Breadcrumb/Breadcrumb';
import { TypeBreadcrumb } from 'types/types';
import { menu } from 'utils/constants';

const V1: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [breadcrumbs, setBreadcrumbs] = useState<TypeBreadcrumb[]>([]);

  const validateRouter = useCallback(async () => {
    const currentPathname = location.pathname;

    let flag = false;
    await Object.entries(v1).map(([, path]) => {
      if (currentPathname === path) {
        flag = true;
      }
      return false;
    });

    if (!flag) navigate(v1.dashboard);

    setBreadcrumbs(menu.filter((item) => item.to === currentPathname) ?? []);
  }, [location, navigate]);

  useEffect(() => {
    validateRouter();
  }, [validateRouter]);

  return (
    <>
      <div className="pb-2">
        <Breadcrumb breadcrumbs={breadcrumbs} />
      </div>
      <Routes>
        <Route path={v1.dashboard} element={<Dashboard />} />
        <Route path={v1.settings} element={<Setting />} />
      </Routes>
    </>
  );
};

export default V1;
