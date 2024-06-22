import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { fetchRides } from '../services/api'

const Rides = () => {
  const [data, setData] = useState([]);

  const getData = async() => {
    const response = await fetchRides(0);

    setData(response.data.content)

    console.log(response.data.content);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <>
      <h1>Rides</h1>
      {data.map((ride, index) => (
        <section key={index} className='bg-gray-600 m-2 p-4'>
          <div className='flex items-center'>
            <b className='ml-2'>Origen:</b>
            <p id='origin' className='ml-2'>{ride.originName}</p>
          </div>

          <div className='flex items-center'>
            <b className='ml-2'>Fecha Salida:</b>
            <p id='departure' className='ml-2'>{ride.departureDate}</p>
          </div>

          <div className='flex items-center'>
            <b className='ml-2'>Destino:</b>
            <p id='destination' className='ml-2'>{ride.destinationName}</p>
          </div>

          <div className='flex items-center'>
            <b className='ml-2'>Precio:</b>
            <p id='price' className='ml-2'>{ride.price}</p>
          </div>
        </section>
      ))}
    </>
  )
}

export default Rides

