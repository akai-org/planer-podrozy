import classNames from "classnames";
import styles from './RadioButton.module.scss';
import PropTypes from 'prop-types';

const RadioButton = ({labelName, id, required, inverted}) => {
    const radioLayout = inverted && "radioButton--inverted";
    return (
        <div className={classNames(styles['radioButton'], radioLayout)}>
            <label className={classNames(styles['radioButton__label'])} htmlFor={id}>{labelName}</label>
            <input className={classNames(styles['radioButton__value'])} type="radio" required={required} />
        </div>
    )
}

RadioButton.PropTypes = {
    id: PropTypes.string.isRequired,
    labelName: PropTypes.string.isRequired,
    required: PropTypes.bool,
    inverted: PropTypes.bool
}

RadioButton.defaultProps = {
    id: 'radioInput',
    labelName: 'Radio 1',
    required: false,
    inverted: false,
}

export default RadioButton;