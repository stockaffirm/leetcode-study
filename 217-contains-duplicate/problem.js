window.PROBLEM = {
 "id": "217",
 "title": "Contains Duplicate",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Does any value appear at least twice? [1,2,3,1] → yes.",
 "idea": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
 "input": "[1, 2, 3, 1]",
 "output": "True",
 "notes": [],
 "best": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
 "variants": [
  {
   "name": "Set of seen values",
   "code": "class Solution:\n    def containsDuplicate(self, nums):\n        seen = set()\n        for x in nums:\n            if x in seen: return True\n            seen.add(x)\n        return False",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Remember what you have seen in a set; the first number already in the set is a duplicate.",
   "frames": []
  }
 ]
};
