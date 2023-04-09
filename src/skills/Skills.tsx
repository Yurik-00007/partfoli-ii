import React from 'react';
import style from './Skills.module.scss'
import styleContainer from '../common/styles/Container.module.scss'
import Skill from "./skill/Skill";
import icon1 from "../assets/img/icon_3.svg";
import icon2 from "../assets/img/icon_2.svg";
import icon3 from "../assets/img/icon_1.svg";
import {Bth} from "../common/components/bth/Bth";
import {Title} from "../common/components/title/Title";


function Skills() {


    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                {/*<h3 className={style.skillsTitle}>Skills</h3>*/}
                <Title text={'Skills'}/>
                <p className={style.skillsText}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc mauris arcu,
                    lobortis id interdum vitae, interdum eget elit. Curabitur quis urna nulla.
                    Suspendisse potenti. Duis suscipit ultrices maximus.
                </p>
                <div className={style.skills}>
                    <Skill title={'HTML/CSS'}
                           icon={icon1}
                           description={'' +
                               'Lorem ipsum dolor sit amet,\n' +
                               'consectetur adipisicing elit. Blanditiis earum eveniet harum,\n'}
                    />
                    <Skill title={'REACT'}
                           icon={icon2}
                           description={'' +
                               'Lorem ipsum dolor sit amet,\n' +
                               'veniam voluptatem, voluptates. Atque earum laudantium rem velit. Dolor, ducimus.'}
                    />

                    <Skill title={'REDUX'}
                           icon={icon3}
                           description={
                               'Lorem ipsum dolor sit amet,\n' +
                               'consectetur adipisicing elit. Blanditiis earum eveniet harum.'}
                    />


                </div>
            </div>
        </div>
    );
}

export default Skills;
