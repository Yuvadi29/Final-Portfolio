import React, { useState } from 'react'
import Work from "../Projects.json";
import Project from '../Project/Project';
import Modal from '../Modal/Modal';

const Projects = () => {

    const [modal, setModal] = useState({ active: false, index: 1 });

    return (
        <>
            {Work?.Work.map((work, index) => {
                return (
                    <Project key={index} index={index} name={work.name} setModal={setModal} />
                );
            })}
            <Modal modal={modal} projects={Work} />
        </>
    )
}

export default Projects