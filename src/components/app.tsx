import {useEffect, useRef} from "react";
import * as React from "react";
import {drawImage} from "../utility/imageFunctions";

const App: React.FC = () => {
    const canvas = useRef<HTMLCanvasElement | null>(null);
    useEffect(() => {
        if (canvas.current === null) {
            return;
        }
        drawImage("/img/thinking_face.png", canvas.current).then();
    }, []);

    return <div>
        <h1>🤔</h1>
        <canvas ref={canvas}/>
    </div>;
};

export default App;
