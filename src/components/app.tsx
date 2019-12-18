import {FormEvent, useEffect, useRef, useState} from "react";
import * as React from "react";
import {drawImage} from "../utility/imageFunctions";

const App: React.FC = () => {
    const [scale, setScale] = useState(1);
    const canvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvas.current === null) {
            return;
        }
        drawImage("/img/thinking_face.png", canvas.current, scale).then();
    }, [scale]);

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        if (e == null || e.currentTarget == null || e.currentTarget.value == null) {
            return;
        }
        setScale(Number(e.currentTarget.value) / 100);
        console.log(scale);
    };

    return <div>
        <h1>🤔</h1>
        <input type="range" onInput={handleInput} min="50" max="200" defaultValue="100"/>
        <section>
            <canvas ref={canvas}/>
        </section>
    </div>;
};

export default App;
