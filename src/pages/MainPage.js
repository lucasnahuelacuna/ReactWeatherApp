import React from 'react'
import { useHistory } from 'react-router-dom'
import Paper from '@material-ui/core/Paper'
import CityList from '../components/CityList'
import AppFrame from '../components/AppFrame'
import { getCities } from '../utils/serviceCities'

const MainPage = () => {
    const history = useHistory()

    const onClickHandler = React.useCallback((city, countryCode) => {
        //history.push() permite alterar la URL
        history.push(`/city/${countryCode}/${city}`)
    }, [history])
    
    return (
        <AppFrame>
            <Paper elevation={3}>
                <CityList
                    cities={getCities()} 
                    onClickCity={onClickHandler}/>
            </Paper>
        </AppFrame>
    )
}

export default MainPage
