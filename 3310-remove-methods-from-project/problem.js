window.PROBLEM = {
 "id": "3310",
 "title": "Remove Methods From Project",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "n=5, k=0, invocations [[1,2],[0,2],[0,1],[3,4]]: 0, 1, 2 are suspicious and not called from outside → remove them → [3, 4].",
 "idea": "Methods reachable from k (by following invocations) are suspicious. They can be removed only if no non-suspicious method invokes a suspicious one. If such a call exists, nothing may be removed and all methods remain; otherwise return the non-suspicious methods.",
 "input": "n = 5, k = 0, invocations = [[1,2],[0,2],[0,1],[3,4]]",
 "output": "[3, 4]",
 "notes": [],
 "best": "Methods reachable from k (by following invocations) are suspicious. They can be removed only if no non-suspicious method invokes a suspicious one. If such a call exists, nothing may be removed and all methods remain; otherwise return the non-suspicious methods.",
 "variants": [
  {
   "name": "Suspicious methods = reachable from k; check outside calls",
   "code": "class Solution:\n    def remainingMethods(self, n, k, invocations):\n        g = defaultdict(list)\n        for a, b in invocations:\n            g[a].append(b)\n        sus = {k}\n        st = [k]\n        while st:\n            u = st.pop()\n            for v in g[u]:\n                if v not in sus:\n                    sus.add(v)\n                    st.append(v)\n        for a, b in invocations:\n            if a not in sus and b in sus:\n                return list(range(n))\n        return [i for i in range(n) if i not in sus]",
   "time": "O(n + e)",
   "space": "O(n + e)",
   "explain": "Methods reachable from k (by following invocations) are suspicious. They can be removed only if no non-suspicious method invokes a suspicious one. If such a call exists, nothing may be removed and all methods remain; otherwise return the non-suspicious methods.",
   "frames": []
  }
 ]
};
