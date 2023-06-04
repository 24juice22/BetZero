import React from 'react';
import { Link } from 'react-router-dom';
import mlb from '../../assets/mlb/mlb.png';
import nfl from '../../assets/nfl/nfl.png';
import nba from '../../assets/nba/nba.png';
import nhl from '../../assets/nhl/nhl.png';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='navbar__top'>
        <Link to='/' className='navbar__brand'>
          <h3 className='navbar__logo'>$Zer0</h3>
          <span>BetZer0</span>
        </Link>
        <div className='navbar__buttons'>
          <button className='btn'>Login</button>
          <button className='btn'>JOIN NOW</button>
        </div>
      </div>
      <div className='navbar__bottom'>
        <ul className='list navbar__list'>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <img
                className='navbar__icon'
                src={mlb}
                alt='Major League Baseball Logo'
              />
              <span>MLB</span>
            </Link>
          </li>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <img
                className='navbar__icon'
                src={nfl}
                alt='National Football League Logo'
              />
              <span>NFL</span>
            </Link>
          </li>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <img
                className='navbar__icon'
                src={nba}
                alt='National Basketball Association Logo'
              />
              <span>NBA</span>
            </Link>
          </li>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <img
                className='navbar__icon'
                src={nhl}
                alt='National Hockey League Logo'
              />
              <span>NHL</span>
            </Link>
          </li>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <i className='fa-solid fa-football navbar__icon'></i>
              <span>NCAAF</span>
            </Link>
          </li>
          <li className='navbar__list-item'>
            <Link className='navbar__link' to='/'>
              <i className='fa-solid fa-basketball navbar__icon'></i>
              <span>NCAAB</span>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
