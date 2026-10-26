window.PROBLEM = {
 "id": "1312",
 "title": "Minimum Insertion Steps to Make a String Palindrome",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "'mbadm' → keep 'mam' (3) and insert the 2 others → 2 insertions.",
 "idea": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS (Longest Palindromic Subsequence), and LPS is the longest common subsequence of s and its reverse.",
 "input": "s = \"mbadm\"",
 "output": "2",
 "notes": [],
 "best": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS (Longest Palindromic Subsequence), and LPS is the longest common subsequence of s and its reverse.",
 "variants": [
  {
   "name": "Length minus the longest palindromic subsequence",
   "code": "class Solution:\n    def minInsertions(self, s):\n        t = s[::-1]\n        n = len(s)\n        prev = [0] * (n + 1)\n        for i in range(1, n + 1):\n            cur = [0] * (n + 1)\n            for j in range(1, n + 1):\n                if s[i - 1] == t[j - 1]:\n                    cur[j] = prev[j - 1] + 1\n                else:\n                    cur[j] = max(prev[j], cur[j - 1])\n            prev = cur\n        return n - prev[n]",
   "time": "O(n²)",
   "space": "O(n)",
   "explain": "Characters of a longest palindromic subsequence already pair up; every other character needs a partner inserted. So the answer is n − LPS (Longest Palindromic Subsequence), and LPS is the longest common subsequence of s and its reverse.",
   "frames": []
  }
 ]
};
