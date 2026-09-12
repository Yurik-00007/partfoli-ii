import React from 'react';
import style from './Projects.module.scss'
import {Section} from "../common/components/section/Section";
import {Title} from "../common/components/title/Title";
import {Fade} from "react-awesome-reveal";
import {Project} from "./project/Project";
import {projects} from "./projectsData";

export const Projects = () => {
    return (
        <Section id={'projects'} className={style.projectsBlock} containerClassName={style.projectsContainer}>
            <Title text={'Проекты'}/>
            <div className={style.projects}>
                <Fade cascade damping={0.3}>
                    {projects.map((project) => (
                        <Project
                            key={project.title}
                            title={project.title}
                            image={project.image}
                            href={project.href}
                            description={project.description}
                        />
                    ))}
                </Fade>
            </div>
        </Section>
    );
}
