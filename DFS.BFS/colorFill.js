/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, newColor) {
    n = image.length;
    m = image[0].length;

    if (image[sr][sc] === newColor) return image;

    dfs(image, sr, sc, n, m, newColor);

    return image;
};


const dfs = (image, i, j, n, m, newColor) => {
    let color = image[i][j];
    image[i][j] = newColor;
    //*Traversing all four direction
    if (isValid(i - 1, j, n, m, image, color)) {
        dfs(image, i - 1, j, n, m, newColor)
    }
    if (isValid(i + 1, j, n, m, image, color)) {
        dfs(image, i + 1, j, n, m, newColor)
    }
    if (isValid(i, j - 1, n, m, image, color)) {
        dfs(image, i, j - 1, n, m, newColor)
    }
    if (isValid(i, j + 1, n, m, image, color)) {
        dfs(image, i, j + 1, n, m, newColor)
    }

}


const isValid = (i, j, n, m, image, color) => {
    if (i >= 0 && i < n && j >= 0 && j < m && image[i][j] === color) {
        return true;
    }
    return false;
}
