import React from 'react'
import P from 'prop-types'

import './styles.css'


export const PostCard = ({ title, body, cover }) => {

    return (
        <div className='post'>
            <img src={cover} alt={title} />
            <div className='post-content'>
            <h1>{title}</h1>
            <p>{body}</p>
            </div>
        </div>
    )
}

PostCard.propTypes = {
    title: P.string.isRequired,
    cover: P.string.isRequired,
    body: P.string.isRequired
}
