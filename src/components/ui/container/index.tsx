import type { FC, HtmlHTMLAttributes } from "react";

interface ContainerProps extends HtmlHTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  title?: string;
}

const Container: FC<ContainerProps> = ({ children, className = '', title = 'container', ...rest }) => {
  return (
    <div className={`container w-full mx-auto ${className}`} {...rest}>{children}</div>
  )
}

export default Container;