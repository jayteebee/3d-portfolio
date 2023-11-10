import React from 'react'
import Tilt from "react-parallax-tilt"
import { motion } from 'framer-motion'
import { styles } from '../styles'
import { github } from '../assets'
import { SectionWrapper } from '../hoc'
import { projects } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'


const Works = () => {
  return (
    <div>
    <motion.div
    variants={textVariant()}>
    <p className={styles.sectionSubText}>My Work.</p>
    <h2 className={styles.sectionHeadText}>Projects.</h2>
    </motion.div>
    </div>
  )
}

export default SectionWrapper(Works, "")