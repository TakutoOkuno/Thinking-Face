import {FormEvent, useEffect, useRef, useState} from "react";
import * as React from "react";
import {drawImage} from "../utility/imageFunctions";

const App: React.FC = () => {
    const [scale, setScale] = useState(1);
    const canvas = useRef<HTMLCanvasElement | null>(null);
    const canvas2 = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvas.current === null || canvas2.current === null) {
            return;
        }
        drawImage("/img/thinking_face_hand.png", canvas.current, scale).then();
        drawImage("/img/thinking_face_without_hand.png", canvas2.current, scale).then();
    }, [scale]);

    const handleInput = (e: FormEvent<HTMLInputElement>) => {
        if (e == null || e.currentTarget == null || e.currentTarget.value == null) {
            return;
        }
        setScale(Number(e.currentTarget.value) / 100);
        console.log(scale);
    };

    return <div>
        <section>
            <canvas id="canvas2" ref={canvas2}/>
            <canvas id="canvas1" ref={canvas}/>
        </section>
        <input type="range" onInput={handleInput} min="50" max="200" defaultValue="100"/>
    </div>;
};

export default App;
