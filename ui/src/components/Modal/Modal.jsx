import { useEffect, useRef } from 'react'
import styles from './Modal.module.scss'
import PropTypes from 'prop-types'
import { ButtonIcon } from '../ButtonIcon/ButtonIcon'
import Button from '../Button/Button'

/**
 * ### example:
 * ```
 * import Modal from 'components/Modal/Modal'
 * const [open, setOpen] = useState(false)
 * return (
 *   <>
 *     <button
 *       onClick={() => {
 *         setOpen(true)
 *       }}
 *     >
 *       Open Modal
 *     </button>
 *     <Modal open={open} onClose={() => setOpen(false)} />
 *   </>
 * )
 * ```
 * ### props:
 * - title - title of the modal
 * - children - content of the modal
 * - variant - type of modal
 *  - default - standard modal
 *  - confirm - modal with confirm button
 * - modal - boolean value that controls modal type
 *  - true - modal, default value
 *  - false - dialog, allows interaction with the rest of the page
 * - open - state of the modal
 * - onClose - function to change state of the modal
 *
 * ### reference:
 * - [dialog](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
 * */
function Modal({ title, children, modal, variant, open, onClose }) {
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
  /** title of the modal */
  title: PropTypes.string.isRequired,
  /** content of the modal */
  children: PropTypes.string.isRequired,
  /** modal or dialog, set to false allows interaction with the rest of the page */
  modal: PropTypes.bool,
  /** variant of the modal, if not set, modal will be default
   * - default: standard modal
   * - confirm: adds confirm button
   */
  variant: PropTypes.oneOf(['confirm']),
  /** state of the modal */
  open: PropTypes.bool.isRequired,
  /** function to change state of the modal */
  onClose: PropTypes.func.isRequired
}

Modal.defaultProps = {
  title: 'Tytuł modala',
  children:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  modal: true
}

export default Modal
