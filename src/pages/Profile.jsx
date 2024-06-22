import React, { useState, useEffect } from 'react';
// import { FaUserCircle } from "react-icons/fa";
import { getPassenger } from '../services/api';

const Profile = () => {
  const [profileInfo, setProfileInfo] = useState({});

  useEffect(() => {
    const fetchProfileInfo = async () => {
      try {
        let profileData;

        profileData = await getPassenger();

        console.log(profileData)
        setProfileInfo(profileData);
      } catch (error) {
        console.error('Error fetching profile information', error);
      }
    };

    fetchProfileInfo();
  }, []);

  return (
    <article>
      <h1 className='text-4xl font-bold m-5'>Profile: Pasajero</h1>
      <section className='flex justify-center'>
        <ul className='list-disc'>
          <li id="profileNames" className='text-2xl'>{profileInfo.firstName + " " + profileInfo.lastName}</li>
          <li id='profileEmail' className='text-2xl'>{profileInfo.email}</li>
          <li id='profilePhone' className='text-2xl'>{profileInfo.phoneNumber}</li>
          <li id='profileTrips' className='text-2xl'><b>N° viajes:</b> {profileInfo.trips}</li>
        </ul>
      </section>
    </article>
  );
};

export default Profile;