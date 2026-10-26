window.PROBLEM = {
 "id": "3517",
 "title": "Smallest Palindromic Rearrangement I",
 "level": "Medium",
 "topic": "Greedy",
 "question": "",
 "why": "'babab' → counts a:2, b:3 → left half 'ab', middle 'b' → 'abbba'.",
 "idea": "The input is a palindrome, so every letter appears an even number of times except possibly one. Put half of each letter in sorted order on the left, the odd letter in the middle, and mirror the left half on the right.",
 "input": "s = \"babab\"",
 "output": "\"abbba\"",
 "notes": [],
 "best": "The input is a palindrome, so every letter appears an even number of times except possibly one. Put half of each letter in sorted order on the left, the odd letter in the middle, and mirror the left half on the right.",
 "variants": [
  {
   "name": "Sorted left half, mirrored",
   "code": "class Solution:\n    def smallestPalindrome(self, s):\n        cnt = Counter(s)\n        half = ''.join(c * (cnt[c] // 2) for c in sorted(cnt))\n        mid = ''.join(c for c in cnt if cnt[c] % 2)\n        return half + mid + half[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The input is a palindrome, so every letter appears an even number of times except possibly one. Put half of each letter in sorted order on the left, the odd letter in the middle, and mirror the left half on the right.",
   "frames": []
  }
 ]
};
