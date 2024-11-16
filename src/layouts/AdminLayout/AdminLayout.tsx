import React from 'react';
import Sidebar from 'layouts/Sidebar/Sidebar';
import Navigation from 'layouts/Navigation/Navigation';
import Footer from 'layouts/Footer/Footer';
import RouterComponent from 'routes/router-component';
import RouterV1 from 'routes/v1/v1';

const AdminLayout: React.FC = () => {
  return (
    <RouterComponent>
      <div className="w-screen h-screen bg-gray-100">
        <Navigation />
        <div className="h-minus-navigator w-full flex relative">
          <Sidebar />
          <div className="bg-main pb-3 px-3 h-minus-navigator w-full">
            <div className="h-full w-full bg-white rounded-xl overflow-hidden">
              <main className="h-minus-footer p-2">
                <RouterV1 />
              </main>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </RouterComponent>
  );
};

export default AdminLayout;
