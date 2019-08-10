import React from 'react'

export default function Demo({children,render,...rest}) {
    return (
        <div>
            {children} - {render()}
        </div>
    )
}
