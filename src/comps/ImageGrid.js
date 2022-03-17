import React from 'react';
import useFirestore from '../hooks/useFirestore';
import { motion } from 'framer-motion/dist/framer-motion';

const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images'); 

    return(
        <div className='img-grid'>
            { docs && docs.map(doc => ( // checks if there are documents present and maps each file in the document
                <motion.div className='img-wrap' key={doc.id}
                layout
                whileHover={{ opacity: 1 }}
                onClick={() => {
                    setSelectedImg(doc.url) // when an image is clicked, the url is fed in the setSelectedImg function to display in the modal component
                }}
                >
                    <motion.img src={doc.url} alt="uploaded pic"
                    initial={{ opacity: 0}}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1 }}
                    />
                </motion.div>
            ))}
        </div>
    )
}

export default ImageGrid;