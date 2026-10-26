window.PROBLEM = {
 "id": "234",
 "title": "Palindrome Linked List",
 "level": "Easy",
 "topic": "Linked List",
 "question": "A linked list is a chain of nodes where each node holds a value and points to the next one. Given the first node (head) of such a list, return true if the values read the same from the front and from the back (a palindrome), otherwise false. Try to use only a fixed amount of extra memory. Example: 1 → 2 → 2 → 1 → true; 1 → 2 → false.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Copy to a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def isPalindrome(self, head):\n        vals = []\n        while head:\n            vals.append(head.val)\n            head = head.next\n        return vals == vals[::-1]",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Copy the values to a list and compare with its reverse.",
   "frames": [],
   "alt": true
  }
 ]
};
