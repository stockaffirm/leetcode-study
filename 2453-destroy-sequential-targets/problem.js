window.PROBLEM = {
 "id": "2453",
 "title": "Destroy Sequential Targets",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
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
   "frames": []
  }
 ]
};
