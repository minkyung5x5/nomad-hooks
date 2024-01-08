const useNotification = (title, options) => {
    if (!("Notification" in window)) {
        return;
    }
    const fireNotif = () => {
        if (Notification.permission !== "granted") { // permission이 부여되지 않은 경우
            // promise를 준다.
            Notification.requestPermission().then((permission) => {
                if (permission === "granted") {
                    new Notification(title, options);
                } else return;
            });
        }
    };
    return fireNotif;

}

export default useNotification;

const App = () => {
    const triggerNotif = useNotification(
        "Hello, Can I hack your Computer?",
        { body: "If you agree, I will hack 😈" }
    );
    return (
        <div className="App" style={{ height: "1000vh" }}>
            <button onClick={triggerNotif}>Hello</button>
        </div>
    );
};