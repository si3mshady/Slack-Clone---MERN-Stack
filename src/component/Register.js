import React from 'react'
import "../Register.css"
import {Button} from "@material-ui/core"

export default function Login(e) {
    const signin = (e) => {
        e.preventDefault()
        



        
    }
    return (
        <div className="login">
                <div className="login__container">
                        <img src="https://i.pinimg.com/600x315/d2/32/98/d23298e8be6b9f7aa533e283228c4c2b.jpg"
                            alt="" />
              
        <h1>Sign in to Slack-Clone</h1>
        <p> si3mshady.slack.com  </p>
        <form>
        <input type="email" class="form-control" name="username"/>
        <input type="email" class="form-control" name="password"/>

        <Button> Register </Button>


        </form>
        
        
       
        </div>
        </div>
    )
}
