import React from 'react';
import Slider from 'react-slick';
import cls from './Reviews.module.scss';
import right from "../../images/right.svg"
import left from "../../images/left.svg"

interface ReviewsProps {
  className?: string;
  children?: React.ReactNode;
}

const CustomPrevArrow = (props: any) => (
  <img src={left} className={cls.slickPrev} onClick={props.onClick}></img>
);

const CustomNextArrow = (props: any) => (
  <img src={right} className={cls.slickNext} onClick={props.onClick}></img>
);

export const Reviews: React.FC<ReviewsProps> = (props) => {
  const { className, children, ...otherProps } = props;

  const reviews = [
    {
      name: 'Константинов Михаил Павлович',
      city: 'Санкт-Петербург',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      name: 'Иван Иванов',
      city: 'Санкт-Петербург',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения. В своём стремлении улучшить пользовательский опыт мы упускаем, что активно развивающиеся страны третьего мира призваны к ответу.',
    },
    {
      name: 'Артем Корнилов',
      city: 'Самара',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
    {
      name: 'Артем Корнилов',
      city: 'Самара',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
    {
      name: 'Артем Корнилов',
      city: 'Самара',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
    {
      name: 'Артем Корнилов',
      city: 'Самара',
      review:
        'Каждый из нас понимает очевидную вещь: перспективное планирование предоставляет широкие возможности для анализа существующих паттернов поведения.',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: <CustomPrevArrow />,
    nextArrow: <CustomNextArrow />,
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
          <h2 className={cls.header}>Отзывы</h2>
          <Slider className={cls.slider} {...settings}>
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
