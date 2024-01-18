import React from 'react'

const Contentgrid = (props) => {
    return (
        <div className={`py-3 place-items-center grid grid-cols-4 relative ${props?.classCss}`}>
            {props.children}
        </div>
    )
}

export default Contentgrid;