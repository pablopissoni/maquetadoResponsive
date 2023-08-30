import React from 'react'
import { NewArticle } from './NewArticle'

export const NewContainer = () => {
  return (
    <aside className='bg-VeryDarkBlue text-Off-white py-[28px] px-[20px]'>
        <h1 className='text-SoftOrange text-4xl font-bold'>New</h1>
        <NewArticle/>
        <NewArticle/>
        <NewArticle/>
    </aside>
  )
}
