import { twMerge } from "tailwind-merge";

interface CardElementProps {
  className?: string;
  children: React.ReactNode;
}

export const CardHeader = ({ children, className }: CardElementProps) => {
  return <div className={twMerge("", className)}>{children}</div>;
};

export const CardTitle = ({ children, className }: CardElementProps) => {
  return <h2 className={twMerge("", className)}>{children}</h2>;
};

export const CardDescription = ({ children, className }: CardElementProps) => {
  return <p className={twMerge("", className)}>{children}</p>;
};

export const CardContent = ({ children, className }: CardElementProps) => {
  return <div className={twMerge("p-6", className)}>{children}</div>;
};

export const CardFooter = ({ children, className }: CardElementProps) => {
  return <div className={twMerge("p-6", className)}>{children}</div>;
};

const Card = ({ className, children }: CardElementProps) => {
  return (
    <div className={twMerge("rounded-lg shadow-md", className)}>{children}</div>
  );
};

export default Card;
