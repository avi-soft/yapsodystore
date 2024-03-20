// Import this page for make the signin page functionable (Main Page)
'use client'
import MidContainer from './ContainerSignIn';
import ClickBox from '../box-appear/ClickAppear';
import { useState } from 'react';
export default function SignIn() {

    const [show, setshow] = useState(false)   // apply this  function to show or close this component when click
    return (
        <ClickBox component={MidContainer} onClose={()=>setshow(false)}/>
    );
}
