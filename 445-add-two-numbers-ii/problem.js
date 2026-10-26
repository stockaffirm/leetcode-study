window.PROBLEM = {
 "id": "445",
 "title": "Add Two Numbers II",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "7243 + 564 = 7807 → list 7→8→0→7.",
 "idea": "The lists store the most significant digit first, so push both onto stacks to read digits from the end. Pop, add with carry, and put each new digit in front of the result list.",
 "input": "l1 = [7,2,4,3], l2 = [5,6,4]",
 "output": "[7, 8, 0, 7]",
 "notes": [],
 "best": "The lists store the most significant digit first, so push both onto stacks to read digits from the end. Pop, add with carry, and put each new digit in front of the result list.",
 "variants": [
  {
   "name": "Stacks give the least significant digit first",
   "code": "class Solution:\n    def addTwoNumbers(self, l1, l2):\n        a, b = [], []\n        while l1:\n            a.append(l1.val)\n            l1 = l1.next\n        while l2:\n            b.append(l2.val)\n            l2 = l2.next\n        head = None\n        carry = 0\n        while a or b or carry:\n            s = carry\n            if a:\n                s += a.pop()\n            if b:\n                s += b.pop()\n            carry, d = divmod(s, 10)\n            head = ListNode(d, head)\n        return head",
   "time": "O(n + m)",
   "space": "O(n + m)",
   "explain": "The lists store the most significant digit first, so push both onto stacks to read digits from the end. Pop, add with carry, and put each new digit in front of the result list.",
   "frames": []
  }
 ]
};
