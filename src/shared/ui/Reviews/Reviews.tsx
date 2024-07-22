import {ReactNode} from 'react';
import Slider from "react-slick";
import cls from "./Reviews.module.scss"


interface ReviewsProps {
    className?: string
    children?: ReactNode
}


export const Reviews = (props: ReviewsProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props

    const reviews = [
        {
            name: "Константинов Михаил Павлович",
            city: "Санкт-Петербург",
            review:
                "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
        },
        {
            name: "Иван Иванов",
            city: "Санкт-Петербург",
            review:
                "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.",
        },
        {
            name: "Артем Корнилов",
            city: "Самара",
            review:
                "Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.",
        },
    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,

                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };


    return (
        <div className={cls.sliderContainer}>
            <h2>Отзывы</h2>
            <Slider {...settings}>
                {reviews.map((review, index) => (
                    <div key={index} className={cls.reviewCard}>
                        <div className={cls.reviewHeader}>
                            <div className={cls.avatarPlaceholder}></div>
                            <div>
                                <h3>{review.name}</h3>
                                <p>{review.city}</p>
                            </div>
                        </div>
                        <p>{review.review}</p>
                    </div>
                ))}
            </Slider>
        </div>
    );
};