import React from 'react'
import { Routes as Paths, Route as Path } from 'react-router-dom'
import Home from './home'
import NotFound from './notFound'

const Routes = () => {
   return (
      <Paths>
         <Path exact path="/" element={<Home />} />
         <Path path="*" element={<NotFound />} />
      </Paths>
   )
}

export default Routes