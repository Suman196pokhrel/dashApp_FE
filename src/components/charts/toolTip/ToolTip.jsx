import React from 'react'

const ToolTip = ({ value }) => {
    console.log(value)
    return (
        `<div
            style={{
                height: 40,
                width: 40,
                fontSize: 20
            }}
        >` + value + `</div>`
    )
}

export default ToolTip