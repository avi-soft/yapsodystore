'use client'                         
// Import this page for make the signin page functionable (Main Page)
import './style.css'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image';
import LoginImage from '@/../public/login-image.png'
import FormSignin from './SigninForm'
import Escapediv from './Escape';
export default function SignIn() {
    return (
        <div className="main-signin-page">
            <Escapediv/>    
            <div className="inside-main-signin">
                <div className='login-image' style={{ flex: 40, padding: 8 }}>
                    <Image src={LoginImage}
                        alt='image'
                        style={{ objectFit: 'cover', width: '100%', height: '100%' }}
                    />
                </div>
                <div className='login-form'>
                    <div className="login-title" >Login</div>
                    <FormSignin/>
                    <div className='createorbutton'>
                        <div className='linkforsignin'>
                            <Link href="https://staging.yapsody.com/ticketing/forgot-password?customer=true" style={{ color: '#a593e0' }}>{`Create/Forgot my Password`}</Link>
                        </div>
                        <div className='button-login'>
                            <button >Login</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
