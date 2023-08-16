'use client'
import React from 'react'
import { branchRoute } from '../../constants'
import BranchHome from '../branchHome'

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
    <section className="mt-32 h-96 flex flex-col justify-between items-center">
      <BranchHome img={img} content={content} />

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
    </section>
  )
}
