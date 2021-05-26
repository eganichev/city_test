import React, { useState } from 'react'
import { makeStyles, TextField } from '@material-ui/core'
import { Autocomplete } from '@material-ui/lab';

import { ICity, ICountry, IPopulation } from '../../Redux/types/types'
import classes from './Main.module.css'


const useStyles = makeStyles({
    root: {
        '& .MuiAutocomplete-inputRoot': {
            padding: 0,
            paddingLeft: "8px"
        },
        '& .MuiInputLabel-outlined': {
            transform: 'translate(12px, 13px) scale(1)'
        },
        '& .MuiInputLabel-outlined.MuiInputLabel-shrink': {
            transform: 'translate(14px, -6px) scale(0.75)'
        }
    }
})

interface Props {
    countries: ICountry[]
    cities: ICity[]
    populace: IPopulation | null
    setCurrentCountry: (country: string | null) => void
    setCurrentCity: (city: string | null) => void 
}

const Main = ({ countries, cities, populace, setCurrentCountry, setCurrentCity }: Props)=> {
    const material = useStyles()
    const [countryInputValue, setCountryInputValue] = useState("")

    return(
        <div className={classes.main}>
            <div className={classes.container}>
                <h4>Autocomplete</h4>
                <div className={classes.field}>
                    <Autocomplete
                        classes={material}
                        options={countryInputValue.length > 3 ? countries.map((option) => option.country) : []}
                        onChange={(event, value) => setCurrentCountry(value)}
                        renderInput={(params) => (
                            <TextField
                                autoFocus
                                {...params}
                                onChange={e => setCountryInputValue(e.target.value)}
                                label="Country"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search'}}
                                
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <Autocomplete
                        classes={material}
                        options={cities.map((option) => option.city)}
                        onChange={(event, value) => setCurrentCity(value)}
                        renderInput={(params) => (
                            <TextField
                                {...params}
                                label="City"
                                variant="outlined"
                                InputProps={{ ...params.InputProps, type: 'search'}}
                                
                            />
                        )}
                    />
                </div>
                <div className={classes.field}>
                    <TextField
                        classes={{root: classes.input}}
                        label={populace ? populace.value : "Latest population count"}
                        variant="outlined"
                        disabled
                    />
                </div>
                <div className={classes.divider}></div>
            </div>
        </div>
    )
}

export default Main

