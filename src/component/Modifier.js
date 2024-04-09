import React from 'react'
import { NavLink, useParams } from 'react-router-dom'


export default function Modifier({tache}) {
    const {id}=useParams();
    
    
  return (
    <div>
      <h2>hello word { id.tache }</h2>
      <NavLink to={"/"}>retour</NavLink> 
      </div>

)}