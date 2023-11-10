import React from 'react'
import { BallCanvas } from './canvas'
import { SectionWrapper } from '../hoc'
import { technologies } from '../constants'
import {styles} from "../styles"


const Tech = () => {
  return (
    <div>
<p className={styles.sectionSubText}>Technology I've worked with.</p>

<h2 className={styles.sectionHeadText}>Technology.</h2>
    
  
    <div className='flex flex-row flex-wrap justify-center gap-10'>
    {technologies.map((technology) => (
      <div className='w-28 h-28' key={technology.name}> 
        <BallCanvas icon={technology.icon}/>
      </div>
    ))}
    </div> 
     </div>
  )
}

export default SectionWrapper(Tech, "")