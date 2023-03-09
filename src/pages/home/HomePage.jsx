import { Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './HomePage.css'
const HomePage = () => {
  return (
    <Button variant="contained" className='home-page'><Link className='home_link' to='/form/step-1'>Log in</Link></Button>
  )
}

export default HomePage