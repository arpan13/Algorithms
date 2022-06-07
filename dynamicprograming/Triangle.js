var minimumTotal = function (triangle) {
    for (let i = triangle.length - 1; i >= 0; i--) {
        for (let j = 0; j < triangle[i].length - 1; j++) {
            triangle[i - 1][j] = Math.min(triangle[i][j], triangle[i][j + 1]) + triangle[i - 1][j];
        }
    }
    return triangle[0];
}