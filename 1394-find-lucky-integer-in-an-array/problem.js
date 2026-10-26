window.PROBLEM = {
 "id": "1394",
 "title": "Find Lucky Integer in an Array",
 "level": "Easy",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "[2,2,3,4]: 2 appears twice, so 2 is lucky (value = frequency). 3 and 4 appear once → the answer is 2.",
 "idea": "Count how often each number appears; a number is lucky if its value equals its count. Return the largest lucky number, or −1.",
 "input": "arr = [2,2,3,4]",
 "output": "2",
 "notes": [],
 "best": "Count how often each number appears; a number is lucky if its value equals its count. Return the largest lucky number, or −1.",
 "variants": [
  {
   "name": "Count, then compare value with count",
   "code": "class Solution:\n    def findLucky(self, arr):\n        cnt = Counter(arr)\n        return max((x for x, c in cnt.items() if x == c), default=-1)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Count how often each number appears; a number is lucky if its value equals its count. Return the largest lucky number, or −1.",
   "frames": []
  }
 ]
};
