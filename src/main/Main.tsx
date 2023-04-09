import React from 'react';
import style from './Main.module.scss'
import photo from '../common/img/typePhoto.png'
import styleContainer from '../common/styles/Container.module.scss'
import mainImg from "../assets/img/typePhoto.png";

function Main() {
    const mainPhoto={
        backgroundImage: `url(${mainImg})`,
    }
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.mainContainer}`}>
                <div className={style.mainTextBlock}>
                    <h3 className={style.mainTitle}>
                        Hello Everybody!
                    </h3>
                    <p className={style.mainText}>I’m a UI/UX Designer, Front End Developer & Traveler. I’m from Lorem ipsum dolor sit amet,
                        consectetur adipiscing elit. Nullam scelerisque consectetur arcu eu lacinia. Vivamus sem sem,
                        ornare in nibh et, fermentum luctus metus.</p>
                </div>
                <div className={style.mainPhotoBlock} style={mainPhoto}>
                    {/*<img className={style.mainPhoto} src={photo} alt=""/>*/}
                </div>
            </div>
        </div>
    );
}

export default Main;
