const drawImage = (imagePath: string, canvas: HTMLCanvasElement) => {
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
            canvas.width = image.width * 2;
            canvas.height = image.height * 2;
            canvas.style.width = `${canvas.width / 8}px`;
            canvas.style.height = `${canvas.height / 8}px`;
            ctx.scale(2,2);
            // キャンバスに画像を描画（開始位置0,0）
            ctx.drawImage(image, 0, 0);
            resolve();
        };
    });
};

export {drawImage};
