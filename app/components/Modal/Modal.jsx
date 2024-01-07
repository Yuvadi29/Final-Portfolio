import { motion } from 'framer-motion';
import Image from 'next/image';


const ScaleAnimation = {
  initial: { scale: 0, x: "-50%", y: "-50%" },
  open: { scale: 1, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] } },
  closed: { scale: 0, x: "-50%", y: "-50%", transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] } },
}


const Modal = ({ modal, projects }) => {

  const { active, index } = modal;

  return (
    <>
      <motion.div variants={ScaleAnimation} initial={"initial"} animate={active ? "open" : "closed"} className=" h-[350px] w-[400px] absolute flex justify-center items-center overflow-hidden">
        <div className="h-[100%] w-[100%] absolute transition-all duration-500 ease-in-out cubic-bezier(0.76,0,0.24,1)" style={{ top: index * -100 + "%" }}>
          {
            projects.map((project, index) => {
              const { src, color } = project
              return <div className="h-[100%] w-[100%] flex justify-center items-center relative" style={{ backgroundColor: color }} key={`modal_${index}`}>
                <Image
                  src={`/images/${src}`}
                  width={300}
                  height={0}
                  alt="image"
                />
              </div>
            })
          }
        </div>
      </motion.div >
    </>
  )
}

export default Modal;
