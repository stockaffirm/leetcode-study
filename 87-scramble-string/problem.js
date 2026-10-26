window.PROBLEM = {
 "id": "87",
 "title": "Scramble String",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "s1 'great', s2 'rgeat' → true.",
 "idea": "s2 is a scramble of s1 if some split point i gives either (s1[:i] ~ s2[:i] and s1[i:] ~ s2[i:]) or the swapped version (s1[:i] ~ s2[-i:] and s1[i:] ~ s2[:-i]). Strings with different letter counts can never match, which prunes the search. Memoise on (s1, s2).",
 "input": "s1 = \"great\", s2 = \"rgeat\"",
 "output": "true",
 "notes": [],
 "best": "s2 is a scramble of s1 if some split point i gives either (s1[:i] ~ s2[:i] and s1[i:] ~ s2[i:]) or the swapped version (s1[:i] ~ s2[-i:] and s1[i:] ~ s2[:-i]). Strings with different letter counts can never match, which prunes the search. Memoise on (s1, s2).",
 "variants": [
  {
   "name": "Memoised split: swapped or not swapped",
   "code": "class Solution:\n    def isScramble(self, s1, s2):\n        @lru_cache(None)\n        def go(a, b):\n            if a == b:\n                return True\n            if sorted(a) != sorted(b):\n                return False\n            n = len(a)\n            for i in range(1, n):\n                if go(a[:i], b[:i]) and go(a[i:], b[i:]):\n                    return True\n                if go(a[:i], b[n - i:]) and go(a[i:], b[:n - i]):\n                    return True\n            return False\n        return go(s1, s2)",
   "time": "O(n⁴)",
   "space": "O(n³)",
   "explain": "s2 is a scramble of s1 if some split point i gives either (s1[:i] ~ s2[:i] and s1[i:] ~ s2[i:]) or the swapped version (s1[:i] ~ s2[-i:] and s1[i:] ~ s2[:-i]). Strings with different letter counts can never match, which prunes the search. Memoise on (s1, s2).",
   "frames": []
  }
 ]
};
