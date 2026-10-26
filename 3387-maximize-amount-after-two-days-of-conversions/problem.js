window.PROBLEM = {
 "id": "3387",
 "title": "Maximize Amount After Two Days of Conversions",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
 "why": "Start with 1.0 of a currency. Day 1 allows conversions with one set of rates (and their inverses), day 2 with another. Maximise the amount of the starting currency at the end.",
 "idea": "The rates are consistent, so the value of any currency c in start-units is one fixed number per day. Find day-1 rate r1[c] from start to c and day-2 rate r2[c] from start to c (graph walk); converting start→c on day 1 and c→start on day 2 gives r1[c]/r2[c]. Take the best c reachable in both.",
 "input": "EUR, day-1 EUR→USD 2, USD→JPY 3, day-2 JPY→USD 4, USD→CHF 5, CHF→EUR 6",
 "output": "720.0",
 "notes": [],
 "best": "The rates are consistent, so the value of any currency c in start-units is one fixed number per day. Find day-1 rate r1[c] from start to c and day-2 rate r2[c] from start to c (graph walk); converting start→c on day 1 and c→start on day 2 gives r1[c]/r2[c]. Take the best c reachable in both.",
 "variants": [
  {
   "name": "Rates relative to the start currency",
   "code": "class Solution:\n    def maxAmount(self, initialCurrency, pairs1, rates1, pairs2, rates2):\n        def ratios(pairs, rates):\n            g = defaultdict(list)\n            for (a, b), r in zip(pairs, rates):\n                g[a].append((b, r))\n                g[b].append((a, 1 / r))\n            val = {initialCurrency: 1.0}\n            st = [initialCurrency]\n            while st:\n                u = st.pop()\n                for v, r in g[u]:\n                    if v not in val:\n                        val[v] = val[u] * r\n                        st.append(v)\n            return val\n        r1, r2 = ratios(pairs1, rates1), ratios(pairs2, rates2)\n        return round(max(r1[c] / r2[c] for c in r1 if c in r2), 5)",
   "time": "O(V + E)",
   "space": "O(V + E)",
   "explain": "The rates are consistent, so the value of any currency c in start-units is one fixed number per day. Find day-1 rate r1[c] from start to c and day-2 rate r2[c] from start to c (graph walk); converting start→c on day 1 and c→start on day 2 gives r1[c]/r2[c]. Take the best c reachable in both.",
   "frames": []
  }
 ]
};
