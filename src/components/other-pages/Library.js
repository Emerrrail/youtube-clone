import React from 'react'

function Library({ img }) {
    return (
        <div className='under_construction_pic__container'>
            <img className="under_construction_pic" src={img} alt='' />
        </div>
    )
}

export default Library