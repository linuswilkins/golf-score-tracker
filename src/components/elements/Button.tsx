export interface ButtonProps {
  children: JSX.Element | string;
  onClick?: () => void;
  styling?: string;
}

export default function Button({ children, onClick, styling }: ButtonProps) {
  let className = "py-xs px-md rounded-md ";
  if (!styling) {
    className += "bg-asparagus ";
  }

  return (
    <button className={className + styling} onClick={onClick} type="button">
      {children}
    </button>
  );
}
