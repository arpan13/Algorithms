//By doing this method, we can find the shortest distance for all the cell in the grid from the starting point.

var minPathSum = function (grid) {
    //loops through all the cell in the grid:
    for (let i = 0; i < grid.length; i++)
        for (let j = 0; j < grid[0].length; j++)
            // if the position is (0,0) ,pass it...
            if (i == 0 && j == 0)
                continue
            // if i=0 then update the grid[0][j] position value by (0,j) + (0,j-1) position's value  { other_words:: current cell value + left cell of the current cell's value in the grid }
            else if (i == 0)
                grid[i][j] += grid[i][j - 1];
            // if j=0 then update the grid[i][0] position value by (i,0) + (i-1,0) position's value { other_words:: current cell value + top cell of the current cell's value in the grid }
            else if (j == 0)
                grid[i][j] += grid[i - 1][j];
            // else (both i and j are not equal to zero)
            else
                // current cell value + left cell of the current cell's value in the grid is smaller { < } then  current cell value + top cell of the current cell's value in the grid
                //if true ,update the grid[i][j] value by current cell value + left cell of the current cell's value in the grid
                if (grid[i][j] + grid[i][j - 1] < grid[i][j] + grid[i - 1][j])
                    grid[i][j] += grid[i][j - 1];
                //else ,update the grid[i][j] value by current cell value + top cell of the current cell's value in the grid
                else
                    grid[i][j] += grid[i - 1][j];
    //return the last cell value 
    return grid[grid.length - 1][grid[0].length - 1];
};
