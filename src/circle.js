export default class Circle {
    constructor(){
        this.element = document.createElement('div');
        this.element.className = 'circle';
        const body = document.getElementsByTagName('body')[0];
        this.isActive = false;
        this.element.addEventListener('mousedown',  this.onMouseDownHandler.bind(this), true);
        this.element.addEventListener('mouseup', this.onMouseUpHandler.bind(this), true);
        document.addEventListener('mousemove', this.onMouseMoveHandler.bind(this), true);
        body.appendChild(this.element);
    }

    getElementCoordinat() {
        return {
            x: this.element.style.left.replace('px', ''),
            y: this.element.style.top.replace('px', ''),
        }
    }

    onMouseDownHandler(e) {
        this.isActive = true;
        this.offset = [
            this.element.offsetLeft - e.clientX,
            this.element.offsetTop - e.clientY
        ];
    }

    onMouseUpHandler () {
        this.isActive = false;
    }

    onMouseMoveHandler(e) {
        e.preventDefault();
        if (this.isActive) {
           let mousePosition = {
                x : e.clientX,
                y : e.clientY
            };
        this.element.style.left = (mousePosition.x + this.offset[0]) + 'px';
            this.element.style.top  = (mousePosition.y + this.offset[1]) + 'px';
        }
    }
}