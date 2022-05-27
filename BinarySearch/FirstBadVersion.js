var solution = function (isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function (n) {
        let left = 0;
        let right = n;
        let mid = 0;
        while (right - left > 1) {
            mid = Math.floor((right + left) / 2);
            if (isBadVersion(mid)) {
                right = mid;
            } else left = mid;
        }
        return right
    };
};