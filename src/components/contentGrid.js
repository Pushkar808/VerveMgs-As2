import React from 'react'

const Contentgrid = (props) => {
    return (
        <div id={props?.id} className={`py-3 place-items-center grid md:grid-cols-4 grid-cols-1 relative ${props?.classCss}`}>
            {props.children}
        </div>
    )
}

export default Contentgrid;