import {ReactNode, useEffect, useState} from 'react';
import cls from "./Questions.module.scss"
import plus from "../../images/plus.svg"
import cross from "../../images/cross.svg"


interface QuestionsProps {
    className?: string
    children?: ReactNode
}


export const Questions = (props: QuestionsProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const [openIndex, setOpenIndex] = useState<number|null>(null);

    const handleToggle = (index:number) => {
        console.log(index)
        setOpenIndex(openIndex === index ? null : index);
    };
    useEffect(() => {
        console.log(openIndex)
    }, [openIndex]);


    const questions = [
        {
            question: 'Подтверждено: сознание наших соотечественников не замутнено пропагандой?',
            answer: '',
        },
        {
            question: 'Прототип нового сервиса - это как трубный призыв?',
            answer: '',
        },
        {
            question: 'Частокол на границе продолжает удивлять?',
            answer: 'В частности, дальнейшее развитие различных форм деятельности позволяет выполнить важные задания по разработке дальнейших направлений развития. Предварительные выводы неутешительны: экономическая повестка сегодняшнего дня говорит о возможностях существующих финансовых и административных условий.',
        },
        {
            question: 'Очевидцы сообщают, что слышали грохот грома грядущих изменений?',
            answer: '',
        },
        {
            question: 'И по сей день в центральных регионах звучит перекатами печальный плач оппозиции?',
            answer: '',
        },
        {
            question: 'Нынче никто не может себе позволить инициировать треск разлетающихся скреп?',
            answer: '',
        },
        {
            question: 'Высококачественный прототип будущего проекта обнадёживает?',
            answer: '',
        },
    ];


    return (
        <div className={cls.faqContainer}>
            <h2>Вопросы и ответы</h2>
            {questions.map((item, index) => (
                <div key={index} className={cls.faqItem}>
                    <div className={cls.faqQuestion} onClick={() => handleToggle(index)}>
                        <span>{item.question}</span>
                        <span className={cls.faqToggle}>{openIndex === index ?
                            <img alt={"cross"} src={cross}/> : <img alt={"plus"} src={plus}/>
                        }
                        </span>
                    </div>
                    {openIndex === index && item.answer && (
                        <div className={cls.faqAnswer}>
                            <p>{item.answer}</p>
                        </div>
                    )}
                </div>
            ))}
        </div>
    );
};