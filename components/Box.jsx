import { twMerge } from "tailwind-merge";

const Box = ({
    children,
    className
}) => {
    return (
        <div
            className={twMerge(`
              bg-white bg-opacity-10
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