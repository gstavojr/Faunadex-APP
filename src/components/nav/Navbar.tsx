import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useAppSelector } from '../../hooks/useRedux';
import { albumLogout } from '../../redux/actions/album';

import { logout } from '../../redux/actions/auth';
import { resetProfile } from '../../redux/actions/user';
import { photoLogout } from '../../redux/actions/photo';
import { motion } from 'framer-motion';

export const Navbar = () => {
  const dispatch = useDispatch();
  const { userName } = useAppSelector((state) => state.auth);
  const onClick = () => {
    dispatch(resetProfile());
    dispatch(logout());
    dispatch(albumLogout());
    dispatch(photoLogout());
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark shadow-5-strong">
        <div className="container-fluid">
          <NavLink className="navbar-brand" to="/dashboard">
            <i className="fa-solid fa-paw me-2"></i>
            Faunadex
          </NavLink>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto">
              <li className="nav-item me-2">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/dashboard"
                >
                  {userName}
                </NavLink>
              </li>
              <motion.li className="nav-item me-2" whileHover={{ scale: 2 }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/profile"
                >
                  <i className="fa-solid fa-user"></i>
                </NavLink>
              </motion.li>
              <motion.li className="nav-item me-2" whileHover={{ scale: 2 }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/upload"
                >
                  <i className="fa-solid fa-upload"></i>
                </NavLink>
              </motion.li>
              <motion.li className="nav-item me-2" whileHover={{ scale: 2 }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/photo"
                >
                  <i className="fa-solid fa-photo-film"></i>
                </NavLink>
              </motion.li>
              <motion.li className="nav-item me-2" whileHover={{ scale: 2 }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/detect/text"
                >
                  <i className="fa-brands fa-readme"></i>
                </NavLink>
              </motion.li>
              <motion.li className="nav-item me-2" whileHover={{ scale: 2 }}>
                <NavLink
                  className={({ isActive }) =>
                    isActive ? 'nav-link active' : 'nav-link'
                  }
                  to="/chat/bot"
                >
                  <i className="fa-solid fa-comment-sms"></i>
                </NavLink>
              </motion.li>
            </ul>
            <ul className="navbar-nav d-flex">
              <li className="nav-item ">
                <button className="nav-link button-link" onClick={onClick}>
                  <i className="fa-solid fa-right-from-bracket me-2"></i>
                  Cerrar Sesión
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
