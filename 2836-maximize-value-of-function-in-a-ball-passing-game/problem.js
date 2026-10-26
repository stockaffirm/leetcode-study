window.PROBLEM = {
 "id": "2836",
 "title": "Maximize Value of Function in a Ball Passing Game",
 "level": "Hard",
 "topic": "Graph",
 "question": "",
 "why": "receiver [2,0,1], k=4 starting at player 2: 2 → 1 → 0 → 2 → 1, ids add up to 6.",
 "idea": "f(x) = x plus the ids of the next k receivers. k can be huge, so use binary lifting: up[j][i] is the player reached after 2^j passes and total[j][i] is the sum of ids of those 2^j receivers. Decompose k into powers of two and combine the jumps for every start.",
 "input": "receiver = [2,0,1], k = 4",
 "output": "6",
 "notes": [],
 "best": "f(x) = x plus the ids of the next k receivers. k can be huge, so use binary lifting: up[j][i] is the player reached after 2^j passes and total[j][i] is the sum of ids of those 2^j receivers. Decompose k into powers of two and combine the jumps for every start.",
 "variants": [
  {
   "name": "Binary lifting over k passes",
   "code": "class Solution:\n    def getMaxFunctionValue(self, receiver, k):\n        n = len(receiver)\n        up = [receiver[:]]\n        tot = [receiver[:]]\n        for j in range(1, k.bit_length()):\n            pu, pt = up[-1], tot[-1]\n            up.append([pu[pu[i]] for i in range(n)])\n            tot.append([pt[i] + pt[pu[i]] for i in range(n)])\n        best = 0\n        for x in range(n):\n            cur, s = x, x\n            for j in range(k.bit_length()):\n                if (k >> j) & 1:\n                    s += tot[j][cur]\n                    cur = up[j][cur]\n            best = max(best, s)\n        return best",
   "time": "O(n log k)",
   "space": "O(n log k)",
   "explain": "f(x) = x plus the ids of the next k receivers. k can be huge, so use binary lifting: up[j][i] is the player reached after 2^j passes and total[j][i] is the sum of ids of those 2^j receivers. Decompose k into powers of two and combine the jumps for every start.",
   "frames": []
  }
 ]
};
