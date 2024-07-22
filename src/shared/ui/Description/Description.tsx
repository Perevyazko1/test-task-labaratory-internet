import {ReactNode} from 'react';
import cls from "./Description.module.scss"


interface DescriptionProps {
    className?: string
    children?: ReactNode
}


export const Description = (props: DescriptionProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    const content = (
        <>
            <h3>Опрошенных пользователей микрокредитами</h3>
            <p>
                Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                помогает отказаться от кредитов и экономить деньги на процентах и штрафах.
            </p>
            <p>
                Не могли покрыть внезапные траты свыше 7000 ₽. Доступ к заработанным деньгам
                помогает отказаться от кредитов и экономить деньги на процентах и штрафах
            </p>
        </>
    );

    return (
        <div className={cls.gridSection}>
            <div className={cls.gridContainer}>
                <div className={cls.gridItem}>{content}</div>
                <div className={cls.gridItem}>{content}</div>
                <div className={cls.gridItem}>{content}</div>
                <div className={cls.gridItem}>{content}</div>
            </div>
        </div>
    );
};