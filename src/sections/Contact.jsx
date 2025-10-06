import React from 'react'
import TitleHeader from '../components/TitleHeader'
import ContactModel from '../components/ContactModel'
import EmailButton, { CsvButton } from '../components/EmailButton'

const Contact = () => {
  return (
    <section id="contact" className='flex-center flex-col mt-0 mb-0 pb-0'>
        <div className='contact-layout mb-0 pb-0'>
        <div className="flex flex-col md:flex-row md:justify-between justify-center items-center w-screen md:px-20 px-5 mb:0 pb-0">
                <div className='flex flex-col gap-2  lg:ml-[5%] lg:mb-[10%] w-screen md:items-start items-center'>
                    <div className='contact-text my-0 py-0'>
                    <p className="text-white-50 sm:text-lg text-sm relative z-10 pointer-events-none mb-0">
                        If you'd like to learn more
                    </p>
                    </div>
                    <div className='contact-text my-0 py-0'>
                        <h1>Send me an Email </h1>
                    </div>

                    <EmailButton
                        className='md:w-80 md:h-16 w-screen md:px-0 px-10 h-12'
                        id='button'
                        text='Send Email'
                    />
                    <p className="text-white-50 sm:text-lg text-sm">
                        or if you prefer..
                    </p>
                    <CsvButton
                        className='md:w-80 md:h-16 w-screen md:px-0 px-10 h-12'
                        id='button'
                        text='Download CSV'
                    />
                    <p className="text-white-50 sm:text-lg text-sm relative z-10 pointer-events-none mb-5">
                        Hope to hear from you soon!
                    </p>

                </div>

                </div>
                <figure className='lg:w-[50%] mt-0'>
                    <div className='contact-model-layout lg:mt-0 ml-0 mr-auto lg:mx-auto'>
                    <ContactModel />
                    </div>
                </figure>
            </div>
            <p className='text-sm'>©2025 Vincent Truong. All Rights Reserved </p>
    </section>
  )
}

export default Contact