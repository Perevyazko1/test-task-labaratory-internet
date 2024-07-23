import {ReactNode} from 'react';
import logo from "../../images/logo.svg"
import cls from "./Navbar.module.scss"


interface NavbarProps {
    className?: string
    children?: ReactNode
}


export const Navbar = (props: NavbarProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    

    
    return (
        <nav className={cls.navbar}>
            <div className={cls.navbarLogo}>
                <img src={logo} alt="Logo"/>
            </div>
            <div className={cls.navbarLinks}>
                <a href="#how-it-works">Как это работает</a>
                <a href="#third-block">3-й блок</a>
                <a href="#faq">Вопросы и ответы</a>
                <a href="#form">Форма</a>
            </div>
        </nav>
    );
};