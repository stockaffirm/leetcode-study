window.PROBLEM = {
 "id": "561",
 "title": "Array Partition",
 "level": "Easy",
 "topic": "Sorting",
 "question": "Split 2n numbers into n pairs to maximise the sum of the minimum of each pair. Return that sum. Example: [1,4,3,2] → 4.",
 "why": "[1,4,3,2] sorted [1,2,3,4]: pairs (1,2),(3,4) → 1 + 3 = 4.",
 "idea": "To maximise the sum of the minimums of the pairs, pair neighbours in sorted order; the minimum of each pair is the element at an even position.",
 "input": "nums = [1,4,3,2]",
 "output": "4",
 "notes": [],
 "best": "To maximise the sum of the minimums of the pairs, pair neighbours in sorted order; the minimum of each pair is the element at an even position.",
 "variants": [
  {
   "name": "Sort and take every other element",
   "code": "class Solution:\n    def arrayPairSum(self, nums):\n        return sum(sorted(nums)[::2])",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "To maximise the sum of the minimums of the pairs, pair neighbours in sorted order; the minimum of each pair is the element at an even position.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Bucket by value",
   "tag": "Alternative",
   "code": "class Solution:\n    def arrayPairSum(self, nums):\n        cnt = Counter(nums)\n        total = 0\n        take = True\n        for v in range(min(nums), max(nums) + 1):\n            c = cnt.get(v, 0)\n            while c:\n                if take:\n                    total += v\n                take = not take\n                c -= 1\n        return total",
   "time": "O(n + range)",
   "space": "O(range)",
   "explain": "Counting sort then take every other element.",
   "frames": [],
   "alt": true
  }
 ]
};
