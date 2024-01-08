const useFullscreen = (callback) => {
    const element = useRef();
    const runCb = (isFull) => {
        if (callback && typeof callback === "function") {
            callback(isFull);
        }
    };
    const triggerFull = () => {
        if (element.current) {
            if (element.current.requestFullscreen) {  //chrome
                element.current.requestFullscreen();
            } else if (element.current.webkitRequestFullscreen) {   //opera
                element.current.webkitRequestFullscreen();
            } else if (element.current.msRequestFullscreen) {   //Microsoft
                element.current.msRequestFullscreen();
            } else if (element.current.mozRequestFullScreen) {   //firefox
                element.current.mozRequestFullScreen();
            }
            runCb(true);
        }
    };
    const exitFull = () => {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitRequestFullscreen) {
            document.webkitRequestFullscreen();
        } else if (document.msRequestFullscreen) {
            document.msRequestFullscreen();
        } else if (document.mozRequestFullScreen) {
            document.mozRequestFullScreen();
        }
        runCb(false);
    };
    return { element, triggerFull, exitFull };
};

export default useFullscreen;

const App = () => {
    const onFullS = (isFull) => {
        console.log(isFull ? "we are full" : "we are small")
    }
    const { element, triggerFull, exitFull } = useFullscreen();
    return (
        <div style={{ height: "1000vh" }}>
            <div ref={element}>
                <img src="..."></img>
                <button onClick={trigerFull}>make fullscreen</button>
            </div>
            <button onClick={exitFull}>exit fullscreen</button>

        </div>
    );
} 