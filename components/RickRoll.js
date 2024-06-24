import React from 'react'

export default function RickRoll({ konamiCode }) {
    return (
        <div className={`fixed bg-stone-600/60 w-screen h-screen z-10 flex justify-center items-center ${ !konamiCode && 'hidden' }`}>
            <iframe width="70%" className='aspect-video rounded-xl' src={`https://www.youtube.com/embed/dQw4w9WgXcQ?si=yf7h6PRFg1TQ_c3F&amp;controls=0${konamiCode && "&autoplay=1"}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
        </div>
    )
}
