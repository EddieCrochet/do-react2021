import {Fragment} from 'react';
import HeaderCartButton from './HeaderCartButton';
import mealImg from '../../assets/meals.jpg';
import classes from './Header.module.css';

const Header = props => {
    return (
     <Fragment>
         <header className={classes.header}>
             <h1>Meals with React!</h1>
             <HeaderCartButton onCluck={props.onShowCart}/>
         </header>
         <div className={classes["main-image"]}>
             <img src={mealImg} alt='a table full of varius delicious foods!'/>
         </div>
    </Fragment>
    )
}

export default Header;