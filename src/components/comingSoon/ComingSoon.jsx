import React from 'react'
import "./comingSoon.scss"
import { motion } from 'framer-motion'
import { smoothComeDown, smoothComeUp } from "../../utils/framerAnimations"


const ComingSoon = () => {
    return (
        <div className='comingSoon' {...smoothComeUp}>
            <motion.div className="header" {...smoothComeDown}>
                <h1>Coming Soon!</h1>
                <p>We are currently working hard on this page!</p>
            </motion.div>

            <motion.img
                {...smoothComeUp}
                src="/static/illustrations/illustrations_comingSoon.png" alt="comming soon"
            />

        </div>
    )
}

export default ComingSoon