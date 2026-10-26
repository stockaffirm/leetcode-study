window.PROBLEM = {
 "id": "3306",
 "title": "Count of Substrings Containing Every Vowel and K Consonants II",
 "level": "Medium",
 "topic": "Sliding Window",
 "question": "",
 "why": "'aeioqq', k=1: the only window with all five vowels is 'aeio' + 'q', but it needs exactly one consonant, and no vowel set completes within one; the answer is 0.",
 "idea": "Count the substrings with all five vowels and at least k consonants, then subtract those with at least k+1. For a fixed right end the valid starts form a prefix of positions, so a sliding window (move left while the window still satisfies the 'at least' condition) gives the count in O(n).",
 "input": "word = \"aeioqq\", k = 1",
 "output": "0",
 "notes": [],
 "best": "Count the substrings with all five vowels and at least k consonants, then subtract those with at least k+1. For a fixed right end the valid starts form a prefix of positions, so a sliding window (move left while the window still satisfies the 'at least' condition) gives the count in O(n).",
 "variants": [
  {
   "name": "atLeast(k) − atLeast(k+1)",
   "code": "class Solution:\n    def countOfSubstrings(self, word, k):\n        def at_least(k):\n            vow = Counter()\n            cons = left = res = 0\n            for ch in word:\n                if ch in 'aeiou':\n                    vow[ch] += 1\n                else:\n                    cons += 1\n                while len(vow) == 5 and cons >= k:\n                    c = word[left]\n                    if c in 'aeiou':\n                        vow[c] -= 1\n                        if vow[c] == 0:\n                            del vow[c]\n                    else:\n                        cons -= 1\n                    left += 1\n                res += left\n            return res\n        return at_least(k) - at_least(k + 1)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Count the substrings with all five vowels and at least k consonants, then subtract those with at least k+1. For a fixed right end the valid starts form a prefix of positions, so a sliding window (move left while the window still satisfies the 'at least' condition) gives the count in O(n).",
   "frames": []
  }
 ]
};
