import React from "react"
export const EmailButton = ({text, className, id }) => {
    return (
      <a 
      href="mailto:vincentvtruong@gmail.com" 
      className={`${className ?? ''} cta-wrapper`}>
          <div className='cta-button group'>
              <div className='bg-circle' />
              <p className='text'> {text}</p>
              <div className='arrow-wrapper'>
                  <img src='/images/arrow-right.svg' alt='arrow'/>
              </div>
          </div>
      </a>
    )
  }
  

export default EmailButton

export const CsvButton = ({text, className, id }) => {
  return (
    <a 
    href="../public/VincentTruongResume.pdf"

    className={`${className ?? ''} cta-wrapper`}>
        <div className='cta-button group'>
            <div className='bg-circle' />
            <p className='text'> {text}</p>
            <div className='arrow-wrapper'>
                <img src='/images/arrow-right.svg' alt='arrow'/>
            </div>
        </div>
    </a>
  )
}
