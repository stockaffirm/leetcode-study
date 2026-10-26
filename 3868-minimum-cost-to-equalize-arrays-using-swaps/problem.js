window.PROBLEM = {
 "id": "3868",
 "title": "Minimum Cost to Equalize Arrays Using Swaps",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "Two arrays of the same length. Swapping two elements inside one array is free; swapping nums1[i] with nums2[i] costs 1. Make the two arrays identical at minimum cost (−1 if impossible).",
 "idea": "Free swaps mean only the multiset of each array matters. Every value must appear an even number of times in total. The arrays are equal when each value has the same count in both; each paid swap fixes one surplus value in nums1 against one in nums2, so the cost is the total surplus of nums1.",
 "input": "nums1 [10,20], nums2 [20,10]",
 "output": "0",
 "notes": [],
 "best": "Free swaps mean only the multiset of each array matters. Every value must appear an even number of times in total. The arrays are equal when each value has the same count in both; each paid swap fixes one surplus value in nums1 against one in nums2, so the cost is the total surplus of nums1.",
 "variants": [
  {
   "name": "Count the excess values",
   "code": "class Solution:\n    def minCost(self, nums1, nums2):\n        c1, c2 = Counter(nums1), Counter(nums2)\n        cost = 0\n        for v in set(c1) | set(c2):\n            if (c1[v] + c2[v]) % 2: return -1\n            cost += max(0, (c1[v] - c2[v]) // 2)\n        return cost",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Free swaps mean only the multiset of each array matters. Every value must appear an even number of times in total. The arrays are equal when each value has the same count in both; each paid swap fixes one surplus value in nums1 against one in nums2, so the cost is the total surplus of nums1.",
   "frames": []
  }
 ]
};
