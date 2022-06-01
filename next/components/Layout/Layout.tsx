import React, { FC } from 'react'
import { Header } from '@components/Header'
import { Footer } from '@components/Footer'
import { Contact } from '@components/Contact';
import { ILayout } from './Layout.d';

export const Layout: FC<ILayout> = ( { children } ) => {
  return (
    <>
      <Header/>
      {children}
      <Contact/>
      <Footer/>
    </>
  )
}
