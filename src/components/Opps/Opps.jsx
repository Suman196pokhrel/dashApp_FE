import React from 'react'
import "./oops.scss"
import { motion } from 'framer-motion'
import { smoothComeDown, smoothComeUp } from "../../utils/framerAnimations"
import { Link } from 'react-router-dom'


const Opps = () => {
    return (
        <div className='oops'>
            <motion.div className="header" {...smoothComeDown}>
                <h1>Sorry, page not found!</h1>
                <p>Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be sure to check your spelling.</p>
            </motion.div>

            <motion.img
                {...smoothComeUp}
                src="/static/illustrations/illustration_404.png" alt="Bad Request"
            />

            <button><Link to={"/dashboard/app"}>Go to Home</Link></button>
        </div>
    )
}

export default Opps