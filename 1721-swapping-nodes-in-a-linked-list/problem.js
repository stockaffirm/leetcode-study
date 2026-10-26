window.PROBLEM = {
 "id": "1721",
 "title": "Swapping Nodes in a Linked List",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "1→2→3→4→5, k=2: swap the 2nd node from each end → 1→4→3→2→5.",
 "idea": "Walk to the k-th node from the front. A second pointer started at the head then advances together with a pointer that continues to the end; when the lead reaches the end the second pointer is the k-th from the back. Swap the two values.",
 "input": "head = [1,2,3,4,5], k = 2",
 "output": "[1, 4, 3, 2, 5]",
 "notes": [],
 "best": "Walk to the k-th node from the front. A second pointer started at the head then advances together with a pointer that continues to the end; when the lead reaches the end the second pointer is the k-th from the back. Swap the two values.",
 "variants": [
  {
   "name": "Find the k-th from the front and from the back, swap values",
   "code": "class Solution:\n    def swapNodes(self, head, k):\n        first = head\n        for _ in range(k - 1):\n            first = first.next\n        second = head\n        fast = first\n        while fast.next:\n            fast = fast.next\n            second = second.next\n        first.val, second.val = second.val, first.val\n        return head",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk to the k-th node from the front. A second pointer started at the head then advances together with a pointer that continues to the end; when the lead reaches the end the second pointer is the k-th from the back. Swap the two values.",
   "frames": []
  }
 ]
};
