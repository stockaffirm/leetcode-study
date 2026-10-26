window.PROBLEM = {
 "id": "2557",
 "title": "Maximum Number of Integers to Choose From a Range II",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "banned [1,6,5], n=5, maxSum=6 → pick 2 and 3 → 2 (n and maxSum can be huge).",
 "idea": "Same greedy as part I (take the smallest available numbers), but n and maxSum are huge so we cannot loop. Sort the distinct banned numbers ≤ n. Between consecutive banned numbers the available values form a run; binary search how many numbers of that run fit in the remaining sum using the arithmetic-series formula. Stop as soon as a run cannot be taken completely.",
 "input": "banned = [1,6,5], n = 5, maxSum = 6",
 "output": "2",
 "notes": [],
 "best": "Same greedy as part I (take the smallest available numbers), but n and maxSum are huge so we cannot loop. Sort the distinct banned numbers ≤ n. Between consecutive banned numbers the available values form a run; binary search how many numbers of that run fit in the remaining sum using the arithmetic-series formula. Stop as soon as a run cannot be taken completely.",
 "variants": [
  {
   "name": "Arithmetic series between banned numbers",
   "code": "class Solution:\n    def maxCount(self, banned, n, maxSum):\n        bad = sorted({b for b in banned if b <= n})\n        prev = 0\n        count = 0\n        remaining = maxSum\n        for b in bad + [n + 1]:\n            lo, hi = prev + 1, b - 1\n            if lo <= hi:\n                L = hi - lo + 1\n                l, r = 0, L\n                while l < r:\n                    mid = (l + r + 1) // 2\n                    if mid * (2 * lo + mid - 1) // 2 <= remaining:\n                        l = mid\n                    else:\n                        r = mid - 1\n                count += l\n                remaining -= l * (2 * lo + l - 1) // 2\n                if l < L:\n                    return count\n            prev = b\n        return count",
   "time": "O(b log n)",
   "space": "O(b)",
   "explain": "Same greedy as part I (take the smallest available numbers), but n and maxSum are huge so we cannot loop. Sort the distinct banned numbers ≤ n. Between consecutive banned numbers the available values form a run; binary search how many numbers of that run fit in the remaining sum using the arithmetic-series formula. Stop as soon as a run cannot be taken completely.",
   "frames": []
  }
 ]
};
