// Instruments
import { useForm } from 'react-hook-form';
// Mui
import { Button } from '@mui/material';
// Styles
import Styles from './styles.module.scss';

const BasicInfo = () => {
    const { register, handleSubmit, reset } = useForm({
        mode:          'onSubmit',
        defaultValues: {
            email: '',
        },
    });

    const submitForm = handleSubmit((values) => {
        reset();
    });

    return (
        <section className = { Styles.wrapper }>
            <div className = { Styles.info }>
                <div className = { Styles.info_emergency }>
                    <span />
                    <span>{ 'Emergency opportunity – get in touch, hire today' }</span>
                </div>
                <h1 className = { Styles.info_title }>
                    { 'Ukrainian developers are open for work' }
                </h1>
                <p className = { Styles.info_descr }>
                    <span>{ 'Over 1,200 experts in machine learning, cybersecurity' }</span>
                    <span>{ 'web and app development at your service' }</span>
                </p>
                <form onSubmit = { submitForm } className = { Styles.info_form }>
                    <div>
                        <input
                            type = { 'email' }
                            { ...register('email') }
                            placeholder = { 'your@email.ua' }
                            className = { Styles.form_field } />
                        <Button
                            href = { '#contact' }
                            variant = { 'contained' }
                            className = { Styles.form_btn }>{ 'Contact' }</Button>
                    </div>
                    <span>{ 'We’ll send you an email with next steps' }</span>
                </form>
            </div>
            <div className = { Styles.bg_img } />
        </section>
    );
};

export default BasicInfo;
