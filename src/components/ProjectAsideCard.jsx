import React from 'react'

export default function ProjectAsideCard(props) {
    const obj = props.data; //pass the json object to the props
    
    return (
        <a href={"/project/"+obj.id}>
            <div className='aside-project-card btn-hover'>
                <h3 className='project-card-title'>
                    {obj.title}
                </h3>
                <p className='para-overflow'>
                    {obj.body}
                </p>
            </div>
        </a>
    )
}
