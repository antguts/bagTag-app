import React from 'react';
import { render } from 'react-dom';
import useStyles from './styles'

const Standings =()=>{

    const classes= useStyles();

    return(
        <div>
            <h1>Standings</h1>
            <div className={classes.container}>
            {/* First three places */}
                <div className={classes.firstP}>
                    <h1>1st</h1>
                </div>
                <div className={classes.twoThree}>
                    <div className={classes.second}>
                        <h1>2nd</h1>
                    </div>
                    <div className={classes.third}>
                        <h1>3rd</h1>
                    </div>
                </div>
            {/*Remaining places...[use function to populate]*/}
                <div className={classes.underThird}>
                    <div className={classes.lowerPlace}>4</div>
                    <div className={classes.lowerPlace}>5</div>
                    <div className={classes.lowerPlace}>6</div>
                </div>
                <div className={classes.underThird}>
                    <div className={classes.lowerPlace}>7</div>
                    <div className={classes.lowerPlace}>8</div>
                    <div className={classes.lowerPlace}>9</div>    
                </div>
            </div> {/*End container*/}
        {/*End main div*/}</div> 
    );
};

export default Standings;