import { Formik } from 'formik';
import react from 'react';
import * as yup from 'yup'
import s from './Auth.module.css';

const Auth = () => {

    const validationSchema = yup.object().shape({
        email : yup.string().email('Введите верный email').required('Обязательное поле'),
        password : yup.string().typeError('Должно быть строкой').required('Обязательное поле')
    })

	return (
		<div className={s.wrapper}>
			<h4 className={s.subtitle}>Вход на сайт</h4>
			{/*             <form className={s.authForm}>
                <div className={s.group}>
                    <input type="email" required />
                    <span className={s.bar} />
                    <label>Email</label>
                </div>
                <div className={s.group}>
                    <input type="password" required />
                    <span className={s.bar} />
                    <label>Пароль</label>
                </div>
                <button className={s.login}>Войти</button>
            </form> */}
			<Formik
				initialValues={{
					email: '',
					password: '',
				}}
				validateOnBlur
				onSubmit={(value) => {
					console.log(value);
				}}
                validationSchema={validationSchema}
			>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					isValid,
					handleSubmit,
					dirty,
				}) => (
					<div className={s.authForm}>
						<div className={s.group}>
							<input
                                className={s.email}
								type="email"
								name="email"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.email}
							/>
							<span className={s.bar} />
							<label htmlFor="email">Email</label>
						</div>
                            {touched.email && errors.email && (
                                <span className={`${s.error} ${s.email}`}>{errors.email}</span>
                            )}
						<div className={s.group}>
							<input
								type="password"
								name="password"
								onChange={handleChange}
								onBlur={handleBlur}
								value={values.password}
							/>
							<span className={s.bar} />
							<label htmlFor="password">Пароль</label>
						</div>
                        {touched.password && errors.password && (
                                <p className={`${s.error} ${s.password}`}>{errors.password}</p>
                            )}
						<button
							disabled={!isValid && !dirty}
							onClick={handleBlur}
							type="submit"
							className={s.login}
						>
							Войти
						</button>
					</div>
				)}
			</Formik>
		</div>
	);
};

export default Auth;
