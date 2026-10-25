window.PROBLEM = {
 "id": "2191",
 "title": "Sort the Jumbled Numbers",
 "level": "Medium",
 "topic": "Sorting",
 "question": "mapping[d] is the new value of digit d. A number's mapped value is obtained by replacing each digit. Sort nums by their mapped values in non-decreasing order, keeping the original order for equal mapped values, and return the original numbers. Example: [991,338,38] → [338,38,991].",
 "why": "mapping [8,9,4,0,2,1,3,5,7,6]: 991→669, 338→007, 38→07 → sorted order 338, 38, 991.",
 "idea": "Each digit d is replaced by mapping[d] to get the number's mapped value. Sort the original numbers by their mapped value; Python's sort is stable, so equal mapped values keep their original order.",
 "input": "mapping = [8,9,4,0,2,1,3,5,7,6], nums = [991,338,38]",
 "output": "[338, 38, 991]",
 "notes": [],
 "best": "Each digit d is replaced by mapping[d] to get the number's mapped value. Sort the original numbers by their mapped value; Python's sort is stable, so equal mapped values keep their original order.",
 "variants": [
  {
   "name": "Sort by mapped value (stable)",
   "code": "class Solution:\n    def sortJumbled(self, mapping, nums):\n        def mapped(x):\n            return int(''.join(str(mapping[int(d)]) for d in str(x)))\n        return sorted(nums, key=mapped)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Each digit d is replaced by mapping[d] to get the number's mapped value. Sort the original numbers by their mapped value; Python's sort is stable, so equal mapped values keep their original order.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort (mapped, index) pairs",
   "tag": "Alternative",
   "code": "class Solution:\n    def sortJumbled(self, mapping, nums):\n        def mapped(x):\n            v = 0\n            for d in str(x):\n                v = v * 10 + mapping[int(d)]\n            return v\n        return [x for _, _, x in sorted((mapped(x), i, x) for i, x in enumerate(nums))]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Attach the original index to break ties explicitly.",
   "frames": [],
   "alt": true
  }
 ]
};
