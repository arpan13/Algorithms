var reverseWords = function (s) {
    let strArray = s.split(" ");
    // console.log(strArray);
    let result = [];

    for (word of strArray) {
        let l = 0;


        let w = word.split('')
        // console.log(w);
        let r = w.length - 1;

        while (l < r) {
            let temp = w[l];
            w[l] = w[r];
            w[r] = temp;
            l++;
            r--;
        }
        //console.log(w)
        result.push(w.join(''));
    }

    return result.join(" ");;
};

let s = "Let's take LeetCode contest";

console.log(reverseWords(s))
