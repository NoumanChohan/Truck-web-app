import React from 'react'
import Landing from './Landing'
import Cards from './Cards'
import Form from './Form'
import ContactFooter from './ContactFooter'

const ContactMain = () => {
    return (
        <div className='overflow-x-hidden'>
            <Landing />
            <Cards />
            <Form />
            {/* <ContactFooter /> */}
        </div>
    )
}

export default ContactMain
