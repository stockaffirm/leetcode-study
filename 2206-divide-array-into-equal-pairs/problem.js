window.PROBLEM = {
 "id": "2206",
 "title": "Divide Array Into Equal Pairs",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[3,2,3,2,2,2] → 3 appears twice, 2 four times → true.",
 "idea": "The array can be split into pairs of equal numbers exactly when every value occurs an even number of times.",
 "input": "nums = [3,2,3,2,2,2]",
 "output": "true",
 "notes": [],
 "best": "The array can be split into pairs of equal numbers exactly when every value occurs an even number of times.",
 "variants": [
  {
   "name": "Every value must appear an even number of times",
   "code": "class Solution:\n    def divideArray(self, nums):\n        return all(c % 2 == 0 for c in Counter(nums).values())",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The array can be split into pairs of equal numbers exactly when every value occurs an even number of times.",
   "frames": []
  }
 ]
};
