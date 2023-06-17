import React from 'react'
import { NavLink as NL } from 'react-router-dom'

/**
 *
 * @param className string
 * @param to string
 * @param children {JSX.Element}
 * @returns {JSX.Element}
 * @constructor
 */
export const NavLink=({className,to,children})=>{
   const style={
      textDecoration:"none"
   }
   return (

      <NL className={({isActive})=> isActive===false ?className:`${className} active`} to={to} >{children} </NL>
   )
}