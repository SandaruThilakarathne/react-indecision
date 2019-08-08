import React from "react";
import Option from "./Option"

const Options = (props) => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button onClick={props.handleDeleteOptions} className="button button--link">Remove All</button>
            </div>
        
            { props.optionsarr.length === 0 && <p className="widget__message">Please add an option to get started</p> }
            {
                props.optionsarr.map((opt, index) => (
                <Option 
                key={opt}  
                binddata={opt}
                 count={index + 1}
                handleDeleteOption={props.handleDeleteOption}
                />
                ))
            }
        
        </div>
    )


export default Options