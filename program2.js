const decodeTheRing = function (s, p) {
    const isMatch = (i, j) => {
        if (i >= s.length && j >= p.length) return true;
        if (j >= p.length) return false;

        if (p[j] === '*') {
            return isMatch(i, j + 1) || (i < s.length && isMatch(i + 1, j));
        }

        if (i < s.length && (p[j] === '?' || p[j] === s[i])) {
            return isMatch(i + 1, j + 1);
        }

        return false;
    };

    return isMatch(0, 0);
};

module.exports = decodeTheRing;
