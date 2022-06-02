/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    n = grid.length;
    m = grid[0].length;
    let ans = 0;
    let area = []
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j] == 1) {
                area[0] = 0;
                dfs(i, j, n, m, grid, area);
                ans = Math.max(ans, area[0]);
            }
        }
    }
    return ans;
};


const dfs = (i, j, n, m, grid, area) => {
    grid[i][j] = 0;
    area[0]++;


    if (isValid(i - 1, j, n, m, grid)) {
        dfs(i - 1, j, n, m, grid, area);
    }
    if (isValid(i + 1, j, n, m, grid)) {
        dfs(i + 1, j, n, m, grid, area);
    }
    if (isValid(i, j - 1, n, m, grid)) {
        dfs(i, j - 1, n, m, grid, area);

    }
    if (isValid(i, j + 1, n, m, grid)) {
        dfs(i, j + 1, n, m, grid, area);

    }

}


const isValid = (i, j, n, m, grid) => {
    if (i >= 0 && i < n && j >= 0 && j < m && grid[i][j] == 1) {
        return true;
    }
    return false;
}
