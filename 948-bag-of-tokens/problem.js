window.PROBLEM = {
 "id": "948",
 "title": "Bag of Tokens",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "tokens [100,200,300,400], power 200 → play 100 (score 1), then... best score 2.",
 "idea": "Face-up a token to gain score for its cost in power; face-down a token to gain power for 1 score. Sort; use two pointers: while you can, buy the cheapest token (score +1); otherwise, if score > 0, sell the most expensive token for power (score −1). Track the best score.",
 "input": "tokens = [100,200,300,400], power = 200",
 "output": "2",
 "notes": [],
 "best": "Face-up a token to gain score for its cost in power; face-down a token to gain power for 1 score. Sort; use two pointers: while you can, buy the cheapest token (score +1); otherwise, if score > 0, sell the most expensive token for power (score −1). Track the best score.",
 "variants": [
  {
   "name": "Spend power on cheap tokens, gain it from expensive ones",
   "code": "class Solution:\n    def bagOfTokensScore(self, tokens, power):\n        tokens.sort()\n        lo, hi = 0, len(tokens) - 1\n        score = best = 0\n        while lo <= hi:\n            if power >= tokens[lo]:\n                power -= tokens[lo]\n                lo += 1\n                score += 1\n                best = max(best, score)\n            elif score > 0:\n                power += tokens[hi]\n                hi -= 1\n                score -= 1\n            else:\n                break\n        return best",
   "time": "O(n log n)",
   "space": "O(1)",
   "explain": "Face-up a token to gain score for its cost in power; face-down a token to gain power for 1 score. Sort; use two pointers: while you can, buy the cheapest token (score +1); otherwise, if score > 0, sell the most expensive token for power (score −1). Track the best score.",
   "frames": []
  }
 ]
};
