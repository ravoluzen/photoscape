import React from 'react';
import { motion } from 'framer-motion/dist/framer-motion';

const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('backdrop')){ // checks if the clicked element has the class name "backdrop"
            setSelectedImg(null); // sets the value of the selected image to null since the modal isn't triggered untill an image is clicked
        }
        
    }

    return(
        <motion.div 
        className='backdrop'
        onClick={handleClick}
        initial={{ opacity: 0}}
        animate={{ opacity: 1}}
        >
            <motion.img src={ selectedImg } alt="enlarged picture"
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
                />
        </motion.div>
    )
}

export default Modal;