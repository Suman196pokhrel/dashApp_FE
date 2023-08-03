export const smoothComeUp = {
    initial: { y: 70, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 20,

        },
    },
};

export const smoothComeDown = {
    initial: { y: -70, opacity: 0 },
    animate: {
        y: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 20,

        },
    },
};


export const smoothFromRight = {
    initial: { x: 70, opacity: 0 },
    animate: {
        x: 0,
        opacity: 1,
        transition: {
            type: 'spring',
            damping: 20,

        },
    },
};




