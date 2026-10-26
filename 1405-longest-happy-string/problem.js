window.PROBLEM = {
 "id": "1405",
 "title": "Longest Happy String",
 "level": "Medium",
 "topic": "Heap",
 "question": "A string is happy if it uses only a, b, c, at most a, b, c copies respectively, and has no three equal letters in a row. Return a longest happy string (any one; this solution returns a specific one). Example: a=1, b=1, c=7 → 'ccaccbcc'.",
 "why": "a=1, b=1, c=7: 'ccaccbcc' uses every letter without ever writing three equal letters in a row.",
 "idea": "Always append the letter with the most remaining copies, but if the last two letters are already that letter take the next most common one instead. Use a max-heap of (count, letter) and stop when no letter can be added.",
 "input": "a = 1, b = 1, c = 7",
 "output": "\"ccaccbcc\"",
 "notes": [],
 "best": "Always append the letter with the most remaining copies, but if the last two letters are already that letter take the next most common one instead. Use a max-heap of (count, letter) and stop when no letter can be added.",
 "variants": [
  {
   "name": "Greedy with a heap: biggest pile unless it would make three in a row",
   "code": "class Solution:\n    def longestDiverseString(self, a, b, c):\n        heap = [(-n, ch) for n, ch in ((a, 'a'), (b, 'b'), (c, 'c')) if n]\n        heapify(heap)\n        res = []\n        while heap:\n            n, ch = heappop(heap)\n            if len(res) >= 2 and res[-1] == res[-2] == ch:\n                if not heap:\n                    break\n                n2, ch2 = heappop(heap)\n                res.append(ch2)\n                if n2 + 1:\n                    heappush(heap, (n2 + 1, ch2))\n                heappush(heap, (n, ch))\n            else:\n                res.append(ch)\n                if n + 1:\n                    heappush(heap, (n + 1, ch))\n        return ''.join(res)",
   "time": "O(n log 3)",
   "space": "O(1)",
   "explain": "Always append the letter with the most remaining copies, but if the last two letters are already that letter take the next most common one instead. Use a max-heap of (count, letter) and stop when no letter can be added.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Sort the three piles every step",
   "tag": "Alternative",
   "code": "class Solution:\n    def longestDiverseString(self, a, b, c):\n        cnt = {'a': a, 'b': b, 'c': c}\n        res = []\n        while True:\n            order = sorted((ch for ch in cnt if cnt[ch] > 0), key=lambda ch: (-cnt[ch], ch))\n            for ch in order:\n                if len(res) >= 2 and res[-1] == res[-2] == ch:\n                    continue\n                res.append(ch)\n                cnt[ch] -= 1\n                break\n            else:\n                return ''.join(res)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Same greedy without a heap: sort the (count, letter) piles each step.",
   "frames": [],
   "alt": true
  }
 ]
};
