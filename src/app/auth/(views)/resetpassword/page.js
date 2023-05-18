'use client'
import { useState } from "react";
import Form from "@/components/forms/auth/form"
import FloatingLabelInput from "@/components/inputs/floatinglabelinput"


export default function ForgotPassword() {
    const [email, setEmail] = useState('');

    const handleNameChange = (e) => {
        setEmail(e.target.value);
    };

    return(
        <Form title={'Reset Password'} subtitle={'We would send a password reset link to your email'}>
            <div>
                <form>
                    <FloatingLabelInput label="Email" value={email} onChange={handleNameChange} />
                    <button style={{'background':'#891189', 'width':'100%','height':'56px','border':'none', 'borderRadius':'3px','color':'#FFFFFF','fontSize':'16px'}}> Send password reset link to email </button>
                </form>
            </div>
        </Form>
    )
}