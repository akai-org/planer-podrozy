import styles from './LoginForm.module.scss'
import Button from '../Button/Button'
import { useRef, useState } from 'react'
import { object, string } from 'yup'
import logo from '../../assets/images/logo/svgs/logo_black.svg'

export default function LoginForm() {
  const [inputs, setInputs] = useState({
    emailOrNick: '',
    password: ''
  })

  const [errors, setErrors] = useState({})

  const [loginError, setLoginError] = useState(false)

  const loginForm = useRef(null)

  const schema = object({
    emailOrNick: string().required("Pole 'email/nick' jest wymagane."),
    password: string().required("Pole 'hasło' jest wymagane.")
  })

  const handleChange = (event) => {
    const { name, value } = event.target
    setInputs((prev) => ({ ...prev, [name]: value }))
    if (errors[name]) {
      setErrors((prev) => {
        const newErrors = { ...prev }
        delete newErrors[name]
        return newErrors
      })
    }
    setLoginError(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    schema
      .validate(inputs, { abortEarly: false })
      .then(() => {
        console.log('ok')
        // TODO: send data to server
        setLoginError(true) // if failed to login
      })
      .catch((error) => {
        const newErrors = {}
        error.inner.forEach((error) => {
          newErrors[error.path] = error.message
        })
        setErrors(newErrors)
        loginForm.current[Object.keys(newErrors)[0]]?.focus()
      })
  }

  return (
    <div className={styles.view}>
      <header className={styles.viewHeader}>
        <img src={logo} alt="logo" />
        <div>
          <span>Nie masz konta?</span>{' '}
          <Button
            onClick={() => {
              // TODO: change view to register
            }}
          >
            Zarejestruj się
          </Button>
        </div>
      </header>
      <form className={styles.form} ref={loginForm} onSubmit={handleSubmit}>
        <header>Logowanie</header>

        <div className={styles.inputGroup}>
          <label htmlFor="emailOrNick">email/nick</label>
          <input
            value={inputs.emailOrNick}
            type="text"
            id="emailOrNick"
            name="emailOrNick"
            onChange={handleChange}
            className={errors.emailOrNick && styles.errorInput}
            autoFocus
          />
          {errors.emailOrNick && (
            <span className={styles.errorSpan}>{errors.emailOrNick}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">hasło</label>
          <input
            value={inputs.password}
            type="text"
            id="password"
            name="password"
            onChange={handleChange}
            className={errors.password && styles.errorInput}
          />
          {errors.password && (
            <span className={styles.errorSpan}>{errors.password}</span>
          )}
        </div>
        <a className={styles.passwordReset} href="#">
          {/* TODO: change view to password reset */}
          Zapomniałeś hasła?
        </a>
        {loginError && (
          <span className={styles.errorSpan}>
            Nieprawidłowy email/nick lub hasło.
          </span>
        )}

        <Button onClick={() => loginForm.current.onSubmit}>Zaloguj się</Button>
      </form>
    </div>
  )
}
