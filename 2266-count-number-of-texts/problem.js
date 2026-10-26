window.PROBLEM = {
 "id": "2266",
 "title": "Count Number of Texts",
 "level": "Medium",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'22233' → 222 → {aaa, ab, ba, c} (4), 33 → {ee, f} (2) → 8.",
 "idea": "Texts are phone-key presses; a run of the same digit can be split into groups of up to 3 presses (4 for keys 7 and 9). dp[i] = number of ways to decode the first i presses = sum of dp[i−1], dp[i−2], dp[i−3] (and dp[i−4] for 7/9) while the previous presses are the same key.",
 "input": "pressedKeys = \"22233\"",
 "output": "8",
 "notes": [],
 "best": "Texts are phone-key presses; a run of the same digit can be split into groups of up to 3 presses (4 for keys 7 and 9). dp[i] = number of ways to decode the first i presses = sum of dp[i−1], dp[i−2], dp[i−3] (and dp[i−4] for 7/9) while the previous presses are the same key.",
 "variants": [
  {
   "name": "Break each run of the same key into letters",
   "code": "class Solution:\n    def countTexts(self, pressedKeys):\n        MOD = 10**9 + 7\n        n = len(pressedKeys)\n        dp = [0] * (n + 1)\n        dp[0] = 1\n        for i in range(1, n + 1):\n            c = pressedKeys[i - 1]\n            limit = 4 if c in '79' else 3\n            j = i\n            while j > 0 and i - j < limit and pressedKeys[j - 1] == c:\n                dp[i] += dp[j - 1]\n                j -= 1\n            dp[i] %= MOD\n        return dp[n]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Texts are phone-key presses; a run of the same digit can be split into groups of up to 3 presses (4 for keys 7 and 9). dp[i] = number of ways to decode the first i presses = sum of dp[i−1], dp[i−2], dp[i−3] (and dp[i−4] for 7/9) while the previous presses are the same key.",
   "frames": []
  }
 ]
};
