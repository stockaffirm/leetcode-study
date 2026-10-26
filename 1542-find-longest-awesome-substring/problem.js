window.PROBLEM = {
 "id": "1542",
 "title": "Find Longest Awesome Substring",
 "level": "Hard",
 "topic": "Prefix Sum",
 "question": "",
 "why": "'3242415' → '24241' can be rearranged into a palindrome → 5.",
 "idea": "A substring can be rearranged into a palindrome if at most one digit occurs an odd number of times. Keep the parity mask of the prefix (bit d flips when digit d appears) and the earliest index of each mask. A substring ending here is awesome if an earlier prefix has the same mask or a mask differing in exactly one bit.",
 "input": "s = \"3242415\"",
 "output": "5",
 "notes": [],
 "best": "A substring can be rearranged into a palindrome if at most one digit occurs an odd number of times. Keep the parity mask of the prefix (bit d flips when digit d appears) and the earliest index of each mask. A substring ending here is awesome if an earlier prefix has the same mask or a mask differing in exactly one bit.",
 "variants": [
  {
   "name": "Prefix parity bitmask, allow at most one odd digit",
   "code": "class Solution:\n    def longestAwesome(self, s):\n        first = {0: -1}\n        mask = 0\n        best = 0\n        for i, c in enumerate(s):\n            mask ^= 1 << int(c)\n            if mask in first:\n                best = max(best, i - first[mask])\n            for d in range(10):\n                other = mask ^ (1 << d)\n                if other in first:\n                    best = max(best, i - first[other])\n            if mask not in first:\n                first[mask] = i\n        return best",
   "time": "O(10·n)",
   "space": "O(2¹⁰)",
   "explain": "A substring can be rearranged into a palindrome if at most one digit occurs an odd number of times. Keep the parity mask of the prefix (bit d flips when digit d appears) and the earliest index of each mask. A substring ending here is awesome if an earlier prefix has the same mask or a mask differing in exactly one bit.",
   "frames": []
  }
 ]
};
