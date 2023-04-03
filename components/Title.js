import { useState, useEffect } from "react";

const Title = (props) => {
    const size = useWindowSize();
    const [show, setShow] = useState(false)

    return (
        <p className="text-white text-2xl lg:whitespace-nowrap" onClick={() => setShow(!show)}>
            {size.width < 1024 && !show ? props.children.slice(0, size.width / 17) + "..." : props.children}
        </p>
    );
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    });

    useEffect(() => {
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight,
            });
        }

        window.addEventListener("resize", handleResize);

        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return windowSize;
}

export default Title;