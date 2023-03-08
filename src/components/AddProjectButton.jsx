import React from 'react'

export default function AddProjectButton(props) {
    const text = props.text;
    return (
        <button className='btn-add-project btn-hover'>
            {/* Add text='innerText' for this button component while calling */}
            {text}
        </button>
    )
}