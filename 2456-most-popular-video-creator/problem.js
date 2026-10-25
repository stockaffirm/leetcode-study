window.PROBLEM = {
 "id": "2456",
 "title": "Most Popular Video Creator",
 "level": "Medium",
 "topic": "Hash Map / Set",
 "question": "Each video has a creator, an id and a view count. A creator's popularity is the sum of the views of all their videos. For the creators with the highest popularity return [creator, id of their most viewed video] (smallest id on ties); results are returned sorted here. Example: creators ['alice','bob','alice','chris'], ids ['one','two','three','four'], views [5,10,5,4] → [['alice','one'],['bob','two']].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Group videos per creator",
   "tag": "Alternative",
   "code": "class Solution:\n    def mostPopularCreator(self, creators, ids, views):\n        vids = defaultdict(list)\n        for c, i, v in zip(creators, ids, views):\n            vids[c].append((-v, i))\n        total = {c: -sum(v for v, _ in lst) for c, lst in vids.items()}\n        top = min(total.values())\n        return sorted([c, min(vids[c])[1]] for c in vids if total[c] == top)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Collect all videos per creator, sort them, and read off the total and best id.",
   "frames": [],
   "alt": true
  }
 ]
};
