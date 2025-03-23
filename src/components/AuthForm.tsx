"use client"
import { CardContent, CardFooter } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'
import { Button } from './ui/button'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

type props = {
  type: "login" | "signUp"
}

export const AuthForm = ({ type }: props) => {
  const loginForm = type = "login"
  const router = useRouter()

  const handleSubmit = () => {
    console.log("form Submitted");

  }

  const [isPending,startTransition] = useTransition()

  return (
    <form onSubmit={handleSubmit}>
      <CardContent className='grid w-full items-center gap-4'>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='email'>Email</Label>
          <Input
            id='email'
            type='email'
            placeholder='Enter your email'
            name='email'
            required
            disabled={isPending}
          />
        </div>
        <div className='flex flex-col space-y-1.5'>
          <Label htmlFor='password'>Password</Label>
          <Input
            id='password'
            type='password'
            placeholder='Enter your password'
            name='password'
            required
            disabled={isPending}
          />
        </div>
      </CardContent>
      <CardFooter className='mt-6 flex flex-col gap-6'>
        <Button className='w-full' disabled={isPending}>
          {isPending ? <Loader2 className='animate-spin'/> : loginForm ? "Login" : "Sign Up"}
        </Button>
        <p className='text-sm'>
          {loginForm ? "Don't have an account?" : "Already have an account?"}{" "}
          <Link href={loginForm ? "/signUp" : "/login"} className={`text-blue-500 hover:text-blue-700 ${isPending ? "pointer-events-none opacity-50" : ""}`} onClick={() => startTransition(() => router.push(loginForm ? "/signUp" : "/login"))}>
            {loginForm ? "Sign Up" : "Login"}
          </Link>
        </p>
      </CardFooter>
    </form>
  )
}
