window.PROBLEM = {
 "id": "721",
 "title": "Accounts Merge",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "",
 "why": "Accounts (name + emails) belong to the same person if they share an email. Merge them.",
 "idea": "Treat every email as a node; join all emails of one account. Emails in the same set belong to one person; output the owner's name with the sorted emails of each set.",
 "input": "4 accounts: John (2 accounts sharing johnsmith@…), Mary, another John",
 "output": "3 merged accounts",
 "notes": [],
 "best": "Treat every email as a node; join all emails of one account. Emails in the same set belong to one person; output the owner's name with the sorted emails of each set.",
 "variants": [
  {
   "name": "Union-find on emails",
   "code": "class Solution:\n    def accountsMerge(self, accounts):\n        parent = {}\n        def find(x):\n            parent.setdefault(x, x)\n            while parent[x] != x:\n                parent[x] = parent[parent[x]]\n                x = parent[x]\n            return x\n        owner = {}\n        for acc in accounts:\n            for e in acc[1:]:\n                owner[e] = acc[0]\n                parent[find(e)] = find(acc[1])\n        groups = defaultdict(list)\n        for e in owner: groups[find(e)].append(e)\n        return [[owner[r]] + sorted(es) for r, es in groups.items()]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Treat every email as a node; join all emails of one account. Emails in the same set belong to one person; output the owner's name with the sorted emails of each set.",
   "frames": []
  }
 ]
};
