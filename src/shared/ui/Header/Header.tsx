import { ReactNode} from 'react';
import header from "../../images/header.png"
import cls from "./Header.module.scss"


interface HeaderProps {
    className?: string
    children?: ReactNode
}


export const Header = (props: HeaderProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props
    

    
    return (
        <div
            {...otherProps}
        >
            <img className={cls.pictures} alt={"header image"} src={header}/>
        </div>
    );
};