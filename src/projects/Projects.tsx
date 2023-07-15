import React from 'react';
import style from './Projects.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Project from "./project/Project";
import todoImg from './../assets/img/todo-list.png'
import socialImg from './../assets/img/social-netwirk.jpg'
import {Title} from "../common/components/title/Title";


function Projects() {
    const social = {
//       backgroundImage: 'url(' + './../assets/img/social-netwirk.jpg' + ')',
        backgroundImage: `url(${socialImg})`,
    };
    const todolist = {
        backgroundImage: `url(${todoImg})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                {/*<h2 className={style.projectsTitle}>Projects</h2>*/}
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} style={social} description={'Nunc tincidunt pellentesque accumsan. ' +
                        'Fusce vel lobortis justo, quis sagittis sem. Nam eleifend aliquet malesuada.'}/>
                    <Project title={'Todo list'} style={todolist} description={'Vestibulum rutrum imperdiet ' +
                        'diam et suscipit. Praesent vulputate ex id velit facilisis, dapibus pretium dui posuere. ' +
                        'Mauris tempus gravida'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;
