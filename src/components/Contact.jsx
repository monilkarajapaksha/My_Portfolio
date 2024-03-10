import { useState,useRef } from "react";
import {motion} from 'framer-motion';
import emailjs from '@emailjs/browser';
import { styles } from "../style";
import { EarthCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { slideIn } from "../utils/motion";
//eMShq2WrmlPHoyyaF
//template_qqgc416
//service_dlxgm8c

const Contact = () => {
  const formRef=useRef();
  const [form,setFrom] =useState({
    name:'',
    email:'',
    message:'',
  });
  const [loading,setLoading]=useState(false);
  const handleChange=(e)=>{
    const{name,value}=e.target;

    setFrom({...form,[name]:value})
    }
  const handleSubmit =(e)=>{
    e.preventDefault();
    setLoading(true);
    emailjs.send('service_dlxgm8c',
    'template_qqgc416',
    {
      from_name:form.name,
      to_name:'Monilka Rajapaksha',
      from_email:form.meail,
      to_email:'monilkarajapaksha@gmail.com',
      message:form.message,
    },
    'eMShq2WrmlPHoyyaF'
    )
    .then(()=>{
      setLoading(false);
      alert('Thank you.I will get back to you as soon as possible');

      setFrom({
        name:'',
        email:'',
        message:'',
      })
    }, (error)=>{
      setLoading(false)
      console.log(error);
      alert('Something went wrong.')
    }
    )}
  return (
    <div className=" xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
      variants={slideIn('left',"tween",0.2,1)}
      className=" flex-[0.75] bg-black-100 p-8 rounded-2xl">
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.heroHeadText}>Contact.</h3>
        <form
           ref={formRef}
           onSubmit={handleSubmit}
           className=" mt-12 flex flex-col gap-8">
            <label	className=" flex flex-col">
              <span className=" text-white font-medium mb-4">
                Your name
              </span>
              <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder=" What is your name"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
               border-none font-medium"
              />
            </label>
            <label	className=" flex flex-col">
              <span className=" text-white font-medium mb-4">
                Your Email
              </span>
              <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder=" What is your email address"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
               border-none font-medium"
              />
            </label>
            <label	className=" flex flex-col">
              <span className=" text-white font-medium mb-4">
                Your Message
              </span>
              <textarea
              rows="7"
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder=" What do you want to say"
              className=" bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none
               border-none font-medium"
              />
            </label>
            <button 
            type="submit"
            className=" bg-tertiary py-3 px-8
             outline-none w-fit text-white font-bold
              shadow-md shadow-primary rounded-xl">
                {loading?'Sending..':'Send'}

            </button>
            Or Else
            <label	className=" flex flex-col">
              <span className=" text-white font-medium mb-4">
                Telephone Number- +94 71 574 4306
              </span>
            </label>
            <label	className=" flex flex-col">
              <span className=" text-white font-medium mb-4">
                Email- monilkarajapaksha@gmail.com
              </span>
            </label>

        </form>
        </motion.div>
        <motion.div
              variants={slideIn('right',"tween",0.2,1)}
              className=" xl: flex-1 xl:h-auto md:h-[550px] h-[350px]"
              >
          <EarthCanvas/>
        </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")