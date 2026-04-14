
elements.derp = {
    color: "#ff0000",
    category: "life",
    state: "solid",

    behavior: [
        "XX|XX|XX",
        "M1|XX|M1",
        "XX|M1|XX",
    ],

    tick: function(pixel) {
        // gravity
        if (isEmpty(pixel.x, pixel.y+1)) {
            movePixel(pixel, pixel.x, pixel.y+1);
        }

        // immortal
        pixel.dead = false;
        pixel.burning = false;
        pixel.temp = 20;
    }
};
