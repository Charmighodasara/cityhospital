import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useSnackbar } from 'notistack';
import { resetAlert } from '../../Redux/Action/Alert.action';

function Alert(props) {

    const alert = useSelector(state => state.alert)
    console.log(alert);
    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const dispatch = useDispatch()
    useEffect(() => {

        if (alert.text !== '') {
            enqueueSnackbar(alert.text,
                {
                    variant: alert.color,
                    anchorOrigin: {
                        vertical: 'top',
                        horizontal: 'right'
                    }
                })
        }
    }, [alert.text])

    setTimeout(() => {dispatch(resetAlert())}, 2000);

    return (
        <div>

        </div>
    );
}

export default Alert;