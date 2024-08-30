import React from 'react'
import {ReactComponent as Logo} from "../assets/Logo.svg"
import {ReactComponent as Stick} from "../assets/stick.svg"
import "./LogoAnimation.css"

const LogoAnimation = () => {
  return (
    <div className='mainBody' >
        <div className='mainDiv' >
          <div className='logoParent'>
            
        <Logo className='logoDiv'/>
        <Stick className='stickDiv'/>
          </div>
        <div className='text'>Own Your Future</div>
   {/*    <Logo className='logoDiv1'/>
      <Logo className='logoDiv2'/>
      <Logo className='logoDiv3'/>
      <Logo className='logoDiv4'/>
      <Logo className='logoDiv5'/>
      <Logo className='logoDiv6'/>
      <Logo className='logoDiv7'/>
      <Logo className='logoDiv8'/>
      <Logo className='logoDiv9'/>
      <Logo className='logoDiv10'/> */}
      </div>
    </div>
  )
}

export default LogoAnimation
