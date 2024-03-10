import React from 'react'
import {Tilt} from 'react-tilt'
import {motion} from 'framer-motion';
import { styles } from '../style';
import { services} from '../constants/index.js';
import {fadeIn,textVariant} from '../utils/motion';
import {SectionWrapper} from '../hoc';


const ServiceCard = ({title,index,icon}) => {
  return(
    <Tilt className=" xs:w-[250px] w-full">
      <motion.div
       variants={fadeIn(" right","spring",0.5*index ,0.75)}
       className=" w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
        <div
        options={{
          max:45,
          scale:1,
          speed:450
        }}
        className=' bg-tertiary rounded-[20px] py- px-12 min-h-[280px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt={title} 
          className=" w-16 h-16 object-contain" />
          <h3 className=' text-white text-[20px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
  
}

const About = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>Introduction</p>
      <h2 className={styles.heroHeadText}>Overview</h2>
    </motion.div>
    <motion.p
    variants={fadeIn("","",0.1,0.1)}
    className=' mt-4 text-secondary text-17px max-w-3xl leading-[30px]'
    >I am an engineering undergraduate at Faculty of Engineering, University of
    Ruhuna. As a computer engineering undergraduate, I
    am dedicated to learn new technologies and follow new knowedge.
    I exited to use design and communication ability to develop create seamless and visually captivating user experience.
    Not not that, using my mathematical and problem solving skills I exited to experiment with AI and machine learning model with a
    creative manner.
    </motion.p>
    
        
        <div className=' mt-20 flex flex-wrap gap-10'>
          {services.map((service,index)=>(
            <ServiceCard key={service.title} index={index} {...service}/>
          ))}
         </div>
    </>
   
  )
}

export default SectionWrapper(About,"about")