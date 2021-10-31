import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
  const {user,logout} = useAuth()
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand " href="/">
            <span className="text-warning fs-1 fw-bold">T</span>
            <span className="text-warning"><small>ra</small></span>
            <span className="text-danger fs-1 fw-bold">V</span><span className="text-danger"><small>elo</small>
              </span></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse   " id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/myOrders">My Orders</Link>
              </li>
            
              {user?.email?
                <>
              
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/dash">Dashboard</Link>
              </li>
              <li className="nav-item text-white" >
              <span className = "nav-link ">
              {user?.displayName}
              </span>
              </li>
              <li className="nav-item">
                <button onClick={logout} className = "btn btn-info">Logout</button>
              </li>
                </>
                :<>
                 <li className="nav-item">
                <Link className="nav-link  login " to="/login">Login</Link>
              </li>

                </>
              }
            </ul>

          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;