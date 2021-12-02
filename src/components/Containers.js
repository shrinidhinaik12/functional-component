import React from 'react'
import MonetizationIcon from './icons/monetization.svg'

function Containers(){
    return (
        <div className="container">
            <div className="box-cell-head-wrapper">
                <img height={20} src={MonetizationIcon} alt='icon'/>
                <span className="box-cell-head">COST</span>
            </div>
            <div className="box-cell-body">
                $24.0K 
                <div className="box-cell-body-unit">
                    <span>/Day</span>
                    <span>Run Rate</span>
                </div>
            </div>
            <div className="box-cell-footer">
                <div>$0.40</div>
                <div className="box-cell-footer-unit">/Instance HR</div>
            </div>
    </div>
    )
}

export default Containers
