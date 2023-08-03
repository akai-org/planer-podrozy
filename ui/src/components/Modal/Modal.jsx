import { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import Button from '../Button/Button'

function Modal({ title, children, open, onClose, modal, variant }) {
  let showConfirm
  switch (variant) {
    case 'confirm':
      showConfirm = true
      break
    default:
      showConfirm = false
      break
  }

  const dialog = useRef(null)

  const onCancel = () => {
    onClose(false)
  }

  const close = () => {
    onClose(false)
  }

  useEffect(() => {
    if (open && !dialog.current.open) {
      modal ? dialog.current.showModal() : dialog.current.show()
    }
    if (!open && dialog.current.open) {
      dialog.current.close()
    }
  }, [open])

  return (
    <dialog
      className={styles.modal}
      ref={dialog}
      onCancel={onCancel}
      onClose={close}
    >
      <h3>{title}</h3>
      <hr />
      <p>{children}</p>
      <form method="dialog">
        <ButtonIcon
          name={'close'}
          className={styles.close}
          size={'small'}
          color={'white'}
        />
        {showConfirm && (
          <Button style={styles.confirm} variant={'light-red'}>
            Confirm
          </Button>
        )}
      </form>
    </dialog>
  )
}

Modal.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  modal: PropTypes.bool,
  variant: PropTypes.oneOf(['confirm'])
}

Modal.defaultProps = {
  title: 'Tytuł modala',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
}

export default Modal
