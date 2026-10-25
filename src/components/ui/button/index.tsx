import type { ButtonHTMLAttributes, PropsWithChildren, ReactNode } from "react";

type ButtonVariant = "fill" | "outline" | "text";

type Color = "primary" | "secondary";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, PropsWithChildren {
    variant?: ButtonVariant;
    color?: Color
    size?: "sm" | "md" | "lg";
    rounded?: "sm" | "md" | "lg";
    icon?: ReactNode;
}


const baseClasses =
    "rounded transition-all active:scale-95 cursor-pointer";

const colors = {
    primary: {
        fill: "bg-primary-500 text-primary-50",
        outline: "text-primary-500 border border-primary-500 active:bg-primary-100 active:text-primary-600",
        text: "text-primary-500 active:bg-primary-100 active:text-primary-600",
    },
    secondary: {
        fill: "bg-secondary-500 text-secondary-50",
        outline: "text-secondary-500 border border-secondary-500 active:bg-secondary-100 active:text-secondary-600",
        text: "text-secondary-500 active:text-secondary-600 active:bg-secondary-100",
    },
} as const;

const sizes = {
    sm: "py-1 px-2 text-sm",
    md: "py-2 px-3 text-base",
    lg: "py-3 px-4 text-lg",
} as const;

const roundeds = {
    sm: "rounded-lg",
    md: "rounded-xl",
    lg: "rounded-3xl",
} as const;

export const Button = ({
    variant = "fill",
    color = "primary",
    type = "button",
    size = "md",
    rounded = 'md',
    className = "",
    icon,
    children,
    ...rest
}: ButtonProps) => {
    const classes = `
    ${baseClasses}
    ${colors[color][variant]}
    ${sizes[size]}
    ${roundeds[rounded]}
    ${className}`;
    return (
        <button type={type} className={classes} {...rest}>
            {icon && <span className="mr-2">{icon}</span>}
            {children}
        </button>
    )
}



export default Button;