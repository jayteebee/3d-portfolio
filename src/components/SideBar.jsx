import React from 'react'
import {contactMe} from '../constants'


const SideBar = () => {
  return (
    <div>
        {contactMe.map((item, index) => (
            <div key={`contact-${index}`}>
                
            </div>
        ))}
    </div>
  )
}

export default SideBar