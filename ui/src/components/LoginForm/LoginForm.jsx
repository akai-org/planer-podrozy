import styles from './LoginForm.module.scss'
import Button from '../Button/Button'
import { useRef, useState } from 'react'
import { object, string } from 'yup'
import logo from '../../assets/images/logo/svgs/logo_accent.svg'
import classNames from 'classnames'

export default function LoginForm() {
  const emailOrNickInput = useRef(null)
  const passwordInput = useRef(null)

  const [errors, setErrors] = useState({})

  const [loginError, setLoginError] = useState(false)

  const loginForm = useRef(null)

  const schema = object({
    emailOrNick: string().required('Pole "Email/nick" jest wymagane.'),
    password: string().required('Pole "Hasło" jest wymagane.')
  })

  const handleChange = (event) => {
    const { name } = event.target
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
      .validate(
        {
          emailOrNick: emailOrNickInput.current.value,
          password: passwordInput.current.value
        },
        {
          abortEarly: false
        }
      )
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
        <img src={logo} alt="logo" className={styles.logo} />
        <div>
          <h3>Nie masz jeszcze konta?</h3>
          <Button
            style={styles.button}
            onClick={() => {
              // TODO: change view to register
            }}
          >
            Zarejestruj się
          </Button>
        </div>
      </header>
      <form className={styles.form} ref={loginForm} onSubmit={handleSubmit}>
        <header>
          <h3>Zaloguj się do swojego konta</h3>
        </header>
        <div className={styles.inputGroup}>
          <label htmlFor="emailOrNick">Email/nick</label>
          <input
            type="text"
            id="emailOrNick"
            placeholder="abc@gmail.com / Gigachad"
            name="emailOrNick"
            onChange={handleChange}
            className={errors.emailOrNick && styles.errorInput}
            ref={emailOrNickInput}
            autoFocus
          />
          {errors.emailOrNick && (
            <span className={styles.errorSpan}>{errors.emailOrNick}</span>
          )}
        </div>

        <div className={styles.inputGroup}>
          <label htmlFor="password">Hasło</label>
          <input
            type="password"
            id="password"
            placeholder="********"
            name="password"
            onChange={handleChange}
            className={errors.password && styles.errorInput}
            ref={passwordInput}
          />
          {errors.password && (
            <span className={styles.errorSpan}>{errors.password}</span>
          )}
        </div>
        <a className={styles.passwordReset} href="#">
          {/* TODO: change view to password reset */}
          Zapomniałem hasła
        </a>
        {loginError && (
          <span className={styles.errorSpan}>Nie udało się zalogować</span>
        )}
        <Button style={classNames(styles.button, styles.submitButton)}>
          Zaloguj się
        </Button>
      </form>
    </div>
  )
}
