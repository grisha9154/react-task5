import Circle from './src/circle.js';
import ImageManager from './src/image-manager.js';
import resizeImage from './src/resize-image.js';

(async function (){
    const mainCanvas = document.getElementById("mainCanvas");
    const mainCntx = mainCanvas.getContext('2d');
    const image = new ImageManager("lena.jpg");
    await image.load();
    mainCntx.drawImage(image.imageObject, 0, 0, 600, 600);
    const circle = new Circle();
    const cropButton = document.getElementById("cropButton");
    const imgElement = new Image(300, 300);
    document.getElementsByTagName('body')[0].appendChild(imgElement);

    cropButton.onclick = async () => {
        const dataUrl = await resizeImage(mainCanvas.toDataURL(),circle);
        imgElement.src = dataUrl;
    };
})();