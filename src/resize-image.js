import ImageManager from "./image-manager.js";

export default async function resizeImage(dataUrl, circle) {
    const transformCanvas = document.createElement("canvas");
    transformCanvas.width = 600;
    transformCanvas.height = 600;
    const {x, y} = circle.getElementCoordinat();
    const image = new ImageManager(dataUrl);
    await image.load();
    transformCanvas.getContext("2d").drawImage(image.imageObject, x, y, 300, 300, 0, 0, 600, 600);
    
    return transformCanvas.toDataURL();
};