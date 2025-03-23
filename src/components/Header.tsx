import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { shadow } from '@/app/styles/utils'
import { Button } from './ui/button';
import { DarkModeToggle } from './DarkmodeToggle';
import { LogoutButton } from './LogoutButton';

function Header() {
    const user = null;
    return (
        <header className="bg-popover relative flex h-24 w-full items-center justify-between px-3 sm:px-8"
            style={{
                boxShadow: shadow
            }}>
            <Link className="flex items-end gap-2" href="/">
                <Image src="/goatius.png" width={60} height={60} alt='logo' className='rounded-full' priority />
                <h1 className='flex flex-col pb-1 text-2xl font-semibold leading-6'> GOAT <span>notes</span></h1>
            </Link>
            <div className='flex gap-4'>
                {user ? (
                    <LogoutButton />
                ) : (
                    <>
                        <Button asChild>
                            <Link href="/sign-up">Sign Up</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/login">Login</Link>
                        </Button>
                    </>
                )
                }
                <DarkModeToggle />
            </div>
        </header>
    )
}

export default Header