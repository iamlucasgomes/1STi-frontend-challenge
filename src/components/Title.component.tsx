import React from 'react'

export default function Title(props: { title: string }) {
  const { title } = props
  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-5xl text-white mukta" >{title}</h1>
    </div>
  )
}