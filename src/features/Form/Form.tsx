import {ReactNode, useState} from 'react';
import cls from "./Form.module.scss"


interface FormProps {
    className?: string
    children?: ReactNode
}


export const Form = (props: FormProps) => {
    const {
        className,
        children,
        ...otherProps
    } = props


    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [agreement, setAgreement] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted', {name, phone, agreement});
    };


    return (
        <div className={cls.formContainer}>
            <h2>Отправь форму</h2>
            <form onSubmit={handleSubmit}>
                <div className={cls.formGroup}>
                    <input
                        type="text"
                        placeholder="Имя"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <input
                        type="text"
                        placeholder="Телефон"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                </div>
                <div className={cls.formGroup}>
                    <label>
                        <input
                            type="checkbox"
                            checked={agreement}
                            onChange={(e) => setAgreement(e.target.checked)}
                        />
                        Согласен, отказываюсь
                    </label>
                    <button type="submit">Отправить</button>
                </div>
            </form>
            <footer>© 2021 Лаборатория интернет</footer>
        </div>
    );
};