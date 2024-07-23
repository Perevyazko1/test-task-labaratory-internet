import { ReactNode} from 'react';
import cls from "./WrapperPage.module.scss"


interface WrapperPageProps {
    className?: string
    children?: ReactNode
}


export const WrapperPage = (props: WrapperPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props



    return (
        <div className={cls.WrapperPage}>
            {children}
        </div>
    );
};