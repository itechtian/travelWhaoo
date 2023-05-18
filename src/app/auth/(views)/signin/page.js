'use client'
import { useState } from "react";
import Form from "@/components/forms/auth/form"
import FloatingLabelInput from "@/components/inputs/floatinglabelinput"
import Image from 'next/image'
import AccountSuccess from "../../../../../public/accountsucess.png"
import Link from "next/link"

export default function SignIn() {
    const [email, setEmail] = useState('');

    
    const [signupView, setsignupView] = useState(true);

    const [otpView, setOtpView] = useState(false);

    const [successView, setsuccessView] = useState(false);


    const handleNameChange = (e) => {
        setEmail(e.target.value);
    };
    return(
        <div>
        { otpView ? 
        <Form title={'Almost done!'} subtitle={'Check your email for a confirmation code'}>
            <div>
                <form>
                    <button onClick={() => {setOtpView(false), setsuccessView(true)}}style={{'background':'#891189', 'width':'100%','height':'56px','border':'none', 'borderRadius':'3px','color':'#FFFFFF','fontSize':'16px'}}> Verify code </button>
                </form>
            </div>
        </Form> 
    : successView ?
        <Form title={'Hi {name}, your account is ready!'} subtitle={'Login to gain access  to your dashboard'}>
            <div>
                <form>
                    <div style={{'display':'flex','justifyContent':'center','alignItems':'center','marginBottom':'51px'}}>
                    <Image
                        src={AccountSuccess}
                        alt="Next.js Logo"
                        priority
                    /> 
                    </div>
                    <Link href="/auth/login"><button style={{'background':'#891189', 'width':'100%','height':'56px','border':'none', 'borderRadius':'3px','color':'#FFFFFF','fontSize':'16px'}}> Login to Dashboard</button></Link>
                </form>
            </div>
        </Form>:
        <Form title={'Create a new TravelWahoo Account'} subtitle={'To create an account, enter your full name and your work or personal email'}>
            <div>
                <form>
                    <FloatingLabelInput label="First Name" value={email} onChange={handleNameChange} type={'text'} />
                    <FloatingLabelInput label="Last Name" value={email} onChange={handleNameChange} type={'text'}/>
                    <FloatingLabelInput label="Email" value={email} onChange={handleNameChange} type={'email'}/>
                    <FloatingLabelInput label="Password" value={email} onChange={handleNameChange} type={'password'}/>
                    <button onClick={() => setOtpView(true)} style={{'background':'#891189', 'width':'100%','height':'56px','border':'none', 'borderRadius':'3px','color':'#FFFFFF','fontSize':'16px'}}> Get Started </button>
                </form>
            </div>
        </Form> 
        }
           
        </div>
    )
}