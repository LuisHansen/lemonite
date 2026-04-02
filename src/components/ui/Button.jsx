import './Button.css';

export default function Button({ children, variant = 'primary', size = 'md', onClick, type = 'button', className = '' }) {
  return (
    <button
      type={type}
      className={`btn btn--${variant} btn--${size} ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
