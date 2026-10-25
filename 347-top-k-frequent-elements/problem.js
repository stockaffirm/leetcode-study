window.PROBLEM = {
 "id": "347",
 "title": "Top K Frequent Elements",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Given a list of numbers nums and a whole number k, return the k numbers that appear most often in the list, in any order (the answer is guaranteed to be unambiguous). Aim for better than O(n log n) (a bit slower than just reading the input once) time. Example: [1,1,1,2,2,3], k=2 → 1 appears 3 times, 2 appears twice → [1,2].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Counter.most_common",
   "tag": "Pythonic",
   "code": "class Solution:\n    def topKFrequent(self, nums, k):\n        return [x for x, _ in Counter(nums).most_common(k)]",
   "time": "O(n log k)",
   "space": "O(n)",
   "explain": "Let the standard library pick the k most common.",
   "frames": [],
   "alt": true
  },
  {
   "name": "Heap of size k",
   "tag": "Alternative",
   "code": "class Solution:\n    def topKFrequent(self, nums, k):\n        cnt = Counter(nums)\n        return nlargest(k, cnt.keys(), key=cnt.get)",
   "time": "O(n log k)",
   "space": "O(n)",
   "explain": "Count, then take the k keys with the largest counts using a heap.",
   "frames": [],
   "alt": true
  }
 ]
};
