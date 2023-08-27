'use client'
import React from 'react'
import Image from 'next/image'
import gmail from '@assets/gmail2.png'
import SnackBar from '@council/components/helper/snackbar'
import { contacts, queries } from '../constants'

const Contact = () => {
  const handleMailtoClick = (e) => {
    e.preventDefault()
    const email = 'litcknit@gmail.com'
    const subject = ''
    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`
    window.location.href = mailtoUrl
  }

  return (
    <footer
      id="contact"
      className="w-full bg-[#000000] flex flex-col gap-5 justify-center items-center text-center p-10 text-[rgb(207,206,206)] font-light"
    >
      <div className="flex justify-between items-center flex-row gap-7">
        <p>For Any Queries </p> <span>:</span>
        <div className="flex gap-10 ">
          {queries.map((querie) => (
            <div key={querie.id} className="flex  gap-2  items-center">
              <p>{querie.position}</p>
              <span>:</span>
              <div>
                <SnackBar content={querie.contactNo} />
              </div>
            </div>
          ))}
        </div>
        <div className="flex gap-3 h-[20px] px-10">
          <p>
            Mail Us <span>:</span>
          </p>

          <Image
            src={gmail}
            alt="gmailIcon"
            className=" cursor-pointer"
            width={20}
            onClick={handleMailtoClick}
          />
        </div>
      </div>
      <div className=" flex w-[80%] sm:flex-row flex-col gap-5 justify-center items-center">
        <p>Get In Touch </p> <span>:</span>
        {contacts.map((contact) => (
          <a
            href={contact.id === 'gmail' ? '' : contact.url}
            className="flex gap-2 h-[20px] justify-center items-center"
            key={contact.id}
          >
            <Image src={contact.img} alt={contact.id} width={20} />
          </a>
        ))}
      </div>

      <h1 className="pt-3 font-light">
        {' '}
        &#169; 2023 <span className="px-3"> Literary Council </span>
      </h1>
    </footer>
  )
}
export default Contact
