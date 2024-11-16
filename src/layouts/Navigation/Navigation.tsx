import React from 'react';
import styles from './Navigation.module.css';

const Navigation: React.FC = () => {
  return (
    <header className="p-3 h-navigator bg-navigator">
      <div className="navigation h-full bg-white sticky top-0 z-10 flex justify-between items-center gap-2 rounded-xl p-2">
        <div className="flex items-center justify-center gap-3 992:pl-2 pl-9">
          <p className="uppercase font-bold tracking-widest">Logo</p>
        </div>
        <div className={`user-info ${styles['user-info']} relative `}>
          <div className="w-6 h-6 rounded-full overflow-hidden border border-solid border-black">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png" alt="user_info" className="avatar object-cover" />
          </div>
          <div className={`user-info-popup ${styles['user-info-popup']} flex flex-wrap content-between gap-y-2`}>
            <p className="w-full text-sm text-white text-center uppercase font-bold">John Doe</p>
            <button className="w-full text-white bg-red-600 hover:bg-red-700 rounded-md py-1">Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
