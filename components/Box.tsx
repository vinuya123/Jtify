import { twMerge } from "tailwind-merge";

interface BoxProps {
    children: React.ReactNode;
    className?: string;
}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return (
        <div
            className={twMerge(`
              bg-white bg-opacity-25
                rounded-lg
                h-fit
                w-full
            `,
                className
            )}
        >
            {children}
        </div>
    );
}

export default Box;