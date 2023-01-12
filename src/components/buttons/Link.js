import React from 'react'
import { NavLink as NL } from 'react-router-dom'
export const NavLink=({className,to,sx,children})=>{
   const style={
      textDecoration:"none"
   }
   return (
      <NL style={style} sx={sx} className={className} to={to} >{children} </NL>
   )
}