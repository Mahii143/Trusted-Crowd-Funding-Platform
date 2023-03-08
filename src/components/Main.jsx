import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProjectButton from './AddProjectButton';
import ProjectAsideCard from './ProjectAsideCard';
import ProjectView from './ProjectView';
import ErrorPage from './ErrorPage';

export default function Main() {
    let endpoint = 'https://jsonplaceholder.typicode.com/posts';
    const [data, setData] = useState([]);

    useEffect(
        () => {
            fetch(endpoint)
                .then(res => res.json())
                .then(res => setData(res))
        }
    );
    const projectAside = data.map(
        (obj, key) => {
            return <ProjectAsideCard data={obj} keys={key} ></ProjectAsideCard>
        }
    );
    return (
        <div className="app-main">
            <BrowserRouter>
                <div className='main-section'>
                    <Routes>
                        <Route path='/' />
                        <Route path='/project/:id' loader={({ params }) => {console.log(params.id); }} element={<ProjectView/>}/>
                        <Route path='*' element={<ErrorPage></ErrorPage>} />
                    </Routes>
                </div>
            </BrowserRouter>
            <div className='main-aside'>
                <div className="project-list-view-container">
                    <h3>
                        <i class="fa-solid fa-rocket"></i>
                        Projects
                    </h3>
                    {projectAside}
                </div>
                <AddProjectButton text="Add Project" />
            </div>
        </div>
    )
}
