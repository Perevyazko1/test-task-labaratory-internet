import { ReactNode} from 'react';
import cls from "../ThirthBlock/ThirthBlock.module.scss"
import man from "../../images/man.png"
import track from "../../images/track.png"


interface ThirthBlockProps {
    className?: string
    children?: ReactNode
}


export const ThirthBlock = (props: ThirthBlockProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    

    
    return (
        <div
            {...otherProps}
        >
            <div className={cls.thirdBlock}>
                <div className={cls.textSection}>
                    <h2>Круто, ты дошел до третьего блока</h2>
                    <p>63% опрошенных пользователей сообщили о том, что не могли покрыть непредвиденные расходы свыше 15
                        000 ₽.</p>
                    <p>Доступ к заработанным деньгам помогает отказаться от кредитов и экономить деньги на процентах и
                        штрафах.</p>
                </div>
                <div className={cls.imageSection}>
                    {/*<img src="/path/to/phone.png" alt="phone" className="phone-image"/>*/}
                    <img src={track} alt="character" className={cls.truckImage}/>
                    <img src={man} alt="truck" className={cls.menImage}/>
                </div>
            </div>
        </div>
    );
};