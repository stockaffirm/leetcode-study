window.PROBLEM = {
 "id": "2327",
 "title": "Number of People Aware of a Secret",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=6, delay=2, forget=4 → 5 people know the secret on day 6.",
 "idea": "Let new[d] be the people who learn the secret on day d. A person starts sharing delay days later and stops forget days after learning. new[d] = sum of new[d − forget + 1 … d − delay] (those currently allowed to share). The answer is the sum of new over the last `forget` days. Modulo 1e9+7.",
 "input": "n = 6, delay = 2, forget = 4",
 "output": "5",
 "notes": [],
 "best": "Let new[d] be the people who learn the secret on day d. A person starts sharing delay days later and stops forget days after learning. new[d] = sum of new[d − forget + 1 … d − delay] (those currently allowed to share). The answer is the sum of new over the last `forget` days. Modulo 1e9+7.",
 "variants": [
  {
   "name": "Daily DP with a sliding sum of sharers",
   "code": "class Solution:\n    def peopleAwareOfSecret(self, n, delay, forget):\n        MOD = 10**9 + 7\n        new = [0] * (n + 1)\n        new[1] = 1\n        sharing = 0\n        for d in range(2, n + 1):\n            if d - delay >= 1:\n                sharing += new[d - delay]\n            if d - forget >= 1:\n                sharing -= new[d - forget]\n            new[d] = sharing % MOD\n        return sum(new[max(1, n - forget + 1):]) % MOD",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Let new[d] be the people who learn the secret on day d. A person starts sharing delay days later and stops forget days after learning. new[d] = sum of new[d − forget + 1 … d − delay] (those currently allowed to share). The answer is the sum of new over the last `forget` days. Modulo 1e9+7.",
   "frames": []
  }
 ]
};
