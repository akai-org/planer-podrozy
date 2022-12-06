import styles from "./assets/styles/App.module.scss";
import { useEffect } from "react";

export default function App() {
    useEffect(() => {
        fetch("http://127.0.0.1:8000/")
            .then((response) => response.json())
            .then((data) => console.log(data))
            .catch((err) => console.error(err));
    }, []);

    return (
        <div className={styles.app}>
            <span>Test1</span>
        </div>
    );
}