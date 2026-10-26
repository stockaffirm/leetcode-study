window.PROBLEM = {
 "id": "2472",
 "title": "Maximum Number of Non-overlapping Palindrome Substrings",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "Pick as many non-overlapping substrings as possible, each a palindrome of length at least k.",
 "idea": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
 "input": "'abaccdbbd', k=3",
 "output": "2",
 "notes": [],
 "best": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
 "variants": [
  {
   "name": "Greedy: earliest-ending short palindrome",
   "code": "class Solution:\n    def maxPalindromes(self, s, k):\n        count, last = 0, 0\n        for i in range(len(s)):\n            for L in (k, k + 1):\n                st = i - L + 1\n                if st >= last:\n                    t = s[st:i + 1]\n                    if t == t[::-1]:\n                        count += 1\n                        last = i + 1\n                        break\n        return count",
   "time": "O(n·k)",
   "space": "O(k)",
   "explain": "Any palindrome longer than k+1 contains a palindrome of length k or k+1 in its middle that ends earlier. So only lengths k and k+1 matter: scan left to right and take a palindrome of those lengths as soon as one ends (and starts after the last pick).",
   "frames": []
  }
 ]
};
