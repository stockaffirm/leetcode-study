window.PROBLEM = {
 "id": "1295",
 "title": "Find Numbers with Even Number of Digits",
 "level": "Easy",
 "topic": "Array / String",
 "question": "Return how many numbers in the array have an even number of digits. Example: [12,345,2,6,7896] → 2.",
 "why": "12 (2 digits) and 7896 (4 digits) have an even number of digits → 2.",
 "idea": "Turn each number into text, take its length and count the even lengths.",
 "input": "nums = [12,345,2,6,7896]",
 "output": "2",
 "notes": [],
 "best": "Turn each number into text, take its length and count the even lengths.",
 "variants": [
  {
   "name": "Count the digits",
   "code": "class Solution:\n    def findNumbers(self, nums):\n        return sum(len(str(x)) % 2 == 0 for x in nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Turn each number into text, take its length and count the even lengths.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Use the number's size",
   "tag": "Math",
   "code": "class Solution:\n    def findNumbers(self, nums):\n        return sum(int(log10(x)) % 2 == 1 for x in nums)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "A number has an even digit count when floor(log10(x)) is odd.",
   "frames": [],
   "alt": true
  }
 ]
};
