import React from 'react';

const TopButtons = ({setQuery}) => {
    const cities = [
        
        {
            id: 1,
            title: 'Rawalpindi'
        },
        {
            id: 2,
            title: 'Islamabad'
        },
        {
            id: 3,
            title: 'Lahore'
        },
        {
            id: 4,
            title: 'Karachi'
        },
        {
            id: 5,
            title: 'Multan'
        },
    ]

    return (
    <div className='flex items-center justify-around my-6'>
        {
            cities.map((city) =>(
                <button key={city.id} className='text-white text-lg font-medium' onClick={() => setQuery({q:city.title})}>{city.title}</button>
            ))
        }
    </div>
  )
}

export default TopButtons