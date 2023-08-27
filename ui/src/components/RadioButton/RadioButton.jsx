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
 * - value - value which will be handled in the future in forms <br/> isRequired: true<br/>default value: id value
 * onSelected - prop to passing callback which will be handled in onChange event - to manipulate state in parent component<br/>isRequired: false<br/> default value: empty callback: () => { }
 */

const RadioButton = ({
  labelName,
  id,
  isRequired,
  inverted,
  value,
  onSelected
}) => {
  return (
    // not sure how to concat basic BEM class with modifier in better way
    <div
      className={classNames(
        styles['radio-button'],
        inverted && styles['radio-button--inverted']
      )}
    >
      <label className={classNames(styles['radio-button__label'])} htmlFor={id}>
        {labelName}
      </label>
      <input
        id={id}
        className={classNames(styles['radio-button__value'])}
        type="radio"
        value={value}
        onChange={onSelected}
        required={isRequired}
      />
    </div>
  )
}

RadioButton.propTypes = {
  id: PropTypes.string.isRequired,
  labelName: PropTypes.string.isRequired,
  isRequired: PropTypes.bool,
  inverted: PropTypes.bool,
  value: PropTypes.string.isRequired,
  onSelected: PropTypes.func
}

RadioButton.defaultProps = {
  id: 'radioInput',
  labelName: 'Radio 1',
  isRequired: false,
  inverted: false,
  value: 'radioInput',
  onSelected: () => {}
}

export default RadioButton
