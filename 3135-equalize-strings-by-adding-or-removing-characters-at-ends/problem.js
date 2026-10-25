window.PROBLEM = {
 "id": "3135",
 "title": "Equalize Strings by Adding or Removing Characters at Ends",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "You can add or remove a character at either END of a string. Return the minimum number of such operations to turn initial into target. Example: initial 'abcde', target 'cdef' → 3.",
 "why": "'abcde' → 'cdef': keep the common block 'cde' (3 chars): remove 'ab' (2) and add 'f' (1) → 3.",
 "idea": "Characters can only be added or removed at the two ends, so what stays in the middle is a contiguous block common to both strings. Keep the longest common substring: everything else of the first string is removed and everything else of the target is added.",
 "input": "initial = \"abcde\", target = \"cdef\"",
 "output": "3",
 "notes": [],
 "best": "Characters can only be added or removed at the two ends, so what stays in the middle is a contiguous block common to both strings. Keep the longest common substring: everything else of the first string is removed and everything else of the target is added.",
 "variants": [
  {
   "name": "Keep the longest common substring",
   "code": "class Solution:\n    def minOperations(self, initial, target):\n        n, m = len(initial), len(target)\n        prev = [0] * (m + 1)\n        best = 0\n        for i in range(1, n + 1):\n            cur = [0] * (m + 1)\n            for j in range(1, m + 1):\n                if initial[i - 1] == target[j - 1]:\n                    cur[j] = prev[j - 1] + 1\n                    best = max(best, cur[j])\n            prev = cur\n        return n + m - 2 * best",
   "time": "O(n·m)",
   "space": "O(m)",
   "explain": "Characters can only be added or removed at the two ends, so what stays in the middle is a contiguous block common to both strings. Keep the longest common substring: everything else of the first string is removed and everything else of the target is added.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try every substring of initial",
   "tag": "Brute force",
   "code": "class Solution:\n    def minOperations(self, initial, target):\n        best = 0\n        for i in range(len(initial)):\n            for j in range(i + 1, len(initial) + 1):\n                if initial[i:j] in target:\n                    best = max(best, j - i)\n        return len(initial) + len(target) - 2 * best",
   "time": "O(n²·m)",
   "space": "O(1)",
   "explain": "Find the longest substring of the first string that also occurs in the second one.",
   "frames": [],
   "alt": true
  }
 ]
};
