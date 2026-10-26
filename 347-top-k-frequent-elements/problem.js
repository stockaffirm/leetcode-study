window.PROBLEM = {
 "id": "347",
 "title": "Top K Frequent Elements",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Which k numbers appear most often? [1,1,1,2,2,3], k=2 → 1 and 2.",
 "idea": "Count each number, then drop numbers into buckets indexed by how often they occur. Read buckets from the highest count down until you have k numbers — no sorting needed.",
 "input": "[1, 1, 1, 2, 2, 3], k=2",
 "output": "[1, 2]",
 "notes": [],
 "best": "Count each number, then drop numbers into buckets indexed by how often they occur. Read buckets from the highest count down until you have k numbers — no sorting needed.",
 "variants": [
  {
   "name": "Bucket sort by frequency",
   "code": "class Solution:\n    def topKFrequent(self, nums, k):\n        cnt = Counter(nums)\n        buckets = [[] for _ in range(len(nums) + 1)]\n        for num, c in cnt.items(): buckets[c].append(num)\n        ans = []\n        for c in range(len(nums), 0, -1):\n            for num in buckets[c]:\n                ans.append(num)\n                if len(ans) == k: return ans\n        return ans",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count each number, then drop numbers into buckets indexed by how often they occur. Read buckets from the highest count down until you have k numbers — no sorting needed.",
   "frames": []
  }
 ]
};
