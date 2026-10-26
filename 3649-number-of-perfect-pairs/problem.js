window.PROBLEM = {
 "id": "3649",
 "title": "Number of Perfect Pairs",
 "level": "Medium",
 "topic": "Sorting",
 "question": "A pair of positions (i, j) with i < j is 'perfect' if, writing a = nums[i] and b = nums[j], min(|a−b|, |a+b|) ≤ min(|a|, |b|) AND max(|a−b|, |a+b|) ≥ max(|a|, |b|). Return the number of perfect pairs. Example: [0,1,2,3] → (1,2) and (2,3) are perfect → 2.",
 "why": "A pair (a, b) is 'perfect' if min(|a−b|, |a+b|) ≤ min(|a|,|b|) and max(|a−b|, |a+b|) ≥ max(|a|,|b|). Count perfect pairs.",
 "idea": "The condition simplifies to: after taking absolute values, the larger one is at most twice the smaller. Sort the absolute values and use a moving left pointer so that every partner is at least half the current value.",
 "input": "[0, 1, 2, 3]",
 "output": "2",
 "notes": [],
 "best": "The condition simplifies to: after taking absolute values, the larger one is at most twice the smaller. Sort the absolute values and use a moving left pointer so that every partner is at least half the current value.",
 "variants": [
  {
   "name": "Sort absolute values, two pointers",
   "code": "class Solution:\n    def perfectPairs(self, nums):\n        a = sorted(abs(x) for x in nums)\n        count, j = 0, 0\n        for i in range(len(a)):\n            while a[j] * 2 < a[i]: j += 1\n            count += i - j\n        return count",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "The condition simplifies to: after taking absolute values, the larger one is at most twice the smaller. Sort the absolute values and use a moving left pointer so that every partner is at least half the current value.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Apply the definition to every pair",
   "tag": "Brute force",
   "code": "class Solution:\n    def perfectPairs(self, nums):\n        count = 0\n        for i in range(len(nums)):\n            for j in range(i + 1, len(nums)):\n                a, b = nums[i], nums[j]\n                d1, d2 = abs(a - b), abs(a + b)\n                if min(d1, d2) <= min(abs(a), abs(b)) and max(d1, d2) >= max(abs(a), abs(b)): count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Test the original min/max condition on every pair.",
   "frames": [],
   "alt": true
  }
 ]
};
