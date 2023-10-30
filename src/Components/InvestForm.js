import React from 'react';
import classes from './InvestForm.module.css';
const InvestForm=(props)=>{
    const resetHandler=()=>{
        console.log("reset");
    }
    return(
        <div>
        <form className={classes.form} onSubmit={props.submitHandler}>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="current-savings">Current Savings ($)</label>
                <input type="number" id="current-savings" />
            </p>
            <p>
                <label htmlFor="yearly-contribution">Yearly Savings ($)</label>
                <input type="number" id="yearly-contribution" />
            </p>
            </div>
            <div className={classes['input-group']}>
            <p>
                <label htmlFor="expected-return">
                Expected Interest (%, per year)
                </label>
                <input type="number" id="expected-return" />
            </p>
            <p>
                <label htmlFor="duration">Investment Duration (years)</label>
                <input type="number" id="duration" />
            </p>
            </div>
            <p className={classes.actions}>
            <button onClick={resetHandler} type="reset" className={classes.buttonAlt}>
                Reset
            </button>
            <button type="submit" className={classes.button}>
                Calculate
            </button>
            </p>
        </form>
        </div>
    );
}
export default InvestForm;