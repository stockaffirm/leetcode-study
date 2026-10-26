window.PROBLEM = {
 "id": "3229",
 "title": "Minimum Operations to Make Array Equal to Target",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "",
 "why": "nums [3,5,1,2], target [4,6,2,4] → differences 1,1,1,2 → 2 operations.",
 "idea": "Let d[i] = target[i] − nums[i]. Adding or subtracting 1 on a subarray changes the difference array e (e[0] = d[0], e[i] = d[i] − d[i−1], e[n] = −d[n−1]) by +1 at one position and −1 at another. The e values sum to 0, so the minimum number of operations is half the sum of |e|.",
 "input": "nums = [3,5,1,2], target = [4,6,2,4]",
 "output": "2",
 "notes": [],
 "best": "Let d[i] = target[i] − nums[i]. Adding or subtracting 1 on a subarray changes the difference array e (e[0] = d[0], e[i] = d[i] − d[i−1], e[n] = −d[n−1]) by +1 at one position and −1 at another. The e values sum to 0, so the minimum number of operations is half the sum of |e|.",
 "variants": [
  {
   "name": "Half the total change of the difference array",
   "code": "class Solution:\n    def minimumOperations(self, nums, target):\n        prev = 0\n        total = 0\n        for a, b in zip(nums, target):\n            d = b - a\n            total += abs(d - prev)\n            prev = d\n        total += abs(prev)\n        return total // 2",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Let d[i] = target[i] − nums[i]. Adding or subtracting 1 on a subarray changes the difference array e (e[0] = d[0], e[i] = d[i] − d[i−1], e[n] = −d[n−1]) by +1 at one position and −1 at another. The e values sum to 0, so the minimum number of operations is half the sum of |e|.",
   "frames": []
  }
 ]
};
