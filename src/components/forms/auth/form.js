import {useRouter, usePathname} from "next/navigation"
import Link from "next/link"
export default function Form({title, subtitle, footertext, children}) {
    const router = useRouter()
    const name  = usePathname()
    return(
        <div className="form_wrapper">
            {/* form header */}
            <div className="form_wrapper_head">
                <h3 style={{'color':'#161616', 'fontSize':'24px','marginBottom':'8px'}}>{title}</h3>
                <span style={{'color':'#555555', 'fontSize':'14px'}}>{subtitle} </span>
            </div>

            <div>{children}</div>


             {/* form footer */}
             <div style={{'width':'100%'}}>
               <Link href="/auth/resetpassword">
                <p style={{'color':'#555555', 'fontSize':'16px','textAlign':'center'}}>{footertext}</p>
               </Link>
             </div>

             <style jsx>{`
                .form_wrapper{
                    display:flex;
                    flex-direction:column;
                    gap:31px;
                }
                .form_wrapper_head{
                    width:60%;
                }
                @media (max-width:999px) {
                    .form_wrapper_head{
                        background-color: #FFFFFF;
                        width: 100%;
                
                    }
                    
                }
             `}</style>

        </div>
    )
}