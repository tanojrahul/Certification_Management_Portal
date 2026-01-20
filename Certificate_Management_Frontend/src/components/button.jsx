// // One component per file - use DEFAULT export

// function Button({ text, color }) {
//   const style = {
//     padding: '10px 20px',
//     backgroundColor: color || 'blue',
//     color: 'white',
//     border: 'none',
//     borderRadius: '5px',
//     cursor: 'pointer',
//   };

//   return <button style={style}>{text}</button>;
// }

// // DEFAULT EXPORT - can import with any name
// export default Button;

function Button({
  text,
  height,
  width,
  color,
  textColor,
  type,
  icon,
  iconPosition,
  disabled
}) {

  const styles = {
    button: {
      height: height || '48px',
      width: width || '100%',
      backgroundColor: color || '#2563EB',   // default blue
      color: textColor || '#ffffff',
      border: 'none',
      borderRadius: '10px',
      fontSize: '16px',
      fontWeight: '600',
      cursor: disabled ? 'not-allowed' : 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: '8px',
      opacity: disabled ? 0.6 : 1,
      transition: 'all 0.2s ease',
      boxShadow: '0 6px 12px rgba(0,0,0,0.15)',
    },
  };

  return (
    <button
      type={type || 'button'}
      style={styles.button}
      disabled={disabled}
    >
      {icon && iconPosition === 'left' && icon}
      <span>{text}</span>
      {icon && iconPosition === 'right' && icon}
    </button>
  );
}

export default Button;
