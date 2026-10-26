window.PROBLEM = {
 "id": "1600",
 "title": "Throne Inheritance",
 "level": "Medium",
 "topic": "Design",
 "question": "",
 "why": "People are born into a royal family tree; the succession order is the preorder walk of that tree, skipping anyone who has died.",
 "idea": "Store each person's children in birth order. getInheritanceOrder walks the tree depth-first (person, then each child's whole line) and prints everyone who is still alive.",
 "input": "king; births andy, bob, catherine, matthew (andy), alex, asha (bob); order; bob dies; order",
 "output": "king,andy,matthew,bob,alex,asha,catherine → without bob",
 "notes": [],
 "best": "Store each person's children in birth order. getInheritanceOrder walks the tree depth-first (person, then each child's whole line) and prints everyone who is still alive.",
 "variants": [
  {
   "name": "Family tree + preorder walk",
   "code": "class ThroneInheritance:\n    def __init__(self, kingName):\n        self.king = kingName\n        self.children = defaultdict(list)\n        self.dead = set()\n    def birth(self, parentName, childName):\n        self.children[parentName].append(childName)\n    def death(self, name):\n        self.dead.add(name)\n    def getInheritanceOrder(self):\n        order = []\n        def dfs(p):\n            if p not in self.dead: order.append(p)\n            for c in self.children[p]: dfs(c)\n        dfs(self.king)\n        return order",
   "time": "O(n) per order",
   "space": "O(n)",
   "explain": "Store each person's children in birth order. getInheritanceOrder walks the tree depth-first (person, then each child's whole line) and prints everyone who is still alive.",
   "frames": []
  }
 ]
};
