import React, { useContext } from 'react'
import { UserContext } from '../../context/user.context'
import { Outlet } from 'react-router-dom';

export const Home = () => {
    const userContext = useContext(UserContext);
  return (
    <div>
        <h1>Welcome {userContext.userData?.user?.name}</h1>
        {/* <Outlet></Outlet> */}
    </div>
  )
}
