window.PROBLEM = {
 "id": "725",
 "title": "Split Linked List in Parts",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "[1,2,3] into 5 parts → [1],[2],[3],[],[].",
 "idea": "With length n and k parts, every part has n // k nodes and the first n % k parts get one extra. Walk the list and cut after each part's size.",
 "input": "head = [1,2,3], k = 5",
 "output": "[[1], [2], [3], [], []]",
 "notes": [],
 "best": "With length n and k parts, every part has n // k nodes and the first n % k parts get one extra. Walk the list and cut after each part's size.",
 "variants": [
  {
   "name": "Parts differ in size by at most one, earlier parts bigger",
   "code": "class Solution:\n    def splitListToParts(self, head, k):\n        n = 0\n        node = head\n        while node:\n            n += 1\n            node = node.next\n        size, extra = divmod(n, k)\n        parts = []\n        node = head\n        for i in range(k):\n            parts.append(node)\n            for _ in range(size + (1 if i < extra else 0) - 1):\n                if node:\n                    node = node.next\n            if node:\n                node.next, node = None, node.next\n        return parts",
   "time": "O(n + k)",
   "space": "O(k)",
   "explain": "With length n and k parts, every part has n // k nodes and the first n % k parts get one extra. Walk the list and cut after each part's size.",
   "frames": []
  }
 ]
};
