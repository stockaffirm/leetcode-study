window.PROBLEM = {
 "id": "697",
 "title": "Degree of an Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,2,3,1]: degree 2 (both 1 and 2); the shortest span is [2,2] → 2.",
 "idea": "The degree is the highest frequency. For each value remember its count, first index and last index. Among values whose count equals the degree, the answer is the shortest last − first + 1.",
 "input": "nums = [1,2,2,3,1]",
 "output": "2",
 "notes": [],
 "best": "The degree is the highest frequency. For each value remember its count, first index and last index. Among values whose count equals the degree, the answer is the shortest last − first + 1.",
 "variants": [
  {
   "name": "First/last position of the most frequent values",
   "code": "class Solution:\n    def findShortestSubArray(self, nums):\n        first, cnt = {}, Counter()\n        best, deg = 0, 0\n        for i, x in enumerate(nums):\n            first.setdefault(x, i)\n            cnt[x] += 1\n            length = i - first[x] + 1\n            if cnt[x] > deg or (cnt[x] == deg and length < best):\n                deg, best = cnt[x], length\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The degree is the highest frequency. For each value remember its count, first index and last index. Among values whose count equals the degree, the answer is the shortest last − first + 1.",
   "frames": []
  }
 ]
};
