import React from 'react'
import { signIn } from 'next-auth/client'
import LoginButtonBox from './component/loginButtonBox'
const Signup = () => {
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column', height: '100vh' }}>
            <p style={{ fontSize: '3rem', fontWeight: '700' }}>Signup to your Data Center</p>
            <div style={{ display: 'flex', flexDirection: "column", alignItems: 'center', marginTop: '.75rem' }}>
                <LoginButtonBox handler={() => signIn('google', { callbackUrl: 'http://localhost:3000/dasboard' })} icon='./google.svg' text='signup with google' />

            </div>

        </div>
    )
}

export default Signup
