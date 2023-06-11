import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import './Betbar.scss';

const Betbar = () => {
  const { betbarActive } = useSelector((state) => state);

  const slipCountStyles = {
    visibility: betbarActive.betList.length ? 'visible' : 'hidden',
  };

  return (
    <nav className='betbar'>
      <div className='container--widest'>
        <ul className='list betbar__list'>
          <li className='betbar__list-item'>
            <Link className='betbar__link' to='/'>
              <i className='fa-solid fa-house-chimney'></i>
            </Link>
          </li>
          <li className='betbar__list-item'>
            <a className='betbar__link' href='#'>
              Top
            </a>
          </li>

          <li className='betbar__list-item'>
            <Link className='betbar__link betslip__link' to='/betslip'>
              <p className='betslip__count' style={slipCountStyles}>
                {betbarActive.betList.length}
              </p>
              <p>Betslip</p>
            </Link>
          </li>

          <li className='betbar__list-item'>
            <Link className='betbar__link' to='/'>
              <p>Account</p>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Betbar;
