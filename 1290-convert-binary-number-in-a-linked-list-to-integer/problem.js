window.PROBLEM = {
 "id": "1290",
 "title": "Convert Binary Number in a Linked List to Integer",
 "level": "Easy",
 "topic": "Linked List",
 "question": "A singly linked list holds the bits of a binary number, most significant bit first. Return its decimal value. Example: 1 → 0 → 1 gives 5.",
 "why": "1 → 0 → 1 reads as binary 101 = 5.",
 "idea": "Walk the list from the most significant bit. For every node, shift the value left by one and add the node's bit.",
 "input": "head = [1,0,1]",
 "output": "5",
 "notes": [],
 "best": "Walk the list from the most significant bit. For every node, shift the value left by one and add the node's bit.",
 "variants": [
  {
   "name": "Shift and add each bit",
   "code": "class Solution:\n    def getDecimalValue(self, head):\n        v = 0\n        while head:\n            v = v * 2 + head.val\n            head = head.next\n        return v",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk the list from the most significant bit. For every node, shift the value left by one and add the node's bit.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect the bits",
   "tag": "Alternative",
   "code": "class Solution:\n    def getDecimalValue(self, head):\n        bits = []\n        while head:\n            bits.append(str(head.val))\n            head = head.next\n        return int(''.join(bits), 2)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Read the bits into a string and let int(…, 2) do the conversion.",
   "frames": [],
   "alt": true
  }
 ]
};
