
import { ReactNode } from "react";



export default function GradientText({
    children,
    className = "",
    colors = ["#e66465", "#9198e5", "#e66465", "#9198e5"],
    animationSpeed = 8,
    showBorder = false,
}) {
    const gradientStyle = {
        backgroundImage: `linear-gradient(to right, ${colors.join(", ")})`,
        animationDuration: `${animationSpeed}s`,
    };

    return (
        <div
            className={`font-medium w-fit transition-shadow duration-500 ease-out align-baseline relative ${className}`}
        >
            {showBorder && (
                <div
                    className="absolute top-0 left-0 right-0 bottom-0 bg-[length:300%_100%] animate-[gradient_linear_infinite] rounded-[inherit] z-0 pointer-events-none"
                    style={gradientStyle}
                >
                    <div
                        className="absolute w-[calc(100%-2px)] h-[calc(100%-2px)] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[inherit] z-[-1]"
                    />
                </div>
            )}
            <div
                className="inline relative z-[2] bg-[length:300%_100%] bg-clip-text text-transparent animate-[gradient_linear_infinite] align-baseline"
                style={gradientStyle}
            >
                {children}
            </div>
        </div>
    );
}