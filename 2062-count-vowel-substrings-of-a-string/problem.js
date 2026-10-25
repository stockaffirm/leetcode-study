window.PROBLEM = {
 "id": "2062",
 "title": "Count Vowel Substrings of a String",
 "level": "Easy",
 "topic": "Array / String",
 "question": "A 'vowel substring' is a piece of the word (letters sitting next to each other) that consists ONLY of vowels (a, e, i, o, u) and contains ALL FIVE vowels at least once. Given a word, return how many vowel substrings it has. Example: 'aeiouu' → 'aeiou' and 'aeiouu' → 2.",
 "why": "Count the pieces of the word made ONLY of vowels that contain all five vowels (a, e, i, o, u).",
 "idea": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
 "input": "\"aeiouu\"",
 "output": "2",
 "notes": [],
 "best": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
 "variants": [
  {
   "name": "Extend from every start until a consonant",
   "code": "class Solution:\n    def countVowelSubstrings(self, word):\n        count = 0\n        for i in range(len(word)):\n            seen = set()\n            for j in range(i, len(word)):\n                if word[j] not in 'aeiou': break\n                seen.add(word[j])\n                if len(seen) == 5: count += 1\n        return count",
   "time": "O(n²)",
   "space": "O(1)",
   "explain": "From each start position extend to the right while letters are vowels, tracking the set of vowels seen; every time the set reaches 5 vowels count one piece.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "atMost(5) − atMost(4) per vowel run",
   "tag": "Alternative",
   "code": "class Solution:\n    def countVowelSubstrings(self, word):\n        def at_most(k):\n            total = 0\n            for run in ''.join(c if c in 'aeiou' else ' ' for c in word).split():\n                cnt, left = {}, 0\n                for right, ch in enumerate(run):\n                    cnt[ch] = cnt.get(ch, 0) + 1\n                    while len(cnt) > k:\n                        cnt[run[left]] -= 1\n                        if cnt[run[left]] == 0: del cnt[run[left]]\n                        left += 1\n                    total += right - left + 1\n            return total\n        return at_most(5) - at_most(4)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Split the word at consonants; in each run count windows with at most 5 distinct vowels minus those with at most 4.",
   "frames": [],
   "alt": true
  }
 ]
};
