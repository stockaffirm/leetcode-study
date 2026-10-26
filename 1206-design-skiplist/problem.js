window.PROBLEM = {
 "id": "1206",
 "title": "Design Skiplist",
 "level": "Hard",
 "topic": "Design",
 "question": "",
 "why": "add 1, 2, 3 → search 0 false, add 4, search 1 true, erase 0 false, erase 1 true, search 1 false.",
 "idea": "A skip list stores sorted values in several linked levels: level 0 holds everything, each higher level a random half of the one below. To find a value, start at the top-left, move right while the next value is smaller, then drop a level. Add inserts the value at a random height; erase unlinks it from every level.",
 "input": "Skiplist(); add(1); add(2); add(3); search(0); add(4); search(1); erase(0); erase(1); search(1)",
 "output": "[None, None, None, False, None, True, False, True, False]",
 "notes": [],
 "best": "A skip list stores sorted values in several linked levels: level 0 holds everything, each higher level a random half of the one below. To find a value, start at the top-left, move right while the next value is smaller, then drop a level. Add inserts the value at a random height; erase unlinks it from every level.",
 "variants": [
  {
   "name": "Linked levels with random promotion",
   "code": "class Node:\n    def __init__(self, val, levels):\n        self.val = val\n        self.next = [None] * levels\n\nclass Skiplist:\n    MAX = 16\n\n    def __init__(self):\n        self.head = Node(-1, self.MAX)\n\n    def _find_prev(self, num):\n        prev = [None] * self.MAX\n        cur = self.head\n        for lvl in range(self.MAX - 1, -1, -1):\n            while cur.next[lvl] and cur.next[lvl].val < num:\n                cur = cur.next[lvl]\n            prev[lvl] = cur\n        return prev\n\n    def search(self, target):\n        prev = self._find_prev(target)\n        node = prev[0].next[0]\n        return node is not None and node.val == target\n\n    def add(self, num):\n        prev = self._find_prev(num)\n        height = 1\n        while height < self.MAX and random.random() < 0.5:\n            height += 1\n        node = Node(num, height)\n        for lvl in range(height):\n            node.next[lvl] = prev[lvl].next[lvl]\n            prev[lvl].next[lvl] = node\n\n    def erase(self, num):\n        prev = self._find_prev(num)\n        node = prev[0].next[0]\n        if node is None or node.val != num:\n            return False\n        for lvl in range(self.MAX):\n            if prev[lvl].next[lvl] is node:\n                prev[lvl].next[lvl] = node.next[lvl]\n        return True",
   "time": "O(log n) expected",
   "space": "O(n)",
   "explain": "A skip list stores sorted values in several linked levels: level 0 holds everything, each higher level a random half of the one below. To find a value, start at the top-left, move right while the next value is smaller, then drop a level. Add inserts the value at a random height; erase unlinks it from every level.",
   "frames": []
  }
 ]
};
