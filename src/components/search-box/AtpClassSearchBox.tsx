/* eslint-disable react/display-name */
import React from 'react';
import { IoSearchOutline } from 'react-icons/io5';
import { Navigate } from 'react-router-dom';
import { strings } from '../../constants/strings';
import AtpButton from '../button/AtpButton';
import AtpLink from '../link-atp/AtpLink';
import './AtpSearchBox.scss';

type Props = {
  onClose: () => void;
};

type Ref = HTMLDivElement;

type SearchBoxState = {
  term: string;
};
export const AtpClassSearchBox = React.forwardRef<HTMLDivElement, Props>(({ ...props }, ref) => {
  class AtpClassSearchBox extends React.Component<Props, SearchBoxState, Ref> {
    constructor(props: Props) {
      super(props);
      this.state = {
        term: '',
      };
      this.handleChange = this.handleChange.bind(this);
    }

    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      this.setState({
        term: event.target.value,
      });
      setTimeout(() => {
        console.log(this.state.term);
      }, 3000);

      //   this.props.onClose();
    };

    render() {
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
                  value={this.state.term}
                  onChange={this.handleChange}
                  //  onChange={(event) => this.setState({ term: event.target.value })}
                  className="atp-input atp-search-box__input-container__input"
                />
                <button type="submit" className="atp-search-box__input-container__submit">
                  <IoSearchOutline />
                </button>
              </div>
              <AtpButton
                onClick={this.props.onClose}
                isSecondary
                className="atp-search-box__input-container__close"
              >
                {strings.CLOSE}
              </AtpButton>
            </div>
          </form>
          {/* {this.state.term && <Navigate to={`/search?term=${this.state.term}`} replace={true} />} */}
        </div>
      );
    }
  }
  return <AtpClassSearchBox {...props} />;
});
