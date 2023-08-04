import React from 'react'
import "./latestProds.scss"


const data = [
    {
        id: 1,
        title: "Order Total",
        amount: 187650
    }, {
        id: 2,
        title: "Earning",
        amount: 25500
    },
    {
        id: 3,
        title: "Refunded",
        amount: 162150
    }
]

const LatestProds = () => {
    return (
        <div className='latProds'>
            <p>Current Balance</p>
            <h1>$ {(162150).toLocaleString('en-US')}</h1>

            <div className="items">
                {data.map(({ id, amount, title }) => {
                    return <div className="item" key={id}>
                        <p>{title}</p>
                        <p className='amnt'>${amount.toLocaleString('en-US')}</p>
                    </div>
                })}
            </div>

            <div className="buttons">
                <button className="first">Request</button>
                <button className="second">Transfer</button>
            </div>
        </div>
    )
}

export default LatestProds