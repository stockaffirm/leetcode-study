window.PROBLEM = {
 "id": "3307",
 "title": "Find the K-th Character in String Game II",
 "level": "Hard",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "k=5, ops [0,0,0] → word becomes 'aaaaaaaa' → 'a'.",
 "idea": "After each operation the word doubles; the second half is a copy of the first (shifted by one letter for an operation of type 1). Work backwards: if k lies in the second half, move it to the first half and add the shift of that operation. The count of shifts mod 26 gives the letter.",
 "input": "k = 10, operations = [0,1,0,1]",
 "output": "\"b\"",
 "notes": [],
 "best": "After each operation the word doubles; the second half is a copy of the first (shifted by one letter for an operation of type 1). Work backwards: if k lies in the second half, move it to the first half and add the shift of that operation. The count of shifts mod 26 gives the letter.",
 "variants": [
  {
   "name": "Undo the operations from the last one back",
   "code": "class Solution:\n    def kthCharacter(self, k, operations):\n        shift = 0\n        k -= 1\n        for i in range(len(operations) - 1, -1, -1):\n            half = 1 << i\n            if k >= half:\n                k -= half\n                shift += operations[i]\n        return chr(ord('a') + shift % 26)",
   "time": "O(log k)",
   "space": "O(1)",
   "explain": "After each operation the word doubles; the second half is a copy of the first (shifted by one letter for an operation of type 1). Work backwards: if k lies in the second half, move it to the first half and add the shift of that operation. The count of shifts mod 26 gives the letter.",
   "frames": []
  }
 ]
};
