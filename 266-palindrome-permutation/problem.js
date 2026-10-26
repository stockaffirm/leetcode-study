window.PROBLEM = {
 "id": "266",
 "title": "Palindrome Permutation",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "Can the letters of a string be rearranged into a palindrome?",
 "idea": "A palindrome has at most one letter with an odd count.",
 "input": "'carerac'",
 "output": "True",
 "notes": [],
 "best": "A palindrome has at most one letter with an odd count.",
 "variants": [
  {
   "name": "At most one odd count",
   "code": "class Solution:\n    def canPermutePalindrome(self, s):\n        return sum(c % 2 for c in Counter(s).values()) <= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A palindrome has at most one letter with an odd count.",
   "frames": []
  }
 ]
};
