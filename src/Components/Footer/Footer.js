import React from 'react'
import alex from '../../Images/alex.png'
import ashley from '../../Images/ashley.png'
import minerva from '../../Images/minerva.png'
import linkin from '../../Images/linkin.png'
import github from '../../Images/GitHub-Mark.png'
import './Footer.css'
import "../../Images/GitHub-Mark.png"

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="row">
            <h3>Contacts</h3>
            <div className="contact-container">
              
              <div className='img-ashley'>
                <img alt='' className="img-thumbnail" src={ashley} />
                <a href="https://www.linkedin.com/in/ashley-lemus-b1b518264/" target="_blank" rel="noreferrer">
                <img alt='' className="img-thumbnail-2" src={linkin} />
                </a>
                <a href="https://github.com/ashleylem" target="_blank" rel="noreferrer">
              <img alt='' className="img-thumbnail-2" src={github} />
              </a>
            </div>
            <div className='img-alex'>
              <img alt='' className="img-thumbnail" src={alex} />
              <a href="https://www.linkedin.com/in/notalxt/" target="_blank" rel="noreferrer">
                <img alt='' className="img-thumbnail-2" src={linkin} />
              </a>
              <a href="https://github.com/NotAlxT" target="_blank" rel="noreferrer">
                <img alt='' className="img-thumbnail-2" src={github} />
              </a>
            </div>
            <div className='img-minerva'>
              <img className="img-thumbnail" src={minerva} alt="" />
              <a href="https://www.linkedin.com/in/minervadutta/" target="_blank" rel="noreferrer">
                <img alt='' className="img-thumbnail-2" src={linkin} />
              </a>
              <a href="https://github.com/minervaDutta" target="_blank" rel="noreferrer">
              <img alt='' className="img-thumbnail-2" src={github} />
              </a>
            </div>
          </div>

        </div>
      </div>
      <div className="copyright text-center">
        Copyright &copy; 2023 <span>A&M</span>
      </div>
    </footer>
    </>
  )
}

export default Footer