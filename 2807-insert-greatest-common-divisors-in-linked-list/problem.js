window.PROBLEM = {
 "id": "2807",
 "title": "Insert Greatest Common Divisors in Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "[18,6,10,3] → [18,6,6,2,10,1,3].",
 "idea": "For each adjacent pair (a, b) insert a node holding gcd(a, b) between them. Walk with one pointer, create the node, link it, and jump past it.",
 "input": "head = [18,6,10,3]",
 "output": "[18, 6, 6, 2, 10, 1, 3]",
 "notes": [],
 "best": "For each adjacent pair (a, b) insert a node holding gcd(a, b) between them. Walk with one pointer, create the node, link it, and jump past it.",
 "variants": [
  {
   "name": "Insert a node between each neighbouring pair",
   "code": "class Solution:\n    def insertGreatestCommonDivisors(self, head):\n        cur = head\n        while cur and cur.next:\n            g = ListNode(gcd(cur.val, cur.next.val), cur.next)\n            cur.next = g\n            cur = g.next\n        return head",
   "time": "O(n log V)",
   "space": "O(1)",
   "explain": "For each adjacent pair (a, b) insert a node holding gcd(a, b) between them. Walk with one pointer, create the node, link it, and jump past it.",
   "frames": []
  }
 ]
};
