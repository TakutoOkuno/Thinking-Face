const drawImage = (imagePath: string, canvas: HTMLCanvasElement, scale: number): Promise<void> => {
    return new Promise((resolve, reject) => {
        const ctx = canvas.getContext("2d");
        if (ctx === null) {
            reject(new Error("Failed to getContext."));
            return;
        }
        const image = new Image();
        image.src = imagePath;
        // 画像ロードが完了してからキャンバスの準備をする
        image.onload = () => {
            // キャンバスのサイズを画像サイズに合わせる
            canvas.width = image.width * scale;
            canvas.height = image.height * scale;
            canvas.style.width = `${canvas.width / 32}px`;
            canvas.style.height = `${canvas.height / 32}px`;
            ctx.scale(scale,scale);
            // キャンバスに画像を描画（開始位置0,0）
            ctx.drawImage(image, 0, 0);
            resolve();
        };
    });
};

export {drawImage};
