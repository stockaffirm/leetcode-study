window.PROBLEM = {
 "id": "2024",
 "title": "Maximize the Confusion of an Exam",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'TTFF', k=2 → change both F to T → 4.",
 "idea": "Make a run of the same answer by flipping at most k others. Slide a window that contains at most k 'T's (to turn into F) and separately at most k 'F's; the longest window over both is the answer.",
 "input": "answerKey = \"TTFF\", k = 2",
 "output": "4",
 "notes": [],
 "best": "Make a run of the same answer by flipping at most k others. Slide a window that contains at most k 'T's (to turn into F) and separately at most k 'F's; the longest window over both is the answer.",
 "variants": [
  {
   "name": "Sliding window with at most k opposite answers",
   "code": "class Solution:\n    def maxConsecutiveAnswers(self, answerKey, k):\n        def longest(ch):\n            left = bad = best = 0\n            for right, c in enumerate(answerKey):\n                bad += c != ch\n                while bad > k:\n                    bad -= answerKey[left] != ch\n                    left += 1\n                best = max(best, right - left + 1)\n            return best\n        return max(longest('T'), longest('F'))",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Make a run of the same answer by flipping at most k others. Slide a window that contains at most k 'T's (to turn into F) and separately at most k 'F's; the longest window over both is the answer.",
   "frames": []
  }
 ]
};
