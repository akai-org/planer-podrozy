import classNames from 'classnames'
import styles from './RadioButton.module.scss'
import PropTypes from 'prop-types'

/**
 * ### example: <br/>
 * ```
 * import RadioButton from './components/RadioButton/RadioButton'
 *
 *<RadioButton
 *  id="radioInput"
 *  labelName="Radio 1"
 *  inverted
 *  required
 *  />
 *
 *
 *
 *
 * ```
 * ### props: <br/>
 * - id - identificator of input element - it will connect with label to improve **a11y**<br/> isRequired: true<br/>default value: "radioInput"
 * - labelName - value for label to improve readable input<br/> isRequired: true<br/>default value: "Radio 1"
 * - required - set if user must fill this input or it's optional<br/> isRequired: false<br/>default value: false
 * - inverted - set layout order - first label then input or reversed <br/> isRequired: false<br/>default value: false
 */

const RadioButton = ({ labelName, id, isRequired, inverted }) => {
  const radioLayout = inverted && 'radioButton--inverted'
  return (
    // not sure how to concat basic BEM class with modifier in better way
    <div className={classNames(styles.radioButton, styles[radioLayout])}>
      <label className={classNames(styles.radioButton__label)} htmlFor={id}>
        {labelName}
      </label>
      <input
        id={id}
        className={classNames(styles.radioButton__value)}
        type="radio"
        required={isRequired}
      />
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  inverted: PropTypes.bool
}

RadioButton.defaultProps = {
  id: 'radioInput',
  labelName: 'Radio 1',
  isRequired: false,
  inverted: false
}

export default RadioButton
