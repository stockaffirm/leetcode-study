window.PROBLEM = {
 "id": "421",
 "title": "Maximum XOR of Two Numbers in an Array",
 "level": "Medium",
 "topic": "Trie",
 "question": "",
 "why": "[3,10,5,25,2,8] → 5 XOR (exclusive OR) 25 = 28.",
 "idea": "Build the answer from the highest bit down. At each bit take the set of all prefixes (numbers shifted right) and test whether the candidate answer with this bit set is achievable: there are prefixes a, b with a XOR (exclusive OR) b = candidate (check candidate XOR a in the set).",
 "input": "nums = [3,10,5,25,2,8]",
 "output": "28",
 "notes": [],
 "best": "Build the answer from the highest bit down. At each bit take the set of all prefixes (numbers shifted right) and test whether the candidate answer with this bit set is achievable: there are prefixes a, b with a XOR (exclusive OR) b = candidate (check candidate XOR a in the set).",
 "variants": [
  {
   "name": "Greedy bit by bit with prefix sets",
   "code": "class Solution:\n    def findMaximumXOR(self, nums):\n        ans = 0\n        for bit in range(max(nums).bit_length() - 1, -1, -1):\n            ans <<= 1\n            prefixes = {x >> bit for x in nums}\n            ans |= any((ans | 1) ^ p in prefixes for p in prefixes)\n        return ans",
   "time": "O(32·n)",
   "space": "O(n)",
   "explain": "Build the answer from the highest bit down. At each bit take the set of all prefixes (numbers shifted right) and test whether the candidate answer with this bit set is achievable: there are prefixes a, b with a XOR (exclusive OR) b = candidate (check candidate XOR a in the set).",
   "frames": []
  }
 ]
};
