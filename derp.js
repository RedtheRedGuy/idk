elements.derp = {
    color: "#ff0000",
    category: "life",
    state: "solid",
    density: 1000,

    behavior: [
        "XX|XX|XX",
        "M1|XX|M1",
        "XX|M1|XX",
    ],

    tick: function(pixel) {

        // gravity
        if (isEmpty(pixel.x, pixel.y+1)) {
            movePixel(pixel, pixel.x, pixel.y+1);
            return;
        }

        // small random movement
        let dir = Math.random() < 0.5 ? -1 : 1;
        if (isEmpty(pixel.x+dir, pixel.y)) {
            movePixel(pixel, pixel.x+dir, pixel.y);
        }

        // IMMORTAL
        pixel.dead = false;
        pixel.burning = false;
        pixel.temp = 20;
    }
};
