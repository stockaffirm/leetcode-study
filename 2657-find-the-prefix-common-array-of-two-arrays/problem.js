window.PROBLEM = {
 "id": "2657",
 "title": "Find the Prefix Common Array of Two Arrays",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "A and B are permutations of 1 … n. The prefix common array C has C[i] = the number of values that appear in BOTH A[0..i] and B[0..i]. Return C. Example: A [1,3,2,4], B [3,1,2,4] → [0,2,3,4].",
 "why": "A = [1,3,2,4], B = [3,1,2,4]: after 2 numbers both prefixes hold {1,3} → 2 common; after 3 → 3; after 4 → 4.",
 "idea": "Count how often each number has appeared in either prefix. When a number's count reaches 2 it is present in both prefixes, so the running common total goes up. Record the total after each position.",
 "input": "A = [1,3,2,4], B = [3,1,2,4]",
 "output": "[0,2,3,4]",
 "notes": [],
 "best": "Count how often each number has appeared in either prefix. When a number's count reaches 2 it is present in both prefixes, so the running common total goes up. Record the total after each position.",
 "variants": [
  {
   "name": "Count numbers seen in both",
   "code": "class Solution:\n    def findThePrefixCommonArray(self, A, B):\n        cnt = Counter()\n        common = 0\n        res = []\n        for a, b in zip(A, B):\n            cnt[a] += 1\n            if cnt[a] == 2:\n                common += 1\n            cnt[b] += 1\n            if cnt[b] == 2:\n                common += 1\n            res.append(common)\n        return res",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count how often each number has appeared in either prefix. When a number's count reaches 2 it is present in both prefixes, so the running common total goes up. Record the total after each position.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Intersect the prefix sets",
   "tag": "Brute force",
   "code": "class Solution:\n    def findThePrefixCommonArray(self, A, B):\n        return [len(set(A[:i + 1]) & set(B[:i + 1])) for i in range(len(A))]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "For each prefix intersect the two sets of numbers.",
   "frames": [],
   "alt": true
  }
 ]
};
