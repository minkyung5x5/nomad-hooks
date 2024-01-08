const useScroll = () => {
    const [state, setState] = useState({
        x: 0,
        y: 0
    })
    const onSccroll = () => {
        setState({ y: window.scrollY, x: window.scrollX });
    }
    useEffect(() => {
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);
    return state
}

export default useScroll;

const App = () => {
    const { y } = useScroll();
    return (
        <div style={{ height: "1000vh" }}>
            <h1 style={{ position: "fixed", color: y > 100 ? "red" : "blue" }}>{onLine ? "Online" : "Offline"}</h1>
        </div>
    );
}