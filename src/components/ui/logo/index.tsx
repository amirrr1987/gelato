import logo from '@/assets/images/react.svg';
import type { FC } from 'react';

interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  title?: string;
}

const sizes = {
  sm: 'w-10 h-10',
  md: 'w-16 h-16',
  lg: 'w-24 h-24',
} as const;

const Logo: FC<LogoProps> = ({ size = 'md', className = '', title = 'logo', ...rest }) => {
  return (
    <img src={logo} title={title} alt={title} className={`${sizes[size]} ${className}`} {...rest} />
  )
}

export default Logo;