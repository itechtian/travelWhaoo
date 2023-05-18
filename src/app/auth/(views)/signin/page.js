'use client'
import { useState, useEffect } from "react";
import Form from "@/components/forms/auth/form"
import FloatingLabelInput from "@/components/inputs/floatinglabelinput"
import Image from 'next/image'
import AccountSuccess from "../../../../../public/accountsucess.png"
import Link from "next/link"
import "../main.css"


export default function SignIn() {
    const [email, setEmail] = useState('');

    
    const [signupView, setsignupView] = useState(true);

    const [otpView, setOtpView] = useState(false);

    const [successView, setsuccessView] = useState(false);


    const handleNameChange = (e) => {
        setEmail(e.target.value);
    };

    // function tab() {
    //     function tab() {
    //         const inputs = document.querySelectorAll(".otp");
    //         const inputField = document.querySelector(".otp-div");
          
    //         let inputCount = 0;
    //         let finalInput = "";
          
    //         // Update input
    //         const updateInputConfig = (element, disabledStatus) => {
    //           element.disabled = disabledStatus;
    //           if (!disabledStatus) {
    //             element.focus();
    //           } else {
    //             element.blur();
    //           }
    //         };
          
    //         inputs.forEach((element) => {
    //           element.addEventListener("input", (e) => {
    //             e.target.value = e.target.value.replace(/[^0-9]/g, "");
    //             let { value } = e.target;
          
    //             if (value.length === 1) {
    //               updateInputConfig(e.target, true);
    //               if (inputCount <= 2) {
    //                 finalInput += value;
    //                 if (inputCount < 2) {
    //                   updateInputConfig(e.target.nextElementSibling, false);
    //                 }
    //               }
    //               inputCount += 1;
    //             } else if (value.length === 0) {
    //               if (inputCount === 0) {
    //                 updateInputConfig(e.target, false);
    //                 return false;
    //               }
    //               updateInputConfig(e.target, true);
    //               e.target.previousElementSibling.value = "";
    //               updateInputConfig(e.target.previousElementSibling, false);
    //               inputCount -= 1;
    //             } else if (value.length > 1) {
    //               e.target.value = value.slice(0, 1);
    //             }
    //           });
    //         });
          
    //         window.addEventListener("keydown", (e) => {
    //           if (inputCount > 3 && e.key === "Backspace") {
    //             finalInput = finalInput.slice(0, -1);
    //             updateInputConfig(inputField.lastElementChild, false);
    //             inputField.lastElementChild.value = "";
    //             inputCount -= 1;
    //           }
    //         });
          
    //         // Start
    //         const startInput = () => {
    //           inputCount = 0;
    //           finalInput = "";
    //           inputs.forEach((element) => {
    //             element.value = "";
    //           });
    //           updateInputConfig(inputField.firstElementChild, false);
    //         };
          
    //         window.addEventListener("load", startInput);
    //       }
          
    //       tab();
          
    //   }
      

    function tab(){
        //Initial references
const input = document.querySelectorAll(".otp");
const inputField = document.querySelector(".otp-div");
// const submitButton = document.getElementById("submit");
let inputCount = 0,
  finalInput = "";

//Update input
const updateInputConfig = (element, disabledStatus) => {
  element.disabled = disabledStatus;
  if (!disabledStatus) {
    element.focus();
  } else {
    element.blur();
  }
};

input.forEach((element) => {
  element.addEventListener("keyup", (e) => {
    e.target.value = e.target.value.replace(/[^0-9]/g, "");
    let { value } = e.target;

    if (value.length == 1) {
      updateInputConfig(e.target, true);
      if (inputCount <= 3 && e.key != "Backspace") {
        finalInput += value;
        if (inputCount < 3) {
          updateInputConfig(e.target.nextElementSibling, false);
        }
      }
      inputCount += 1;
    } else if (value.length == 0 && e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      if (inputCount == 0) {
        updateInputConfig(e.target, false);
        return false;
      }
      updateInputConfig(e.target, true);
      e.target.previousElementSibling.value = "";
      updateInputConfig(e.target.previousElementSibling, false);
      inputCount -= 1;
    } else if (value.length > 1) {
      e.target.value = value.split("")[0];
    }
    // submitButton.classList.add("hide");
  });
});

window.addEventListener("keyup", (e) => {
  if (inputCount > 3) {
    // submitButton.classList.remove("hide");
    // submitButton.classList.add("show");
    if (e.key == "Backspace") {
      finalInput = finalInput.substring(0, finalInput.length - 1);
      updateInputConfig(inputField.lastElementChild, false);
      inputField.lastElementChild.value = "";
      inputCount -= 1;
    //   submitButton.classList.add("hide");
    }
  }
});

const validateOTP = () => {
  alert("Success");
};

//Start
const startInput = () => {
  inputCount = 0;
  finalInput = "";
  input.forEach((element) => {
    element.value = "";
  });
    updateInputConfig(inputField.firstElementChild, false);
  
};

window.onload = startInput();

    }
      

    useEffect(() => {
        setTimeout(() => {
            tab()
        },500)
    })
      

    return(
        <div>
        { otpView ? 
        <Form title={'Almost done!'} subtitle={'Check your email for a confirmation code'}>
            <div>
                <form>
                <div class="">
                    <div class="otp-div">
                        <input type="password" maxlength="1" class="otp" disabled />
                        <input type="password" maxlength="1" class="otp" disabled />
                        <input type="password" maxlength="1" class="otp" disabled />
                        <input type="password" maxlength="1" class="otp" disabled />
                    </div>
                    </div>
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