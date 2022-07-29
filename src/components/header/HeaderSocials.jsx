import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {BsGithub} from "react-icons/bs"
import {BsYoutube} from "react-icons/bs"
import {FiDribbble} from "react-icons/fi"


const HeaderSocials = () => {
    return (
        <div className="header__socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
            <a href="https://github.com" target="_blank"><BsGithub/></a>
            <a href="https://youtube.com" target="_blank"><BsYoutube/></a>
            <a href="https://dribble.com" target="_blank"><FiDribbble/></a>
            
        </div>
    )
}

export default HeaderSocials
