const useBeforeLeave = (onBefore) => {
    if (typeof onBefore !== "function") {
        return;
    }
    const handle = event => {
        const { clientY } = event;
        if ((clientY) <= 0) {
            onBefore();
        }
    };
    useEffect(() => {
        document.addEventListener("mouseleave", handle);
        return () => document.removeEventListener("mouseleave", handle);
    }, []);
}

export default useBeforeLeave;

const App = () => {
    const begForLife = () => console.log("plz don't leave");
    useBeforeLeave(begForLife);
    return;
}