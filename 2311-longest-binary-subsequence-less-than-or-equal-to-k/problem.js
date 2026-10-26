window.PROBLEM = {
 "id": "2311",
 "title": "Longest Binary Subsequence Less Than or Equal to K",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Return the length of the longest subsequence of the binary string s whose value (as a binary number, leading zeros allowed) is at most k. Example: '1001010', k=5 → 5.",
 "why": "'1001010', k=5: take all zeros and the low-order ones that keep the value ≤ 5 → length 5.",
 "idea": "Leading zeros are free, so keep every 0. Scan from the right: add a 1 only while the value built so far (the bit's weight 2^position) still keeps the number ≤ k.",
 "input": "s = \"1001010\", k = 5",
 "output": "5",
 "notes": [],
 "best": "Leading zeros are free, so keep every 0. Scan from the right: add a 1 only while the value built so far (the bit's weight 2^position) still keeps the number ≤ k.",
 "variants": [
  {
   "name": "Keep all zeros; add ones from the right while they fit",
   "code": "class Solution:\n    def longestSubsequence(self, s, k):\n        value = 0\n        length = 0\n        weight = 1\n        for ch in reversed(s):\n            if ch == '0':\n                length += 1\n            elif value + weight <= k:\n                value += weight\n                length += 1\n            weight *= 2\n            if weight > k:\n                weight = k + 1\n        return length",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Leading zeros are free, so keep every 0. Scan from the right: add a 1 only while the value built so far (the bit's weight 2^position) still keeps the number ≤ k.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Try subsequence from the right with int()",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestSubsequence(self, s, k):\n        zeros = s.count('0')\n        value = 0\n        ones = 0\n        bits = 0\n        for ch in reversed(s):\n            if ch == '1':\n                if bits < 31 and value + (1 << bits) <= k:\n                    value += 1 << bits\n                    ones += 1\n            bits += 1\n        return zeros + ones",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count the zeros plus the largest suffix of ones that keeps the value ≤ k.",
   "frames": [],
   "alt": true
  }
 ]
};
