window.PROBLEM = {
 "id": "2074",
 "title": "Reverse Nodes in Even Length Groups",
 "level": "Medium",
 "topic": "Linked List",
 "question": "",
 "why": "5→2→6→3→9→1→7→3→8→4: groups of 1,2,3,4 → the even groups are reversed.",
 "idea": "The list is split into groups of sizes 1, 2, 3 … (the last group may be shorter). Collect each group's nodes' values; if the group's real length is even reverse the values, then write them back in place.",
 "input": "head = [5,2,6,3,9,1,7,3,8,4]",
 "output": "[5, 6, 2, 3, 9, 1, 4, 8, 3, 7]",
 "notes": [],
 "best": "The list is split into groups of sizes 1, 2, 3 … (the last group may be shorter). Collect each group's nodes' values; if the group's real length is even reverse the values, then write them back in place.",
 "variants": [
  {
   "name": "Group sizes 1, 2, 3 …; reverse the even-length ones",
   "code": "class Solution:\n    def reverseEvenLengthGroups(self, head):\n        cur = head\n        size = 1\n        while cur:\n            nodes = []\n            node = cur\n            while node and len(nodes) < size:\n                nodes.append(node)\n                node = node.next\n            if len(nodes) % 2 == 0:\n                vals = [x.val for x in nodes][::-1]\n                for x, v in zip(nodes, vals):\n                    x.val = v\n            cur = node\n            size += 1\n        return head",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "The list is split into groups of sizes 1, 2, 3 … (the last group may be shorter). Collect each group's nodes' values; if the group's real length is even reverse the values, then write them back in place.",
   "frames": []
  }
 ]
};
