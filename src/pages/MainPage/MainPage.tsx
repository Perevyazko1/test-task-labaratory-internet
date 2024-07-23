import {memo, ReactNode} from 'react';
import {Header} from "../../shared/ui/Header/Header";
import {Stages} from "../../shared/ui/Stages/Stages";
import {ThirthBlock} from "../../shared/ui/ThirthBlock/ThirthBlock";
import {Reviews} from "../../shared/ui/Reviews/Reviews";
import {Questions} from "../../shared/ui/Questions/Questions";
import {Description} from "../../shared/ui/Description/Description";
import {Form} from "../../features/Form/Form";
import {Navbar} from "../../shared/ui/NavBar/Navbar";
import {WrapperPage} from "../../shared/ui/WrapperPage/WrapperPage";


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
        <WrapperPage
            {...otherProps}
        >
            {/*<Navbar/>*/}
            {/*<Header/>*/}
            {/*<section id="how-it-works">*/}
            {/*    <Stages/>*/}
            {/*</section>*/}
            {/*<section id="third-block">*/}
            {/*    <ThirthBlock/>*/}
            {/*</section>*/}
            {/*<Reviews/>*/}
            {/*<section id="faq">*/}
            {/*    <Questions/>*/}
            {/*</section>*/}
            <Description/>
            <section id="form">
                <Form/>
            </section>
        </WrapperPage>
    );
});