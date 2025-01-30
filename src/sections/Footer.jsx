import React from 'react'
import style from './Footer.module.css'

function Footer() {
  return (
    <section id='footer' className={style.container}>
        <p>© {new Date().getFullYear()} Dhruv Pancholi <br />All rights reserved.</p>
    </section>
  )
}

export default Footer