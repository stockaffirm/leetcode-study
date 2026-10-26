window.PROBLEM = {
 "id": "3737",
 "title": "Count Subarrays With Majority Element I",
 "level": "Medium",
 "topic": "Prefix Sum",
 "question": "",
 "why": "[1,2,2,3], target 2 → 5 subarrays.",
 "idea": "Map each element to +1 if it equals target and −1 otherwise. A subarray has target as majority exactly when its sum is positive, i.e. prefix[j+1] − prefix[i] > 0. With n ≤ 1000, compare all pairs of prefix sums.",
 "input": "nums = [1,2,2,3], target = 2",
 "output": "5",
 "notes": [],
 "best": "Map each element to +1 if it equals target and −1 otherwise. A subarray has target as majority exactly when its sum is positive, i.e. prefix[j+1] − prefix[i] > 0. With n ≤ 1000, compare all pairs of prefix sums.",
 "variants": [
  {
   "name": "+1 / −1 prefix sums, count pairs with positive sum",
   "code": "class Solution:\n    def countMajoritySubarrays(self, nums, target):\n        pref = [0]\n        for x in nums:\n            pref.append(pref[-1] + (1 if x == target else -1))\n        n = len(nums)\n        return sum(1 for i in range(n + 1) for j in range(i + 1, n + 1) if pref[j] > pref[i])",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Map each element to +1 if it equals target and −1 otherwise. A subarray has target as majority exactly when its sum is positive, i.e. prefix[j+1] − prefix[i] > 0. With n ≤ 1000, compare all pairs of prefix sums.",
   "frames": []
  }
 ]
};
