window.PROBLEM = {
 "id": "3753",
 "title": "Total Waviness of Numbers in Range II",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "Range 120–130: 120, 121 and 130 each have one peak (the middle digit) → 3.",
 "idea": "Let F(N) = total waviness of all numbers 0…N; the answer is F(num2) − F(num1−1). Build F with a digit DP (Dynamic Programming) over the digits of N with state (position, previous two digits, still tight to N, number started). Each state returns (how many completions, sum of waviness of those completions); when adding a digit d, the previous digit becomes a peak/valley if it is strictly above/below both neighbours, which contributes 1 to every completion.",
 "input": "num1 = 120, num2 = 130",
 "output": "3",
 "notes": [],
 "best": "Let F(N) = total waviness of all numbers 0…N; the answer is F(num2) − F(num1−1). Build F with a digit DP (Dynamic Programming) over the digits of N with state (position, previous two digits, still tight to N, number started). Each state returns (how many completions, sum of waviness of those completions); when adding a digit d, the previous digit becomes a peak/valley if it is strictly above/below both neighbours, which contributes 1 to every completion.",
 "variants": [
  {
   "name": "Digit DP carrying (count, total waviness)",
   "code": "class Solution:\n    def totalWaviness(self, num1, num2):\n        def F(N):\n            if N < 0:\n                return 0\n            digs = list(map(int, str(N)))\n            L = len(digs)\n            @lru_cache(None)\n            def go(pos, a, b, tight, started):\n                if pos == L:\n                    return (1, 0)\n                lim = digs[pos] if tight else 9\n                cnt = tot = 0\n                for d in range(lim + 1):\n                    nt = tight and d == lim\n                    if not started and d == 0:\n                        c, t = go(pos + 1, -1, -1, nt, False)\n                        inc = 0\n                    else:\n                        c, t = go(pos + 1, b, d, nt, True)\n                        inc = 0\n                        if a != -1 and b != -1 and ((b > a and b > d) or (b < a and b < d)):\n                            inc = 1\n                    cnt += c\n                    tot += t + inc * c\n                return (cnt, tot)\n            return go(0, -1, -1, True, False)[1]\n        return F(num2) - F(num1 - 1)",
   "time": "O(len · 100 · 10)",
   "space": "O(len · 100)",
   "explain": "Let F(N) = total waviness of all numbers 0…N; the answer is F(num2) − F(num1−1). Build F with a digit DP (Dynamic Programming) over the digits of N with state (position, previous two digits, still tight to N, number started). Each state returns (how many completions, sum of waviness of those completions); when adding a digit d, the previous digit becomes a peak/valley if it is strictly above/below both neighbours, which contributes 1 to every completion.",
   "frames": []
  }
 ]
};
