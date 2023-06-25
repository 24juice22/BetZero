import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addWager } from '../../redux/betbarActive';

const SlipForm = ({ price, id }) => {
  const [wagerAmount, setWagerAmount] = useState('');
  const [popup, setPopup] = useState(false);
  const { betbarActive } = useSelector((state) => state);
  const dispatch = useDispatch();

  function winAmount(bet) {
    return price < 0
      ? (Math.round((bet / Math.abs(price)) * 100 * 100) / 100).toFixed(2)
      : (Math.round((bet / 100) * price * 100) / 100).toFixed(2);
  }

  function handleChange(event) {
    if (!popup) {
      let splitValue = event.target.value.toString().split('');
      console.log(splitValue);
      if (splitValue[splitValue.length - 4] === '.') {
        splitValue.pop();
        let joinedValue = Number(splitValue.join('')).toFixed(2);
        setWagerAmount(joinedValue);
        const payload = {
          betAmount: Number(joinedValue),
          winAmount: Number(winAmount(joinedValue)),
          id: id,
        };
        dispatch(addWager(payload));
      } else {
        setWagerAmount(event.target.value);
        const payload = {
          betAmount: Number(event.target.value),
          winAmount: Number(winAmount(event.target.value)),
          id: id,
        };
        dispatch(addWager(payload));
      }
    }
  }

  return (
    <>
      <form className='slip__form'>
        <label className='wager-label'>Bet Amount $ </label>
        <input
          className='wager-input'
          type='number'
          name='wager'
          step='.01'
          placeholder='Amount'
          required
          value={wagerAmount}
          onChange={handleChange}
          autoComplete='off'
          id={id}
        />
      </form>
      <p className='wager-output'>
        You Will Win{' '}
        <span className='wager-output__amount'>
          ${winAmount(Number(wagerAmount))}
        </span>
      </p>
    </>
  );
};

export default SlipForm;
