import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useState, useEffect } from 'react'
import {
    container,
    header,
    headerLinks,
    navLinks,
    navLinkItem,
    navLinkText,
    siteTitle,
    logoMain,
    content,
    footer,
    text,
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    const [date, setDate] = useState("")
    function dateNow() {
        const now = new Date()

        function getNumber(i) {
            if (i < 10) {
                return ('0' + i)
            } else {
                return i
            }
        }

        const dayNow = getNumber(now.getDate()) + '.' + getNumber((now.getMonth() + 1)) + '.' + now.getFullYear() + ' ' + '-' + ' ' + getNumber(now.getHours()) + ':' + getNumber(now.getMinutes()) + ':' + getNumber(now.getSeconds())
        setDate(dayNow)
    }

    useEffect(() => {
        setInterval(dateNow, 1000)
    }, [date])


    return (
        <div className={container}>
            <header className={header}>
                <div className={siteTitle}>{data.site.siteMetadata.title}</div>
                <nav className={headerLinks}>
                    <Link to="/">
                        <StaticImage className={logoMain} src='../images/logo.webp' alt='logo' />
                    </Link>
                    <div>
                        <ul className={navLinks}>
                            <li className={navLinkItem}>
                                <Link to="/" className={navLinkText}>Home </Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="#" className={navLinkText}>About</Link>
                            </li>
                            <li className={navLinkItem}>
                                <Link to="#" className={navLinkText}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>

            <main className={content}>
                {children}
            </main>
            <footer className={footer}>
                <h3 className={text}> *Усі права власності захищені </h3>
                <span className='text-black-500'>{date}</span>
            </footer>

        </div>
    )
}
export default Layout