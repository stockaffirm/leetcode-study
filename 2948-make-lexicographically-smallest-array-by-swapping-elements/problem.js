window.PROBLEM = {
 "id": "2948",
 "title": "Make Lexicographically Smallest Array by Swapping Elements",
 "level": "Medium",
 "topic": "Sorting",
 "question": "You are given a list nums and a number limit. You may swap two elements nums[i] and nums[j] whenever |nums[i] − nums[j]| ≤ limit, any number of times. Return the lexicographically smallest list you can get (smallest at the first position where lists differ). Example: [1,5,3,9,8], limit 2 → [1,3,5,8,9].",
 "why": "You may swap two elements whenever their values differ by at most `limit`. Make the list alphabetically smallest.",
 "idea": "Elements whose values chain together (neighbours in sorted order within the limit) can be rearranged freely. Sort values into such groups; put each group's sorted values back into that group's sorted positions.",
 "input": "[1,5,3,9,8], limit=2",
 "output": "[1,3,5,8,9]",
 "notes": [],
 "best": "Elements whose values chain together (neighbours in sorted order within the limit) can be rearranged freely. Sort values into such groups; put each group's sorted values back into that group's sorted positions.",
 "variants": [
  {
   "name": "Sort values, group neighbours within the limit",
   "code": "class Solution:\n    def lexicographicallySmallestArray(self, nums, limit):\n        order = sorted(range(len(nums)), key=lambda i: nums[i])\n        groups = [[order[0]]]\n        for a, b in zip(order, order[1:]):\n            if nums[b] - nums[a] <= limit: groups[-1].append(b)\n            else: groups.append([b])\n        res = nums[:]\n        for g in groups:\n            vals = sorted(nums[i] for i in g)\n            for i, v in zip(sorted(g), vals): res[i] = v\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Elements whose values chain together (neighbours in sorted order within the limit) can be rearranged freely. Sort values into such groups; put each group's sorted values back into that group's sorted positions.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Components by searching all pairs",
   "tag": "Brute force",
   "code": "class Solution:\n    def lexicographicallySmallestArray(self, nums, limit):\n        n = len(nums)\n        seen = [False] * n\n        res = nums[:]\n        for s in range(n):\n            if seen[s]: continue\n            comp, st = [], [s]\n            seen[s] = True\n            while st:\n                u = st.pop()\n                comp.append(u)\n                for v in range(n):\n                    if not seen[v] and abs(nums[u] - nums[v]) <= limit:\n                        seen[v] = True\n                        st.append(v)\n            for i, v in zip(sorted(comp), sorted(nums[i] for i in comp)): res[i] = v\n        return res",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Find connected groups by comparing every pair, then sort inside each group.",
   "frames": [],
   "alt": true
  }
 ]
};
