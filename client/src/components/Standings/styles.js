import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        fontSize: '2vw',
        color: 'white',
        margin: 'auto',
        width: '80%',
        backgroundColor: 'lightBlue',
    },
    firstP: {
        width: '35%',
        border: '1px solid white',
        // textAlign: 'center',
        margin: 'auto',
    },
    twoThree: {
        // border: '1px solid white',
        display: 'flex',
        justifyContent: 'space-around',
    },
    second: {
        width: '35%',
        border: '1px solid white',
    },
    third: {
        width: '35%',
        border: '1px solid white',
    },
    underThird: {
        display: 'flex',
        // justifyContent: 'space-around',
    },
    lowerPlace: {
        backgroundColor: 'teal',
        border: '1px solid white',
        margin: '5px 1.5%',
        width: '33%',
        overflow: 'auto',
    },
})