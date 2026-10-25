window.PROBLEM = {
 "id": "3088",
 "title": "Make String Anti-palindrome",
 "level": "Hard",
 "topic": "Greedy",
 "question": "A string of even length n is an anti-palindrome if s[i] ≠ s[n−1−i] for every i. By swapping characters rearrange s into an anti-palindrome; if several exist return the lexicographically smallest, and return '-1' if impossible. Example: 'abca' → 'aabc'.",
 "why": "'abca' → sorted 'aabc' already has s[0]≠s[3] and s[1]≠s[2] → 'aabc'; 'cccd' can't be fixed → '-1'.",
 "idea": "An anti-palindrome has s[i] ≠ s[n−1−i] for every i. Start from the sorted string (smallest). Walk the second half: if s[i] equals its mirror, swap it with the first later character that differs (the smallest bigger letter); if there is none the answer is '-1'.",
 "input": "s = \"abca\"",
 "output": "\"aabc\"",
 "notes": [],
 "best": "An anti-palindrome has s[i] ≠ s[n−1−i] for every i. Start from the sorted string (smallest). Walk the second half: if s[i] equals its mirror, swap it with the first later character that differs (the smallest bigger letter); if there is none the answer is '-1'.",
 "variants": [
  {
   "name": "Sort, then fix clashes in the second half",
   "code": "class Solution:\n    def makeAntiPalindrome(self, s):\n        a = sorted(s)\n        n = len(a)\n        for i in range(n // 2, n):\n            if a[i] == a[n - 1 - i]:\n                j = i + 1\n                while j < n and a[j] == a[i]:\n                    j += 1\n                if j == n:\n                    return \"-1\"\n                a[i], a[j] = a[j], a[i]\n        return ''.join(a)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "An anti-palindrome has s[i] ≠ s[n−1−i] for every i. Start from the sorted string (smallest). Walk the second half: if s[i] equals its mirror, swap it with the first later character that differs (the smallest bigger letter); if there is none the answer is '-1'.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Place letters by counting",
   "tag": "Alternative",
   "code": "class Solution:\n    def makeAntiPalindrome(self, s):\n        cnt = Counter(s)\n        a = []\n        for c in sorted(cnt):\n            a.extend(c * cnt[c])\n        n = len(a)\n        for i in range(n // 2, n):\n            if a[i] == a[n - 1 - i]:\n                j = i + 1\n                while j < n and a[j] == a[i]:\n                    j += 1\n                if j == n:\n                    return \"-1\"\n                a[i], a[j] = a[j], a[i]\n        return ''.join(a)",
   "time": "O(n)",
   "space": "O(26)",
   "explain": "Build the sorted string from letter counts and apply the same fix-up on the second half.",
   "frames": [],
   "alt": true
  }
 ]
};
