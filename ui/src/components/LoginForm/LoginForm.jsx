import styles from './LoginForm.module.scss'
import Button from '../Button/Button'
import { useState } from 'react'
import { object, string } from 'yup'
import logo from '../../assets/images/logo/svgs/logo_white.svg'

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    emailOrNick: '',
    password: ''
  })

  const [errors, setErrors] = useState({
    emailOrNick: '',
    password: ''
  })

  const schema = object({
    emailOrNick: string().required("Pole 'email/nick' jest wymagane."),
    password: string().required("Pole 'hasło' jest wymagane.")
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setInputs((prev) => ({ ...prev, [name]: value }))
    setErrors((prev) => ({ ...prev, [name]: '' }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    schema
      .validate(inputs, { abortEarly: false })
      .then(() => {
        console.log('ok')
      })
      .catch((err) => {
        const newErrors = {}
        err.inner.forEach((error) => {
          newErrors[error.path] = error.message
        })
        setErrors(newErrors)
      })
  }

  return (
    <div className={styles.view}>
      <header className={styles.viewHeader}>
        <img src={logo} alt="logo" />
        <div>
          <span>Nie masz konta?</span> <Button onClick={() => {}}>Zarejestruj się</Button>
        </div>
      </header>
      <form className={styles.form}>
        <header>Logowanie</header>

        <div className={styles.inputGroup}>
          <label htmlFor="email/nick">email/nick</label>
          <input
            value={inputs.emailOrNick}
            type="text"
            id="emailOrNick"
            name="emailOrNick"
            onChange={handleChange}
          />
          {errors.emailOrNick && <span>{errors.emailOrNick}</span>}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">hasło</label>
          <input
            value={inputs.password}
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <a className={styles.passwordReset} href="#">
          Zapomniałeś hasła?
        </a>

        <Button onClick={handleSubmit}>Zaloguj się</Button>
      </form>
    </div>
  )
}
