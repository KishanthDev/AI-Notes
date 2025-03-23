import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { shadow } from '@/app/styles/utils'

function Header() {
  return (
    <header className='relative flex h-24 w-full items-center justify-between bg-popover px-3 sm:px-8'
    style={{
        boxShadow:shadow
    }}>
        <Link href="">
        <Image src="/goatius.png"  width={60} height={60} alt='logo' className='rounded-full' priority/></Link>
    </header>
  )
}

export default Header