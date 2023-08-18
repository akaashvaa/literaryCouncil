'use client'
import React from 'react'
import Image from 'next/image'
import { contacts } from '../constants'
export default function Contact() {
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
      className="w-full bg-[#000000] flex justify-evenly items-center text-center p-10 text-white"
    >
      <div>
        <h1 className=" font-light">
          {' '}
          &#169; 2023 <span className="px-5"> All Right Reserved </span>
        </h1>
      </div>
      <div className="flex gap-12">
        {contacts.map((contact) => (
          <a
            href={contact.id === 'gmail' ? '' : contact.url}
            className="flex gap-2 h-[20px] justify-center items-center"
            key={contact.id}
            onClick={contact.id === 'gmail' ? handleMailtoClick : null}
          >
            <Image src={contact.img} alt={contact.id} width={20} />
            <p>{contact.title}</p>
          </a>
        ))}
      </div>
    </footer>
  )
}
