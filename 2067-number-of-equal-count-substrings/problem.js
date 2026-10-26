window.PROBLEM = {
 "id": "2067",
 "title": "Number of Equal Count Substrings",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'aaabcbbcc', count=3: three substrings (e.g. 'aaa') have every present letter exactly 3 times → 3.",
 "idea": "A substring where every letter that occurs does so exactly `count` times and which has d distinct letters has length d × count. For each d from 1 to 26 slide a window of that length while tracking how many letters currently occur exactly count times; when that number equals d the window is valid.",
 "input": "s = \"aaabcbbcc\", count = 3",
 "output": "3",
 "notes": [],
 "best": "A substring where every letter that occurs does so exactly `count` times and which has d distinct letters has length d × count. For each d from 1 to 26 slide a window of that length while tracking how many letters currently occur exactly count times; when that number equals d the window is valid.",
 "variants": [
  {
   "name": "Sliding window for each number of distinct letters",
   "code": "class Solution:\n    def equalCountSubstrings(self, s, count):\n        n = len(s)\n        res = 0\n        for d in range(1, 27):\n            L = d * count\n            if L > n:\n                break\n            freq = Counter()\n            good = 0\n            for i, c in enumerate(s):\n                freq[c] += 1\n                if freq[c] == count:\n                    good += 1\n                elif freq[c] == count + 1:\n                    good -= 1\n                if i >= L:\n                    old = s[i - L]\n                    if freq[old] == count:\n                        good -= 1\n                    freq[old] -= 1\n                    if freq[old] == count:\n                        good += 1\n                if i >= L - 1 and good == d:\n                    res += 1\n        return res",
   "time": "O(26·n)",
   "space": "O(1)",
   "explain": "A substring where every letter that occurs does so exactly `count` times and which has d distinct letters has length d × count. For each d from 1 to 26 slide a window of that length while tracking how many letters currently occur exactly count times; when that number equals d the window is valid.",
   "frames": []
  }
 ]
};
