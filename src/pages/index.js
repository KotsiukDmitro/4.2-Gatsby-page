import * as React from 'react'
import { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
import "swiper/css/pagination";
import {
    carousel,
    carouselImg,

} from '../components/layout.module.css'

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const IndexPage = () => {

    const images = useStaticQuery(graphql`
    query {
        allFile {
            nodes {
                id
              childImageSharp {
                gatsbyImageData
              }
            }
          }
      }
    `)

    function handleSubmit() {
        alert('Данные успешно отправлены')
    }
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

    return (
        <Layout pageTitle="Home Page">
            <Container>

                <Carousel className='mt-5 border border-primary rounded'>
                    {images.allFile.nodes.map(node => (
                        <Carousel.Item key={node.id}>
                            <GatsbyImage image={getImage(node.childImageSharp.gatsbyImageData)} alt='slide' className="d-block w-100" />
                        </Carousel.Item>
                    ))}
                </Carousel>

                <Swiper className={carousel} navigation={true} modules={[Navigation, Pagination]} slidesPerView={3} pagination={true}>

                    <SwiperSlide><StaticImage src='../images/carousel/BMW.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/Lexus.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/Porsche.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/WV.jpg' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/Youtube.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/Youtube-logo.jpg' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                    <SwiperSlide><StaticImage src='../images/carousel/Instagram.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                </Swiper>

                <Accordion className=' mt-5 '>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Какая версия Tailwind CSS используется?1</Accordion.Header>
                        <Accordion.Body>
                            Все в пользовательском интерфейсе Tailwind спроектировано и разработано для последней версии Tailwind CSS, которая в настоящее время называется Tailwind CSS v 3.3 .
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Какие браузеры поддерживаются?</Accordion.Header>
                        <Accordion.Body>
                            Компоненты пользовательского интерфейса Tailwind предназначены для работы в последних стабильных версиях всех основных браузеров, включая Chrome, Firefox, Safari и Edge.
                            Мы не поддерживаем Internet Explorer 11.
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>

                <Form className='mt-5  mb-5 border border-primary rounded p-3 bg-light' onSubmit={handleSubmit}>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel
                                controlId="floatingName"
                                label="*Имя">
                                <Form.Control
                                    type="text"
                                    id="firstName"
                                    required
                                    className='mb-3'
                                />
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingNumber"
                                label="Возраст"
                            >
                                <Form.Control
                                    type="number"
                                    id="age"
                                    className='mb-3'
                                    min='18'
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Row className="g-2">
                        <Col md>
                            <FloatingLabel
                                controlId="floatingGender"
                                label="Пол"
                            >
                                <Form.Select className='mb-3'>
                                    <option>Мужской</option>
                                    <option>Женский</option>
                                </Form.Select>
                            </FloatingLabel>
                        </Col>
                        <Col md>
                            <FloatingLabel
                                controlId="floatingEmail"
                                label="Email">
                                <Form.Control
                                    type="email"
                                    id="email"
                                    required
                                    className='mb-3'
                                />
                            </FloatingLabel>
                        </Col>
                    </Row>
                    <Form.Label>Хобби:</Form.Label>
                    <div className="mb-3">
                        <Form.Check
                            inline
                            label="спорт"
                            name="group1"
                            type='checkbox'
                            id='sport'
                        />
                        <Form.Check
                            inline
                            label="музыка"
                            name="music"
                            type="checkbox"
                            id="music"
                        />
                        <Form.Check
                            inline
                            label="путешествие"
                            name="travel"
                            type='checkbox'
                            id="travel"
                        />
                    </div>
                    <Button as="input" type="submit" value="отправить" />

                </Form>

                <div className=" inset-0 flex items-center">
                    <p> Lorem ipsum – классический вариант условного бессодержательного текста, вставляемого в макет страницы.
                        <Button variant="primary" onClick={handleShow}>
                            Читать полностью ...
                        </Button>
                    </p>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton></Modal.Header>
                        <Modal.Body> Lorem ipsum – классический вариант условного бессодержательного текста, вставляемого в макет страницы. Lorem ipsum – это извращенный отрывок из философского трактата Цицерона «О пределах добра и зла», написанного в 45 году до нашей эры по-латыни.</Modal.Body>

                    </Modal>
                </div>
            </Container>
        </Layout >
    )
}

export const Head = () => <Seo title='Home Page' />

export default IndexPage



