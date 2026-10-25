window.PROBLEM = {
 "id": "2453",
 "title": "Destroy Sequential Targets",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "nums holds target values. Choose a seed from nums; it destroys every target equal to seed + c × space (c ≥ 0). Return the smallest seed that destroys the maximum number of targets. Example: [3,7,8,1,1,5], space=2 → 1.",
 "why": "[3,7,8,1,1,5], space=2: seed 1 destroys every odd value (3,7,1,1,5) → seed 1.",
 "idea": "A seed destroys all targets equal to seed + c·space, i.e. with the same remainder mod space. Count targets per remainder, pick the remainder with the most targets, and return the smallest number having that remainder.",
 "input": "nums = [3,7,8,1,1,5], space = 2",
 "output": "1",
 "notes": [],
 "best": "A seed destroys all targets equal to seed + c·space, i.e. with the same remainder mod space. Count targets per remainder, pick the remainder with the most targets, and return the smallest number having that remainder.",
 "variants": [
  {
   "name": "Group by remainder mod space",
   "code": "class Solution:\n    def destroyTargets(self, nums, space):\n        cnt = Counter(x % space for x in nums)\n        top = max(cnt.values())\n        return min(x for x in nums if cnt[x % space] == top)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A seed destroys all targets equal to seed + c·space, i.e. with the same remainder mod space. Count targets per remainder, pick the remainder with the most targets, and return the smallest number having that remainder.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every seed",
   "tag": "Brute force",
   "code": "class Solution:\n    def destroyTargets(self, nums, space):\n        best, who = -1, None\n        for s in sorted(nums):\n            c = sum(1 for x in nums if (x - s) % space == 0 and x >= s)\n            if c > best:\n                best, who = c, s\n        return who",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "Count the targets each seed destroys and pick the best (smallest on ties).",
   "frames": [],
   "alt": true
  }
 ]
};
