import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Cart from '../Cart/Cart';
import styles from './NavBar.css';

class Nav extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const isHomePage = this.props.location.pathname === '/';
    const logo = isHomePage ? styles.lightLogo : styles.logo;
    const cart = isHomePage ? null : <Cart cart={this.props.cart} location={this.props.location.pathname} checkout={this.props.checkout} inCheckout={this.props.inCheckout}/>;
    const navbar = isHomePage ? styles.transparentNavbar : styles.navbar;
    console.log('NAVBAR JSX PROPS: ', this.props);
    return (
        <nav className={navbar}>
          <h1>
            <Link to="/" className={logo}>Beer.ly</Link>
          </h1>
          <ul>
            <li>
              {cart}
            </li>
          </ul>
        </nav>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.object.isRequired,
  cart: PropTypes.array
};

export default Nav;
