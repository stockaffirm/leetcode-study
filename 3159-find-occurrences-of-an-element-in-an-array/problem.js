window.PROBLEM = {
 "id": "3159",
 "title": "Find Occurrences of an Element in an Array",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "nums [1,3,1,7], x=1: positions are [0,2]; the 1st → 0, 3rd → −1.",
 "idea": "Store the indices where x occurs. The k-th occurrence is positions[k−1] if it exists, otherwise −1.",
 "input": "nums = [1,3,1,7], queries = [1,3,2,4], x = 1",
 "output": "[0, -1, 2, -1]",
 "notes": [],
 "best": "Store the indices where x occurs. The k-th occurrence is positions[k−1] if it exists, otherwise −1.",
 "variants": [
  {
   "name": "List the positions of x, answer by index",
   "code": "class Solution:\n    def occurrencesOfElement(self, nums, queries, x):\n        pos = [i for i, v in enumerate(nums) if v == x]\n        return [pos[q - 1] if q <= len(pos) else -1 for q in queries]",
   "time": "O(n + q)",
   "space": "O(n)",
   "explain": "Store the indices where x occurs. The k-th occurrence is positions[k−1] if it exists, otherwise −1.",
   "frames": []
  }
 ]
};
