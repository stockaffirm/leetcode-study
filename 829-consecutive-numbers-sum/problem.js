window.PROBLEM = {
 "id": "829",
 "title": "Consecutive Numbers Sum",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "In how many ways can n be written as a sum of consecutive positive whole numbers? 5 = 5 = 2 + 3 → 2 ways.",
 "idea": "A run of k numbers starting at a sums to k·a + k(k−1)/2. For each k, check whether n − k(k−1)/2 is divisible by k (and the start is positive). k only goes up to about √(2n).",
 "input": "n = 5",
 "output": "2",
 "notes": [],
 "best": "A run of k numbers starting at a sums to k·a + k(k−1)/2. For each k, check whether n − k(k−1)/2 is divisible by k (and the start is positive). k only goes up to about √(2n).",
 "variants": [
  {
   "name": "Try every run length k",
   "code": "class Solution:\n    def consecutiveNumbersSum(self, n):\n        count, k = 0, 1\n        while k * (k + 1) // 2 <= n:\n            if (n - k * (k - 1) // 2) % k == 0: count += 1\n            k += 1\n        return count",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "A run of k numbers starting at a sums to k·a + k(k−1)/2. For each k, check whether n − k(k−1)/2 is divisible by k (and the start is positive). k only goes up to about √(2n).",
   "frames": []
  }
 ]
};
