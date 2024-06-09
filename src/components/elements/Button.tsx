export interface ButtonProps {
  children: JSX.Element | string;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonProps) {
  return (
    <button
      className="bg-asparagus py-xs px-md rounded-md"
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}
