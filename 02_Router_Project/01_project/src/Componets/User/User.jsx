import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='bg-red-400 text-xl p-2'>User :{userid} </div>
  )
}

export default User