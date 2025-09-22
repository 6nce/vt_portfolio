import React from 'react'
import { abilities } from '../constants/index.js'

const FeatureCards = () => {
  return (
    <div className='w-full padding-x-lg'>
        <div className='mx-auto grid-3-cols'>
            {abilities.map(({title, subtitle, desc}) => (
                <div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'>
                    <h2 className='text-white text-2xl font-bold mt-2'>{title}</h2>
                    <h3 className='text-white text-lg font-semibold italic'>{subtitle}</h3>
                    <p className='text-white-50 text-lg'>{desc}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FeatureCards