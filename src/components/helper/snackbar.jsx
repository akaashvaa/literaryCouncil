'use client'
import React, { useState } from 'react'
import { Snackbar, Button } from '@mui/material'
import Image from 'next/image'
import close from '@assets/close4.png'
export default function SnackBar({ content }) {
  const [open, setOpen] = useState(false)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }
    setOpen(false)
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setOpen(true)
    } catch (error) {
      alert('Error while copying content')
    }
  }

  return (
    <>
      <p className="cursor-pointer" onClick={handleClick}>
        {content}
      </p>
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        message="Copied"
        action={
          <Button color="inherit" size="small" onClick={handleClose}>
            <Image src={close} width={20} alt="close" />
          </Button>
        }
      />
    </>
  )
}
