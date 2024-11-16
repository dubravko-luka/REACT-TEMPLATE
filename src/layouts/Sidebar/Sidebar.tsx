import React, { useCallback, useEffect, useState } from 'react';
import { TypeMenu } from 'types/types';
import styles from './Sidebar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { menu } from 'utils/constants';

const Sidebar: React.FC = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [current, setCurrent] = useState<number>(-1);
  const location = useLocation();

  const handleActiveMenu = useCallback(() => {
    const currentPathname = location.pathname;
    menu.forEach((item: TypeMenu) => {
      if (item.to === currentPathname) {
        setCurrent(item.id);
        setShowMenu(false);
      }
    });
  }, [location.pathname]);

  useEffect(() => {
    handleActiveMenu();
  }, [handleActiveMenu]);

  return (
    <>
      {showMenu && <div onClick={() => setShowMenu(false)} className="backdrop fixed top-0 left-0 w-screen h-screen bg-black z-10 opacity-30" />}
      <aside className={`${styles.sidebar} z-20 h-full bg-sidebar min-w-sidebar p-3 pt-9 992:pt-0 992:pr-0  ${showMenu ? styles['show-menu'] : ''}`}>
        <nav className="h-full bg-white p-2 rounded-xl">
          <div className="grid gap-y-1">
            {menu.map((item: TypeMenu) => (
              <NavLink
                to={item.to}
                onClick={() => setCurrent(item.id)}
                className={`p-2 text-sidebar font-bold rounded-lg cursor-pointer hover:bg-sidebar hover:text-white transition-colors duration-500 ease-out ${
                  current === item.id ? 'bg-sidebar text-white' : ''
                }`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </nav>
        <img
          src={require('assets/images/resources/close-menu.png')}
          alt="icon-close-menu"
          className="992:hidden absolute top-2 right-2 w-4 h-4 cursor-pointer"
          onClick={() => setShowMenu(false)}
        />
      </aside>
      <img
        src={require('assets/images/resources/open-menu.png')}
        alt="icon-open-menu"
        onClick={() => setShowMenu(!showMenu)}
        className="992:hidden block fixed top-navigator-half -translate-y-2/4 left-6 z-10 w-5 h-5 cursor-pointer"
      />
    </>
  );
};

export default Sidebar;
