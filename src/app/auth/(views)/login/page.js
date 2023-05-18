'use client'
import { useState } from "react";
import Form from "@/components/forms/auth/form"
import FloatingLabelInput from "@/components/inputs/floatinglabelinput"
import Link from "next/link"
import AuthRequest from "@/model/request/authrequest";

export default function Login() {
  const [model, setModel] = useState(AuthRequest.login);

  const handleInputChange = (e) => {
    setModel({[e.target.name]: e.target.value});
};


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(model)
  };

  return(
     <Form title={'Welcome, back'} subtitle={'Login, to your TravelWahoo dashboard'} footertext={'Forgot Password ?'}>
      <div>
        <h3 style={{'marginBottom':'39px'}}>Account does not exist. <span style={{'fontWeight':'500', 'color':'#891189'}}><Link href="/auth/signin">Create a new account</Link></span></h3>
        <form onSubmit={handleSubmit}>
          <FloatingLabelInput label="Email" value={model.email} onChange={handleInputChange} type={'email'} />
          <FloatingLabelInput label="Password" value={model.password} onChange={handleInputChange} type={'password'} />

          <button type="submit" style={{'background':'#891189', 'width':'100%','height':'56px','border':'none', 'borderRadius':'3px','color':'#FFFFFF','fontSize':'16px'}}> Login </button>
        </form>
      </div>
     </Form>
  )
}
