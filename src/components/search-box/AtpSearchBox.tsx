/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import './AtpSearchBox.scss';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link-atp/AtpLink';
import debounce from '../../utilities/debouncer';

type Props = {
  onClose: () => void;
};

type State = {
  term: string;
};

// eslint-disable-next-line react/display-name
export const AtpSearchBox = React.forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  class AtpSearchBox extends React.Component<Props, State> {
    state: State = {
      term: '',
    };

    debouncedChange = debounce((event: React.ChangeEvent<HTMLInputElement>) => {
      location.replace(`/search?term=${event.target.value}`);
    }, 500);

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      event.persist();
      // @ts-ignore false positive
      this.debouncedChange(event);
    };

    render() {
      const { onClose } = this.props;

      return (
        <div ref={ref} className="atp-search-box">
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
          <form>
            <div className="atp-search-box__input-container">
              <div className="atp-search-box__input-container__field">
                <input
                  type="text"
                  name="search"
                  onChange={this.handleChange}
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
    }
  }

  return <AtpSearchBox {...props} />;
});
