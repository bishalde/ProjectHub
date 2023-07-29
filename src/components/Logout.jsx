import React from 'react'
import Cookies from 'js-cookie';


function Logout() {
    Cookies.remove('userToken')
    window.location.replace('/')

  return (
    <></>
  )
}

export default Logout