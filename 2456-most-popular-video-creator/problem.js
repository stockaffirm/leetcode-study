window.PROBLEM = {
 "id": "2456",
 "title": "Most Popular Video Creator",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "",
 "why": "alice has videos with 5 and 5 views (total 10), bob has one with 10 → both tie at 10; alice's best id is 'one' (smaller id).",
 "idea": "For each creator keep their total views and their best video (most views, smallest id on ties). The most popular creators are those with the maximum total; return each with their best video id.",
 "input": "creators = [\"alice\",\"bob\",\"alice\",\"chris\"], ids = [\"one\",\"two\",\"three\",\"four\"], views = [5,10,5,4]",
 "output": "[['alice', 'one'], ['bob', 'two']]",
 "notes": [],
 "best": "For each creator keep their total views and their best video (most views, smallest id on ties). The most popular creators are those with the maximum total; return each with their best video id.",
 "variants": [
  {
   "name": "Total views per creator, best video per creator",
   "code": "class Solution:\n    def mostPopularCreator(self, creators, ids, views):\n        total = Counter()\n        best = {}\n        for c, i, v in zip(creators, ids, views):\n            total[c] += v\n            if c not in best or v > best[c][0] or (v == best[c][0] and i < best[c][1]):\n                best[c] = (v, i)\n        top = max(total.values())\n        return sorted([c, best[c][1]] for c in total if total[c] == top)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "For each creator keep their total views and their best video (most views, smallest id on ties). The most popular creators are those with the maximum total; return each with their best video id.",
   "frames": []
  }
 ]
};
