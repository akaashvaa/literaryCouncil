'use client'
import React, { useState } from 'react'
import { Snackbar, Button } from '@mui/material'

export default function SnackBar({ querie }) {
  const [open, setOpen] = useState(false)

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(querie.contactNo)
      setOpen(true)
    } catch (error) {
      alert('Error while copying content')
    }
  }

  return (
    <Button
      key={querie.id}
      onClick={handleClick}
      className="flex gap-2 justify-center items-center bg-bl-secondary  text-footer p-3 rounded-md cursor-copy"
    >
      <p>{querie.position}</p>
      <span>:</span>
      <div>
        <p>{querie.contactNo}</p>
        <Snackbar
          open={open}
          autoHideDuration={800}
          onClose={() => setOpen(false)}
          message="Copied"
          className=" bg-bl-secondary"
        />
      </div>
    </Button>
  )
}
