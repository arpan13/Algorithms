/** 1) Brute force */
// time O(n^2)
// space O(1)
function trap(height) {
    if (height == null || height.length === 0) return 0;

    let res = 0;
    for (let i = 0; i < height.length; i++) {
        let lMax = 0;
        let rMax = 0;

        for (let j = 0; j < i; j++) {
            lMax = Math.max(lMax, height[j]);
        }
        for (let j = i + 1; j < height.length; j++) {
            rMax = Math.max(rMax, height[j]);
        }

        const water = Math.min(lMax, rMax) - height[i];
        if (water > 0) res += water;
    }

    return res;
}

/** 2) Dynamic programming */
// time O(n)
// space O(n)
function trap(height) {
    if (height == null || height.length === 0) return 0;

    let res = 0;
    let l = height.length;
    let lMax = {};
    let rMax = {};

    lMax[0] = height[0];
    for (let i = 1; i < l; i++) {
        lMax[i] = Math.max(height[i], lMax[i - 1]);
    }

    rMax[l - 1] = height[l - 1];
    for (let i = l - 2; i >= 0; i--) {
        rMax[i] = Math.max(height[i], rMax[i + 1]);
    }

    for (let i = 0; i < height.length; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }

    return res;
}
