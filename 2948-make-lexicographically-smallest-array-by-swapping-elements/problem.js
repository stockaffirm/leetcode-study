window.PROBLEM = {
 "id": "2948",
 "title": "Make Lexicographically Smallest Array by Swapping Elements",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
