window.PROBLEM = {
 "id": "2248",
 "title": "Intersection of Multiple Arrays",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Given several lists of distinct positive integers, return the integers that appear in every list, sorted ascending. Example: [[3,1,2,4,5],[1,2,3,4],[3,4,5,6]] → [3,4].",
 "why": "Return the numbers that appear in every list, sorted ascending.",
 "idea": "Count in how many lists each number appears (each list has distinct numbers); keep the numbers whose count equals the number of lists.",
 "input": "[[3,1,2,4,5],[1,2,3,4],[3,4,5,6]]",
 "output": "[3,4]",
 "notes": [],
 "best": "Count in how many lists each number appears (each list has distinct numbers); keep the numbers whose count equals the number of lists.",
 "variants": [
  {
   "name": "Count occurrences across lists",
   "code": "class Solution:\n    def intersection(self, nums):\n        cnt = Counter(x for lst in nums for x in set(lst))\n        return sorted(x for x, c in cnt.items() if c == len(nums))",
   "time": "O(N log N)",
   "space": "O(N)",
   "explain": "Count in how many lists each number appears (each list has distinct numbers); keep the numbers whose count equals the number of lists.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Set intersection",
   "tag": "Pythonic",
   "code": "class Solution:\n    def intersection(self, nums):\n        common = set(nums[0])\n        for lst in nums[1:]: common &= set(lst)\n        return sorted(common)",
   "time": "O(N)",
   "space": "O(N)",
   "explain": "Intersect the sets of all lists.",
   "frames": [],
   "alt": true
  }
 ]
};
