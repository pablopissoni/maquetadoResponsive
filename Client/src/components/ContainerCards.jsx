import React from 'react'
import { Card } from './Card'

export const ContainerCards = () => {
  return (
    <section className='mt-6 md:flex md:flex-wrap md:place-content-between md:gap-x-4'>
    {/* <section className='sm:flex sm:place-content-between'> */}
        <Card/>
        <Card/>
        <Card/>

    </section>
  )
}
