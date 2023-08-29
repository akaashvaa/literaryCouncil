'use client'
import React from 'react'
import Image from 'next/image'
import { Button } from '@mui/material'
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
      className="w-full bg-[#000000] flex flex-col gap-5 justify-center items-center text-center p-10 text-footer font-light"
    >
      <div className="flex sm:flex-row flex-col  justify-between items-center gap-7 ">
        <p className=" text-white">
          For Any Queries<span className="px-2">:</span>{' '}
        </p>
        <div className="flex md:flex-row flex-col gap-10 ">
          {queries.map((querie, i) => (
            <SnackBar querie={querie} key={i} />
          ))}
        </div>
      </div>
      <div className=" flex gap-5 justify-center items-center">
        {contacts.map((contact) => (
          <Button key={contact.id}>
            <a
              href={contact.id === 'gmail' ? null : contact.url}
              target="_blank"
              rel="noopener"
              className="flex gap-2 justify-center items-center bg-bl-secondary p-3 rounded-md  }"
              onClick={contact.id === 'gmail' ? handleMailtoClick : null}
            >
              <Image src={contact.img} alt={contact.id} width={20} />
            </a>
          </Button>
        ))}
      </div>

      <h1 className="pt-3 ">&#169; 2023 Literary Council</h1>
    </footer>
  )
}
export default Contact
