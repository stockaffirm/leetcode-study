window.PROBLEM = {
 "id": "2191",
 "title": "Sort the Jumbled Numbers",
 "level": "Medium",
 "topic": "Sorting",
 "question": "",
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
   "frames": []
  }
 ]
};
