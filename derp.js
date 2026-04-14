
elements.derp = {
    color: ["#ff0000","#cc0000","#ff4444"],
    category: "life",
    state: "solid",
    density: 1200,

    tick: function(pixel) {

        if (pixel.vx == null) pixel.vx = 0;
        if (pixel.vy == null) pixel.vy = 0;

        // gravity
        pixel.vy += 0.3;

        
        if (!isEmpty(pixel.x, pixel.y+1) && pixel.vy > 1) {
            pixel.vy = -pixel.vy * 0.5;
        }

       
        if (isEmpty(pixel.x, pixel.y + Math.sign(pixel.vy))) {
            movePixel(pixel, pixel.x, pixel.y + Math.sign(pixel.vy));
        } else {
            pixel.vy = 0;
        }

        if (isEmpty(pixel.x + Math.sign(pixel.vx), pixel.y)) {
            movePixel(pixel, pixel.x + Math.sign(pixel.vx), pixel.y);
        } else {
            pixel.vx *= -0.5;
        }

        if (Math.random() < 0.1) {
            pixel.vx += (Math.random() < 0.5 ? -1 : 1) * 0.5;
        }
        
        if (Math.random() < 0.02) {
            pixel.vx += (Math.random() - 0.5) * 4;
        }
        pixel.vx *= 0.98;
    }
};
