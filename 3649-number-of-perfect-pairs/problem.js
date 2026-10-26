window.PROBLEM = {
 "id": "3649",
 "title": "Number of Perfect Pairs",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
