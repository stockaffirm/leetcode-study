window.PROBLEM = {
 "id": "2261",
 "title": "K Divisible Elements Subarrays",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Count the distinct non-empty subarrays (consecutive parts of the list; two are the same if they have the same elements in the same order) that contain at most k elements divisible by p. Example: nums [2,3,3,2,2], k=2, p=2 → 11.",
 "why": "Count the distinct non-empty subarrays containing at most k numbers divisible by p.",
 "idea": "For each start extend to the right while the divisible-count stays ≤ k, adding every prefix (as a tuple) to a set; the set removes duplicates.",
 "input": "[2,3,3,2,2], k=2, p=2",
 "output": "11",
 "notes": [],
 "best": "For each start extend to the right while the divisible-count stays ≤ k, adding every prefix (as a tuple) to a set; the set removes duplicates.",
 "variants": [
  {
   "name": "Set of distinct subarrays with an early stop",
   "code": "class Solution:\n    def countDistinct(self, nums, k, p):\n        seen = set()\n        for i in range(len(nums)):\n            cnt = 0\n            for j in range(i, len(nums)):\n                if nums[j] % p == 0: cnt += 1\n                if cnt > k: break\n                seen.add(tuple(nums[i:j + 1]))\n        return len(seen)",
   "time": "O(n³) worst",
   "space": "O(n²)",
   "explain": "For each start extend to the right while the divisible-count stays ≤ k, adding every prefix (as a tuple) to a set; the set removes duplicates.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Trie counting new nodes",
   "tag": "Alternative",
   "code": "class Solution:\n    def countDistinct(self, nums, k, p):\n        root, count = {}, 0\n        for i in range(len(nums)):\n            node, cnt = root, 0\n            for j in range(i, len(nums)):\n                if nums[j] % p == 0: cnt += 1\n                if cnt > k: break\n                if nums[j] not in node:\n                    node[nums[j]] = {}\n                    count += 1\n                node = node[nums[j]]\n        return count",
   "time": "O(n²)",
   "space": "O(n²)",
   "explain": "Insert every valid subarray into a trie; each new node is a new distinct subarray.",
   "frames": [],
   "alt": true
  }
 ]
};
