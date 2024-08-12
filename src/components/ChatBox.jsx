import React from 'react'
import Profile from '../images/profile.png'
import Close from '../images/close.svg'

const ChatBox = () => {
  return (
    <div className='chatBox'>
      <div className='chatContainer'>
        <div className='chatHeader'>
            <div className='userPicture'>
                <div className='imageContainer'>
                    <img src={Profile} alt="profile"/>
                </div>
            <div className='statusInfo'>
                <a href='#'></a>
                <p>Active</p>
            </div>
            </div>
        <div className='chatIcons'>
            <nav>
                <a href="#">
                    <img src={Close} alt="close"/>
                </a>
            </nav>
        </div>
        </div>
        <div className='chatBody'>
            <div className='senderOther'>
                <div className='userAvatar'>
                    <div className='avatarContainer'>
                        <img src={Profile} alt="profile"/>
                    </div>
                    <div className='otherMessage'>
                        Hello there
                    </div>
                </div>
            </div>
            <div className='senderMe'>
                <div className='myMessage'>
                    Hi
                </div>
            </div>
        </div>
        <div className='chatFooter'>
            <input type="text" placeholder='Type a message' />
        </div>
      </div>
    </div>
  )
}

export default ChatBox
