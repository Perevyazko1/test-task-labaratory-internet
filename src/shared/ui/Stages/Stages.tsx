import {ReactNode} from 'react';
import cls from "./Stages.module.scss"
import delivery from "../../images/delivery-truck.svg"
import money from "../../images/money-bags.svg"
import secure from "../../images/secure.svg"
import  waiting from "../../images/waiting.svg"


interface StagesProps {
    className?: string
    children?: ReactNode
}


export const Stages = (props: StagesProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div className={cls.howItWorks}>
            <h2>Как это работает</h2>
            <div className={cls.steps}>
                <div className={cls.step}>
                    <img src={waiting} alt="icon1"/>
                    <h3>Прочитай задание внимательно</h3>
                    <p>Думаю у тебя не займет это больше двух-трех минут</p>
                </div>
                <div className={cls.step}>
                    <img src={delivery} alt="icon2"/>
                    <h3>Изучи весь макет заранее</h3>
                    <p>Подумай как это будет работать на разных разрешениях и при скролле</p>
                </div>
                <div className={cls.step}>
                    <img src={secure} alt="icon3"/>
                    <h3>Сделай хорошо</h3>
                    <p>Чтобы мы могли тебе доверить подобные задачи в будущем</p>
                </div>
                <div className={cls.step}>
                    <img src={money} alt="icon4"/>
                    <h3>Получи предложение</h3>
                    <p>Ну тут все просто, не я придумал правила, но думаю так и будет)))</p>
                </div>
            </div>
        </div>
    );
};