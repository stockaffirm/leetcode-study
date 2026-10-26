window.PROBLEM = {
 "id": "767",
 "title": "Reorganize String",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
 "why": "Rearrange the letters so no two neighbouring letters are equal, or say it is impossible.",
 "idea": "Repeatedly take the two most frequent remaining letters and place them next to each other (max-heap). If a single letter is left over more than once, it is impossible.",
 "input": "\"aab\"",
 "output": "\"aba\"",
 "notes": [],
 "best": "Repeatedly take the two most frequent remaining letters and place them next to each other (max-heap). If a single letter is left over more than once, it is impossible.",
 "variants": [
  {
   "name": "Max-heap of letter counts",
   "code": "class Solution:\n    def reorganizeString(self, s):\n        heap = [(-c, ch) for ch, c in Counter(s).items()]\n        heapify(heap)\n        res = []\n        while len(heap) > 1:\n            c1, a = heappop(heap)\n            c2, b = heappop(heap)\n            res.append(a)\n            res.append(b)\n            if c1 + 1: heappush(heap, (c1 + 1, a))\n            if c2 + 1: heappush(heap, (c2 + 1, b))\n        if heap:\n            c, a = heap[0]\n            if c < -1: return ''\n            res.append(a)\n        return ''.join(res)",
   "time": "O(n log 26)",
   "space": "O(1)",
   "explain": "Repeatedly take the two most frequent remaining letters and place them next to each other (max-heap). If a single letter is left over more than once, it is impossible.",
   "frames": []
  }
 ]
};
