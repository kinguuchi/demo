import React from 'react'

interface AboutMeProps {
  className: string
}

const AboutMe = ({className}: AboutMeProps) => {
  return (
    <div className={className}>Hi</div>
  )
}

export default AboutMe