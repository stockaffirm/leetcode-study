window.PROBLEM = {
 "id": "777",
 "title": "Swap Adjacent in LR String",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "'RXXLRXRXL' → 'XRLXXRRLX' is reachable → true.",
 "idea": "A swap 'XL' → 'LX' moves an L left, and 'RX' → 'XR' moves an R right. Ignoring X, both strings must show the same sequence of L and R; and each L may only be at the same or an earlier position in the result, each R at the same or a later one.",
 "input": "start = \"RXXLRXRXL\", result = \"XRLXXRRLX\"",
 "output": "true",
 "notes": [],
 "best": "A swap 'XL' → 'LX' moves an L left, and 'RX' → 'XR' moves an R right. Ignoring X, both strings must show the same sequence of L and R; and each L may only be at the same or an earlier position in the result, each R at the same or a later one.",
 "variants": [
  {
   "name": "Two pointers over the X-free letters",
   "code": "class Solution:\n    def canTransform(self, start, result):\n        if len(start) != len(result):\n            return False\n        i = j = 0\n        n = len(start)\n        while i < n or j < n:\n            while i < n and start[i] == 'X':\n                i += 1\n            while j < n and result[j] == 'X':\n                j += 1\n            if i == n or j == n:\n                return i == n and j == n\n            if start[i] != result[j]:\n                return False\n            if start[i] == 'L' and i < j:\n                return False\n            if start[i] == 'R' and i > j:\n                return False\n            i += 1\n            j += 1\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A swap 'XL' → 'LX' moves an L left, and 'RX' → 'XR' moves an R right. Ignoring X, both strings must show the same sequence of L and R; and each L may only be at the same or an earlier position in the result, each R at the same or a later one.",
   "frames": []
  }
 ]
};
