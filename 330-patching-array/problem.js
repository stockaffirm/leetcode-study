window.PROBLEM = {
 "id": "330",
 "title": "Patching Array",
 "level": "Hard",
 "topic": "Greedy",
 "question": "You are given a sorted list of positive numbers nums and a number n. You may add ('patch') extra numbers to the list. Return the fewest numbers you must add so that every whole number from 1 to n can be made as the sum of some of the numbers in the list (each list number used at most once). Example: nums=[1,3], n=6 → 1,3 and 1+3 = 4 are possible but 2 is not; add 2 and you can make 1..6 → 1 patch.",
 "why": "Add the fewest numbers to a sorted list so that every value from 1 to n can be made as a sum of some of its numbers.",
 "idea": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
 "input": "nums [1, 3], n=6",
 "output": "1",
 "notes": [],
 "best": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
 "variants": [
  {
   "name": "Greedy: extend the reachable range",
   "code": "class Solution:\n    def minPatches(self, nums, n):\n        patches, reach, i = 0, 0, 0\n        while reach < n:\n            if i < len(nums) and nums[i] <= reach + 1:\n                reach += nums[i]\n                i += 1\n            else:\n                reach += reach + 1\n                patches += 1\n        return patches",
   "time": "O(len + log n)",
   "space": "O(1)",
   "explain": "Keep 'reach' = every value up to it is already buildable. If the next list number is ≤ reach+1 it extends reach for free; otherwise patch in reach+1, which doubles the range.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Simulate subset sums",
   "tag": "Brute force",
   "code": "class Solution:\n    def minPatches(self, nums, n):\n        arr = list(nums)\n        patches = 0\n        while True:\n            sums = {0}\n            for x in arr: sums |= {s + x for s in sums}\n            missing = next((v for v in range(1, n + 1) if v not in sums), None)\n            if missing is None: return patches\n            arr.append(missing)\n            patches += 1",
   "time": "slow",
   "space": "O(n)",
   "explain": "Compute every reachable sum, find the smallest missing number, add it, repeat (tiny n only).",
   "frames": [],
   "alt": true
  }
 ]
};
