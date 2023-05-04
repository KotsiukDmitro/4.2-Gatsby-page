import * as React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'
import { useState, useEffect } from 'react'
import {
    logoMain,
    content,

} from './layout.module.css'

import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

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
        <div>
            <header className='bg-light pt-4 border-bottom border-danger' >
                <div className='text-center fs-1 fw-bold text-primary mb-5'>{data.site.siteMetadata.title}</div>

                <Navbar bg="primary" variant="dark" >
                    <Container>
                        <Navbar.Brand href="#home">
                            <StaticImage className={logoMain} src='../images/logo.webp' alt='logo' />
                        </Navbar.Brand>
                        <Nav className="ml-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                            <Nav.Link href="#">Blog</Nav.Link>
                        </Nav>
                    </Container>
                </Navbar>

            </header>

            <main>
                {children}
            </main>
            <footer className=' bg-light border-top border-danger d-flex pt-3 pb-3 ps-5 fst-italic'>
                <h3 className='fs-5 text-primary'> *Усі права власності захищені <span className='text-dark ms-4'>{date}</span></h3>

            </footer>

        </div>
    )
}
export default Layout