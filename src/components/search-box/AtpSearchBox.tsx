import React, { FC, useState } from 'react';
import './AtpSearchBox.scss';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link/AtpLink';
import { IoSearchOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

type Props = {
  onClose: () => void;
};

export const AtpSearchBox: FC<Props> = ({ onClose }) => {
  const navigate = useNavigate();

  const [term, setTerm] = useState('');

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    onClose();
    navigate(`/search?term=${term}`);
  };

  return (
    <div className="atp-search-box">
      <ul className="atp-search-box__list">
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.MENSWEAR}</AtpLink>
        </li>
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.WOMENSWEAR}</AtpLink>
        </li>
        <li className="atp-search-box__list__link">
          <AtpLink to="/">{strings.EVERYTHING_ELSE}</AtpLink>
        </li>
      </ul>
      <form onSubmit={handleSubmit}>
        <div className="atp-search-box__input-container">
          <div className="atp-search-box__input-container__field">
            <input
              type="text"
              name="search"
              onChange={(event) => setTerm(event.target.value)}
              className="atp-input atp-search-box__input-container__input"
            />
            <button type="submit" className="atp-search-box__input-container__submit">
              <IoSearchOutline />
            </button>
          </div>
          <AtpButton
            onClick={onClose}
            isSecondary
            className="atp-search-box__input-container__close"
          >
            {strings.CLOSE}
          </AtpButton>
        </div>
      </form>
    </div>
  );
};

export default AtpSearchBox;
