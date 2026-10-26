window.PROBLEM = {
 "id": "1888",
 "title": "Minimum Number of Flips to Make the Binary String Alternating",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'111000' rotated to '110001'… best alternating target needs 2 flips.",
 "idea": "Moving the first character to the end (type 1) is free, so any rotation can be used; type 2 flips a bit. Look at s+s with a window of length n and compare it to the two alternating patterns 0101… and 1010…, tracking mismatches incrementally as the window slides. The answer is the smallest mismatch count seen.",
 "input": "s = \"111000\"",
 "output": "2",
 "notes": [],
 "best": "Moving the first character to the end (type 1) is free, so any rotation can be used; type 2 flips a bit. Look at s+s with a window of length n and compare it to the two alternating patterns 0101… and 1010…, tracking mismatches incrementally as the window slides. The answer is the smallest mismatch count seen.",
 "variants": [
  {
   "name": "Sliding window over s + s",
   "code": "class Solution:\n    def minFlips(self, s):\n        n = len(s)\n        t = s + s\n        diff0 = diff1 = 0\n        best = n\n        for i, c in enumerate(t):\n            if c != str(i % 2):\n                diff0 += 1\n            else:\n                diff1 += 1\n            if i >= n:\n                old = t[i - n]\n                if old != str((i - n) % 2):\n                    diff0 -= 1\n                else:\n                    diff1 -= 1\n            if i >= n - 1:\n                best = min(best, diff0, diff1)\n        return best",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Moving the first character to the end (type 1) is free, so any rotation can be used; type 2 flips a bit. Look at s+s with a window of length n and compare it to the two alternating patterns 0101… and 1010…, tracking mismatches incrementally as the window slides. The answer is the smallest mismatch count seen.",
   "frames": []
  }
 ]
};
