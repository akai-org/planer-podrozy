import classNames from "classnames";
import styles from './RadioButton.module.scss';
import PropTypes from 'prop-types';

const RadioButton = ({labelName, id, required, inverted}) => {
    const radioLayout = inverted && "radioButton--inverted";
    return (
        // not sure how to concat basic BEM class with modifier in better way
        <div className={classNames(styles['radioButton'], styles[radioLayout])}>
            <label className={classNames(styles['radioButton__label'])} htmlFor={id}>{labelName}</label>
            <input id={id} className={classNames(styles['radioButton__value'])} type="radio" required={required} />
        </div>
    )
}

RadioButton.propTypes = {
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