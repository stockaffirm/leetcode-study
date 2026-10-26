window.PROBLEM = {
 "id": "2404",
 "title": "Most Frequent Even Element",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[0,1,2,2,4,4,1] → 2 and 4 both appear twice → smaller is 2.",
 "idea": "Count only the even numbers and pick the one with the highest count (smallest value on ties); return −1 if there is no even number.",
 "input": "nums = [0,1,2,2,4,4,1]",
 "output": "2",
 "notes": [],
 "best": "Count only the even numbers and pick the one with the highest count (smallest value on ties); return −1 if there is no even number.",
 "variants": [
  {
   "name": "Count evens; most frequent, smallest on ties",
   "code": "class Solution:\n    def mostFrequentEven(self, nums):\n        cnt = Counter(x for x in nums if x % 2 == 0)\n        if not cnt:\n            return -1\n        return min(cnt, key=lambda x: (-cnt[x], x))",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count only the even numbers and pick the one with the highest count (smallest value on ties); return −1 if there is no even number.",
   "frames": []
  }
 ]
};
