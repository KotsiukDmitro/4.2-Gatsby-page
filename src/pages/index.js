import * as React from 'react'
import { useState, Fragment } from 'react'
import Layout from '../components/layout'
import Seo from '../components/seo'
import { GatsbyImage, StaticImage, getImage } from 'gatsby-plugin-image'
import { Disclosure } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Dialog, Transition } from '@headlessui/react'
import { Link } from 'gatsby'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from "swiper";
import 'swiper/css'
import 'swiper/css/navigation'
// import 'swiper/css/scrollbar';
import "swiper/css/pagination";

import {
    slider,
    carousel,
    infoText,
    form,
    sliderImg,
    carouselImg,
    labelInput,
    formItem,
    btn,
    formInput,


} from '../components/layout.module.css'


const IndexPage = ({ data }) => {
    function handleSubmit() {
        alert('Данные успешно отправлены')
    }

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }

    // const image = getImage(data.mdx.frontmatter.hero_image)


    return (
        <Layout pageTitle="Home Page">
            <Swiper navigation={true} modules={[Navigation]} className={slider}>
                {/* <GatsbyImage
                        image={image}
                        alt={data.mdx.frontmatter.hero_image_alt}/> */}

                <SwiperSlide ><StaticImage src='../images/background/slide-1.avif' alt='logo' className={sliderImg}></StaticImage> </SwiperSlide>
                <SwiperSlide><StaticImage src='../images/background/slide-2.avif' className={sliderImg}></StaticImage> </SwiperSlide>
                <SwiperSlide><StaticImage src='../images/background/slide-3.avif' className={sliderImg}></StaticImage> </SwiperSlide>

            </Swiper>

            <Swiper className={carousel} navigation={true} modules={[Navigation, Pagination]} slidesPerView={3} pagination={true}>

                <SwiperSlide><StaticImage src='../images/BMW.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/Lexus.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/Porsche.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/WV.jpg' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/Youtube.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/Youtube-logo.jpg' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
                <SwiperSlide><StaticImage src='../images/Instagram.png' alt='logo' className={carouselImg}></StaticImage></SwiperSlide>
            </Swiper>

            <div className="w-full px-4 pt-16">
                <div className="mx-auto w-full max-w-md rounded-2xl bg-white p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Какая версия Tailwind CSS используется?</span>
                                    <ChevronDownIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Все в пользовательском интерфейсе Tailwind спроектировано и разработано для последней версии Tailwind CSS, которая в настоящее время называется Tailwind CSS v 3.3 .
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-2">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                    <span>Какие браузеры поддерживаются?</span>
                                    <ChevronDownIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-5 w-5 text-purple-500`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pt-4 pb-2 text-sm text-gray-500">
                                    Компоненты пользовательского интерфейса Tailwind предназначены для работы в последних стабильных версиях всех основных браузеров, включая Chrome, Firefox, Safari и Edge.
                                    Мы не поддерживаем Internet Explorer 11.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                </div>
            </div>


            <form className={form} onSubmit={handleSubmit}>
                <div className={formItem}>
                    <label className={labelInput}>*Имя:</label>
                    <input id='firstName' type='text' className={formInput} required></input>
                </div>
                <div className={formItem}>
                    <label className={labelInput}>Возраст:</label>
                    <input id='age' type='number' min='16' className={formInput}></input>
                </div>
                <div className={formItem}>
                    <label className={labelInput}>Пол:</label>
                    <select id='select'>
                        <option value='male'>Мужской</option>
                        <option value='famale'>Женский</option>
                    </select>
                </div>
                <div className={formItem}>
                    <label className={labelInput}> Хобби:</label>
                    <label><input type="checkbox" id='sport' name='sport' value='sport'></input>Спорт</label>
                    <label><input type="checkbox" id='music' name='music' value='music'></input>Музыка</label>
                    <label><input type="checkbox" id='travel' name='travel' value='travel' ></input>Путишествие</label>
                </div>

                <input type='submit' value='отправить' className={btn}></input>
            </form>


            <div className=" inset-0 flex items-center mt-[50px] ml-[50px] mb-[50px]">
                <p> Lorem ipsum – классический вариант условного бессодержательного текста, вставляемого в макет страницы. </p>
                <button
                    type="button"
                    onClick={openModal}
                    className="rounded-md px-4 py-2 text-sm font-medium text-red-500"
                >
                    Читать полностью ...
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Lorem ipsum
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <p className="text-sm text-gray-500">
                                            Lorem ipsum – классический вариант условного бессодержательного текста, вставляемого в макет страницы. Lorem ipsum – это извращенный отрывок из философского трактата Цицерона «О пределах добра и зла», написанного в 45 году до нашей эры по-латыни.
                                        </p>
                                    </div>

                                    <div className="mt-4">
                                        <button
                                            type="button"
                                            className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                                            onClick={closeModal}
                                        >
                                            Закрыть окно
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

        </Layout>
    )
}
// export const query = graphql`
//   query($id: String) {
//     mdx(id: {eq: $id}) {
//       frontmatter {
//         title
//         hero_image_alt
//         hero_image_credit_link
//         hero_image_credit_text
//         hero_image {
//           childImageSharp {
//             gatsbyImageData
//           }
//         }
//       }
//     }
//   }
// `

export const Head = () => <Seo title='Home Page' />

export default IndexPage





