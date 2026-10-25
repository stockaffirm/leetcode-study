window.PROBLEM = {
 "id": "382",
 "title": "Linked List Random Node",
 "level": "Medium",
 "topic": "Linked List",
 "question": "Build a class that is given the first node (head) of a linked list (a chain of nodes where each points to the next). getRandom() must return the value of a randomly chosen node, where every node is equally likely to be picked each time. Try to do it without storing the whole list if the length is unknown. Example: list 1 → 2 → 3; each call returns 1, 2 or 3 with chance one third each.",
 "why": "Pick a random node's value from a linked list of unknown length, each equally likely, without storing the list.",
 "idea": "Walk the list once. At the i-th node, replace the current pick with this node's value with probability 1/i. Every node ends up chosen with probability 1/n.",
 "input": "1 → 2 → 3, ask 12 times",
 "output": "every value 1, 2, 3 shows up",
 "notes": [],
 "best": "Walk the list once. At the i-th node, replace the current pick with this node's value with probability 1/i. Every node ends up chosen with probability 1/n.",
 "variants": [
  {
   "name": "Reservoir sampling",
   "code": "class Solution:\n    def __init__(self, head):\n        self.head = head\n    def getRandom(self):\n        res, node, i = None, self.head, 0\n        while node:\n            i += 1\n            if random.randrange(i) == 0: res = node.val\n            node = node.next\n        return res",
   "time": "O(n) per call",
   "space": "O(1)",
   "explain": "Walk the list once. At the i-th node, replace the current pick with this node's value with probability 1/i. Every node ends up chosen with probability 1/n.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Store values in a list",
   "tag": "Alternative",
   "code": "class Solution:\n    def __init__(self, head):\n        self.vals = []\n        while head:\n            self.vals.append(head.val)\n            head = head.next\n    def getRandom(self):\n        return random.choice(self.vals)",
   "time": "O(1) per call",
   "space": "O(n)",
   "explain": "Copy values into a list once; pick a random index each time.",
   "frames": [],
   "alt": true
  }
 ]
};
