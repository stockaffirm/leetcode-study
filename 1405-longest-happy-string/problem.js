window.PROBLEM = {
 "id": "1405",
 "title": "Longest Happy String",
 "level": "Medium",
 "topic": "Heap",
 "question": "",
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
   "frames": []
  }
 ]
};
