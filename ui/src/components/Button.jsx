/* eslint-disable react/prop-types */
const Button = ({
  fontColor = '#fff',
  bgColor = '#1b67dc',
  fontSize = '36px',
  width = '150px',
  height = '50px',
  borderRadius = '25px',
  border = 'none',
  onClick,
  children,
}) => (
  <button
    style={{
      color: fontColor,
      backgroundColor: bgColor,
      fontSize,
      width,
      height,
      borderRadius,
      border,
    }}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
