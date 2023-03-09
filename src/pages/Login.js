import styled from "styled-components";
import styles from "./Header.module.css";
import { useState, useEffect } from "react";

const PageLogin = styled.div` 
    

`;

function Login(){ 
    return(<>
   <PageLogin>
    <div className="login-container">
        <div className="wanted-logo">
            <span>
                <svg>
                    <path></path>
                </svg>
            </span>
        </div>

    </div>


   </PageLogin>
    
    </>); 

}

export default Login;