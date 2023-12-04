import React, { useState } from 'react';
import { UilSearch, UilLocationPoint } from '@iconscout/react-unicons';
import { toast } from 'react-toastify';


const Inputs = ({setQuery, units, setUnits}) => {
    const [city, setCity] = useState("");
    
    const handleSearchClick = () => {
        if(city !== '') setQuery({q : city})
    }

    const handleLocationClick = () => {
        if(navigator.geolocation){
            toast.info('Fetching users location')
            navigator.geolocation.getCurrentPosition((position) => {
                toast.success('Location fetched!')
                let lat = position.coords.latitude;
                let lon = position.coords.longitude;
                setQuery({
                    lat,
                    lon,
                })
            })
        }
    }

    const handleUnitChange = (e) => {
        const selectedUnit = e.target.name;
        if(units!== selectedUnit) setUnits(selectedUnit)
    }


    return (
        <div className='flex justify-center my-6'>
            <div className='flex w-3/4 items-center justify-center space-x-4'>
                <input
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder='Search...'
                    className='text-xl font-light p-2 focus:outline-none w-full shadow-xl capitalize placeholder:lowercase' />
                <UilSearch onClick = {handleSearchClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
                <UilLocationPoint onClick = {handleLocationClick} size={25} className='text-white cursor-pointer transition ease-out hover:scale-125' />
            </div>
            <div className='flex w-1/4 items-center justify-center'>
                <button name='metric' onClick={handleUnitChange} className='text-xl text-white font-light transition ease-out hover:scale-125'> °C </button>
                <p className='text-xl text-white mx-1'>|</p>
                <button name='imperial' onClick={handleUnitChange} className='text-xl text-white font-light transition ease-out hover:scale-125'> °F </button>

            </div>
        </div>
    )
}

export default Inputs;