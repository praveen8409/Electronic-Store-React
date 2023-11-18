import React from 'react'
import { Outlet } from 'react-router-dom'

export const Dashboard = () => {
  return (
    <div>
    <div>User dashboard</div>
    <Outlet></Outlet>
    </div>
  )
}
