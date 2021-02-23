import react from "react";
import s from "./Auth.module.css"

const Auth = () => {
    return (
        <div className={s.wrapper}>
            <h4 className={s.subtitle}>Вход на сайт</h4>
            <form className={s.authForm}>
                <div className={s.group}>
                    <input type="phone" required />
                    <span className={s.bar} />
                    <label>Телефон</label>
                </div>
                <div className={s.group}>
                    <input type="password" required />
                    <span className={s.bar} />
                    <label>Пароль</label>
                </div>
                <button className={s.login}>Войти</button>
            </form>
        </div>
    )
}

export default Auth;