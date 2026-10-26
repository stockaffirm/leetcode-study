window.PROBLEM = {
 "id": "164",
 "title": "Maximum Gap",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
 "why": "After sorting, what is the biggest difference between neighbouring numbers? Do it without a full sort.",
 "idea": "With n numbers the biggest gap is at least (max−min)/(n−1). Drop numbers into buckets of that width, keeping only each bucket's min and max; the answer is the largest gap between one bucket's max and the next non-empty bucket's min.",
 "input": "[3, 6, 9, 1]",
 "output": "3",
 "notes": [],
 "best": "With n numbers the biggest gap is at least (max−min)/(n−1). Drop numbers into buckets of that width, keeping only each bucket's min and max; the answer is the largest gap between one bucket's max and the next non-empty bucket's min.",
 "variants": [
  {
   "name": "Buckets (pigeonhole) in linear time",
   "code": "class Solution:\n    def maximumGap(self, nums):\n        n = len(nums)\n        if n < 2: return 0\n        lo, hi = min(nums), max(nums)\n        if lo == hi: return 0\n        size = max(1, (hi - lo) // (n - 1))\n        count = (hi - lo) // size + 1\n        mins, maxs = [None] * count, [None] * count\n        for x in nums:\n            i = (x - lo) // size\n            mins[i] = x if mins[i] is None else min(mins[i], x)\n            maxs[i] = x if maxs[i] is None else max(maxs[i], x)\n        best, prev = 0, lo\n        for i in range(count):\n            if mins[i] is None: continue\n            best = max(best, mins[i] - prev)\n            prev = maxs[i]\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "With n numbers the biggest gap is at least (max−min)/(n−1). Drop numbers into buckets of that width, keeping only each bucket's min and max; the answer is the largest gap between one bucket's max and the next non-empty bucket's min.",
   "frames": []
  }
 ]
};
