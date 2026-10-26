window.PROBLEM = {
 "id": "1512",
 "title": "Number of Good Pairs",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[1,2,3,1,1,3] → three 1s give 3 pairs, two 3s give 1 → 4.",
 "idea": "A value that appears c times forms c(c−1)/2 good pairs. Add them up.",
 "input": "nums = [1,2,3,1,1,3]",
 "output": "4",
 "notes": [],
 "best": "A value that appears c times forms c(c−1)/2 good pairs. Add them up.",
 "variants": [
  {
   "name": "Count equal pairs per value",
   "code": "class Solution:\n    def numIdenticalPairs(self, nums):\n        return sum(c * (c - 1) // 2 for c in Counter(nums).values())",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "A value that appears c times forms c(c−1)/2 good pairs. Add them up.",
   "frames": []
  }
 ]
};
