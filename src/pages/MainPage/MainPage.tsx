import {memo, ReactNode} from 'react';
import {Header} from "../../shared/ui/Header/Header";
import {Stages} from "../../shared/ui/Stages/Stages";
import {ThirthBlock} from "../../shared/ui/ThirthBlock/ThirthBlock";
import {Reviews} from "../../shared/ui/Reviews/Reviews";
import {Questions} from "../../shared/ui/Questions/Questions";

interface MainPageProps {
    className?: string
    children?: ReactNode
}


export const MainPage = memo((props: MainPageProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    return (
        <div
            {...otherProps}
        >
            <Header/>
            <Stages/>
            <ThirthBlock/>
            <Reviews/>
            <Questions/>
        </div>
    );
});