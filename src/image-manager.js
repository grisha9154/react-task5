export default class ImageManager {
    constructor(url){
        this.imageObject = new Image();
        this.url = url;
    }

    load() {
        return new Promise((resolve) => {
            this.imageObject.onload = resolve;
            this.imageObject.src = this.url;
        });
    }
}