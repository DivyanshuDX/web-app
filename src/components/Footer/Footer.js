import React from 'react'
import'./Footer.css'

 export const Footer = () => {
    let footerstyle={
        position:"absolute",
          top:"130%",
        width:"100%"
 
    }
    return (
        <footer className="footer" style={footerstyle}>
            <p className="text-center">&copy;DIVYANSHU KUMAR (LGMVIP-TASK2) "REACT-APP"</p>
        </footer>
    )
}