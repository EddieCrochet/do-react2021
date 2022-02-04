import MealsSummary from "./MealsSummary";
import AvailableMeals from "./AvailableMeals";

import { Fragment } from 'react';

const Meals = () => {
    return (
    <Fragment>
        <AvailableMeals/>
        <MealsSummary/>
    </Fragment>
    );
}

export default Meals;