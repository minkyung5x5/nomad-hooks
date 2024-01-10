const useConfirm = (message = "", onConfirm, onCancel) => {
    if (!onConfirm || typeof onConfirm !== "function") {
        return;
    }
    if (onCancel && typeof onCancel !== "function") {
        return;
    }
    const confirmAction = () => {
        if (confirm(message)) {
            onConfirm();
        } else {
            onCancel();
        }
    };
    return confirmAction;
};

export default useConfirm;

const App = () => {
    const deleteWorld = () => console.log("deleting...");
    const abort = () => console.log("aborted");
    const confirmDelete = useConfirm("Are u sure?", deleteWorld);
    return (
        <button onClick={confirmDelete}>Delete</button>
    );
}