window.PROBLEM = {
 "id": "721",
 "title": "Accounts Merge",
 "level": "Medium",
 "topic": "Union Find / Segment Tree",
 "question": "Each account is a list: first the person's name, then their email addresses. Two accounts belong to the same person if they share at least one email address (a name may be shared by different people). Merge accounts of the same person: return, for each person, a list with the name followed by all their different emails in sorted order. The accounts may be returned in any order. Example: two 'John' accounts sharing 'johnsmith@mail.com' are merged; 'Mary' and the other 'John' stay separate → 3 accounts.",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Graph search over emails",
   "tag": "Alternative",
   "code": "class Solution:\n    def accountsMerge(self, accounts):\n        g = defaultdict(set)\n        owner = {}\n        for acc in accounts:\n            for e in acc[1:]:\n                owner[e] = acc[0]\n                g[acc[1]].add(e)\n                g[e].add(acc[1])\n        seen, res = set(), []\n        for e in owner:\n            if e in seen: continue\n            st, comp = [e], []\n            seen.add(e)\n            while st:\n                u = st.pop()\n                comp.append(u)\n                for v in g[u]:\n                    if v not in seen:\n                        seen.add(v)\n                        st.append(v)\n            res.append([owner[e]] + sorted(comp))\n        return res",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Link all emails of an account in a graph and collect connected components.",
   "frames": [],
   "alt": true
  }
 ]
};
