import {motion} from 'framer-motion';
import { styles } from '../style';
import { SectionWrapper } from '../hoc';
import {fadeIn,textVariant} from '../utils/motion';
import { testimonials } from '../constants';

const FeedbackCard=({ index,name,testimonial,designation,})=>(
<motion.div
    variants={fadeIn("","spring",index*0.5,0.754
    )}
    className=' bg-black-200 p-10 rounded-3xl sm:w-[320px] w-full'>
      <p className=' text-white font-black text-[48px]'>'</p>
      <div className=' mt-1'>
        <p className=' text-white tracking-wider text-[18px]'>
      {testimonial}
      </p>
      </div>
      <div className=' mt-7 flex justify-between items-center gap-1'>
        <div className=' flex-1 flex flex-col'>
          <p className=' text-white font-medium text-[16px]'>
            {name}
          </p>
          <p className=' mt-1 text-secondary text-[12px]'>
            {designation}
          </p>
        </div>
      </div>
</motion.div>
)

const Feedbacks = () => {
  return (
    <div className=' mt-12 bg-black-100 rounded-[20px]'>
      <div className={`${styles.padding}
       bg-tertiary rounded-2xl min-h-[300px]`}>
        <motion.div
        variants={textVariant}>
          <p className={styles.sectionSubText}>What I have done so far</p>
          <h2 className={styles.heroHeadText}>
            Education.
          </h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-20 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial,index)=>(
          <FeedbackCard
          key={testimonial.name}
          {...testimonial}/>
        ))}
      </div>

    </div>
  )
}

export default SectionWrapper(Feedbacks,"feedback")