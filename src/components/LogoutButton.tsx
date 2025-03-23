"use client"

import React, { useState } from 'react'
import { Button } from './ui/button';
import { Loader2 } from 'lucide-react';
import { toast } from "sonner"
import { CheckCircle, XCircle, Info } from "lucide-react";


export const LogoutButton = () => {
    const [loading, setLoading] = useState(false)
    const handleLogout = () => {
       setLoading(true)
       const errorMessage = null
        if(!errorMessage){
            toast("Logged Out", {
                icon: <CheckCircle className="text-green-500" />, // Green check icon
              });
        }
        setLoading(false)
    }
    return (
        <Button
            className='w-24'
            variant="outline"
            disabled={loading}
            onClick={handleLogout}
        >{loading ? <Loader2 className='animate-spin' /> : "Logout"}</Button>
    )
}
