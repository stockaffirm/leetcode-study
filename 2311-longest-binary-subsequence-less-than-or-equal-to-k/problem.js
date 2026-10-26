window.PROBLEM = {
 "id": "2311",
 "title": "Longest Binary Subsequence Less Than or Equal to K",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
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
   "frames": []
  }
 ]
};
