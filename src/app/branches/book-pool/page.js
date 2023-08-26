'use client'
import React from 'react'
import { branchRoute } from '@council/constants/'
import SecBranchHome from '@council/components/helper/SecHomePage'

export default function BookPool() {
  const { img, content } = branchRoute.bookPool

  const handleMailtoClick = (e) => {
    e.preventDefault()
    const email = 'literaryCouncil@gmail.com'
    const subject = "Regarding Literary Council's Book Pool Inquiry"

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(subject)}`
    window.location.href = mailtoUrl
  }

  return (
    <>
      <SecBranchHome img={img} content={content} />

      <footer className="w-full absolute bottom-0 flex justify-center p-3 items-center bg-gray-200 text-center">
        If You want any of these book or the book pool related policies then u
        can mail on this :
        <span
          className="p-3 mx-3 bg-wh-f3 rounded-md  cursor-pointer"
          onClick={handleMailtoClick}
        >
          literaryCouncil@gmail.com
        </span>
      </footer>
    </>
  )
}
