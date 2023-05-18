'use client'

import './auth.css'
import { Inter } from 'next/font/google'
import logo from '../../../public/Union.png'
import loginlotti from '../../../public/loginlotti.png';
import signinlotti from '../../../public/signinlotti.png';

import Image from 'next/image'
import AuthCard from '@/components/cards/authcard'
import {useRouter, usePathname} from "next/navigation"
import Link from "next/link"



import { useEffect, useState } from 'react'


const inter = Inter({ subsets: ['latin'] })

export const title = {
  title: 'auth view',
  description: 'some description text',
}


export default function RootLayout({ children }) {
  const newpathname = usePathname()

  const router = useRouter()

  const  [pathname, setPathname] = useState()
  

  useEffect(() => {

    setPathname(newpathname)

  })

  return (
    <html lang="en">
      <body className={inter.className}>
        <header className={'header-top'}>
          <div className={'header_top_inner'}>
            <Image
              src={logo}
              alt="Next.js Logo"
              width={48}
              height={48}
              priority
            />

            <Link href="/auth/login"><button className={'auth_base_button'} type='button'> Login </button></Link>
          </div>
        
        </header>

        <main className={'main'}>
          <AuthCard>
            {children}
          </AuthCard>
        </main>

        <div className={'loginlotti_image'}>
          {pathname !== '/auth/signin' ? <Image
                src={loginlotti}
                alt="Next.js Logo"
                priority
              />  :
              <Image
                src={signinlotti}
                alt="Next.js Logo"
                priority
              /> 
              }
            
        </div>
       
        <footer>

        </footer>
        </body>
    </html>
  )
}
