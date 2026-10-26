window.PROBLEM = {
 "id": "234",
 "title": "Palindrome Linked List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "",
 "why": "Does the list read the same forwards and backwards? 1→2→2→1 → yes.",
 "idea": "Find the middle with a slow and a fast pointer, reverse the second half in place, then walk both halves together comparing values.",
 "input": "1 → 2 → 2 → 1",
 "output": "True",
 "notes": [],
 "best": "Find the middle with a slow and a fast pointer, reverse the second half in place, then walk both halves together comparing values.",
 "variants": [
  {
   "name": "Reverse the second half and compare",
   "code": "class Solution:\n    def isPalindrome(self, head):\n        slow = fast = head\n        while fast and fast.next:\n            slow, fast = slow.next, fast.next.next\n        prev = None\n        while slow:\n            nxt = slow.next\n            slow.next = prev\n            prev, slow = slow, nxt\n        a, b = head, prev\n        while b:\n            if a.val != b.val: return False\n            a, b = a.next, b.next\n        return True",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Find the middle with a slow and a fast pointer, reverse the second half in place, then walk both halves together comparing values.",
   "frames": []
  }
 ]
};
