var checkInclusion = function (s1, s2) {
    // Build a cache of the existing letter counts we need to match
    // An array that maps to each letter index is faster but a little harder to implement, can be done with `letter.charCodeAt(0)` if you want to convert this
    const keys = {};
    const s1N = s1.length;
    for (let i = 0; i < s1N; i++) {
        const letter = s1[i];
        keys[letter] = (keys[letter] || 0) + 1;
    }

    // Track existing matches in our sliding window
    const matchCount = {};
    const s2N = s2.length;

    // Pointers used to slide a window of possible solutions
    let left = 0;
    let right = 0;

    while (right < s2N) {
        const letter = s2[right];

        // Track the new letter
        matchCount[letter] = (matchCount[letter] || 0) + 1;

        // Remove all letters that exceed our letter count by bumping up the left pointer
        while (matchCount[letter] > (keys[letter] || 0)) {
            matchCount[s2[left]] -= 1;
            left++;
        }

        // Get the window length and exit early if we have a match
        if (right - left + 1 === s1N) return true;

        // Increment the right to increase the window size
        right++;
    }

    // No match was found, exit early
    return false;
};