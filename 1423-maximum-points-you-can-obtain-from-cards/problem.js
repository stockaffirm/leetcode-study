window.PROBLEM = {
 "id": "1423",
 "title": "Maximum Points You Can Obtain from Cards",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "Take exactly k cards, each from either end of the row. Maximise the total points.",
 "idea": "The cards you do NOT take form one block of n − k consecutive cards in the middle. Minimise the sum of that block with a sliding window and subtract it from the total.",
 "input": "[1,2,3,4,5,6,1], k=3",
 "output": "12",
 "notes": [],
 "best": "The cards you do NOT take form one block of n − k consecutive cards in the middle. Minimise the sum of that block with a sliding window and subtract it from the total.",
 "variants": [
  {
   "name": "Minimum window in the middle",
   "code": "class Solution:\n    def maxScore(self, cardPoints, k):\n        n, total = len(cardPoints), sum(cardPoints)\n        w = n - k\n        cur = sum(cardPoints[:w])\n        best = cur\n        for i in range(w, n):\n            cur += cardPoints[i] - cardPoints[i - w]\n            best = min(best, cur)\n        return total - best",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "The cards you do NOT take form one block of n − k consecutive cards in the middle. Minimise the sum of that block with a sliding window and subtract it from the total.",
   "frames": []
  }
 ]
};
