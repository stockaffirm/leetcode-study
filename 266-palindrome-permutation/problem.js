window.PROBLEM = {
 "id": "266",
 "title": "Palindrome Permutation",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "Return True if some rearrangement of the letters of the string is a palindrome. Example: 'carerac' → True ('racecar'); 'code' → False.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Toggle a set",
   "tag": "Alternative",
   "code": "class Solution:\n    def canPermutePalindrome(self, s):\n        odd = set()\n        for ch in s:\n            if ch in odd: odd.remove(ch)\n            else: odd.add(ch)\n        return len(odd) <= 1",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A letter is in the set while its count is odd.",
   "frames": [],
   "alt": true
  }
 ]
};
