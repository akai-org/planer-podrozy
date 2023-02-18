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
      fontSize: fontSize,
      width: width,
      height: height,
      borderRadius: borderRadius,
      border: border,
    }}
    onClick={onClick}
  >
    {children}
  </button>
)

export default Button
