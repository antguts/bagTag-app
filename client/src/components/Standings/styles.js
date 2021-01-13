import { colors } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles({
    container: {
        margin: 'auto',
        width: '80%',
        backgroundColor: 'blue',
    },
    firstP: {
        textAlign: 'center',
    },
    twoThree: {
        display: 'flex',
        justifyContent: 'space-around',
    },
    underThird: {
        display: 'flex',
        // justifyContent: 'space-around',
    },
    lowerPlace: {
        width: '53%',
        overflow: 'auto',
    },
})