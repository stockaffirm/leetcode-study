window.PROBLEM = {
 "id": "3699",
 "title": "Number of ZigZag Arrays I",
 "level": "Hard",
 "topic": "Dynamic Programming",
 "question": "",
 "why": "n=3, range [4,5] → [4,5,4] and [5,4,5] → 2.",
 "idea": "A zigzag alternates up and down. Let up[v] / down[v] be the number of valid arrays so far ending in value v after an up-step / down-step. A new up-step to v comes from any earlier down-ending smaller value; a down-step to v from an earlier up-ending larger value. Prefix sums make each layer O(range). Start with both directions allowed for length 2 and sum at the end, modulo 1e9+7.",
 "input": "n = 3, l = 4, r = 5",
 "output": "2",
 "notes": [],
 "best": "A zigzag alternates up and down. Let up[v] / down[v] be the number of valid arrays so far ending in value v after an up-step / down-step. A new up-step to v comes from any earlier down-ending smaller value; a down-step to v from an earlier up-ending larger value. Prefix sums make each layer O(range). Start with both directions allowed for length 2 and sum at the end, modulo 1e9+7.",
 "variants": [
  {
   "name": "dp by last value and direction with prefix sums",
   "code": "class Solution:\n    def zigZagArrays(self, n, l, r):\n        MOD = 10**9 + 7\n        size = r - l + 1\n        up = [0] * size\n        down = [0] * size\n        for v in range(size):\n            up[v] = v\n            down[v] = size - 1 - v\n        for _ in range(n - 2):\n            new_up = [0] * size\n            new_down = [0] * size\n            run = 0\n            for v in range(size):\n                new_up[v] = run\n                run = (run + down[v]) % MOD\n            run = 0\n            for v in range(size - 1, -1, -1):\n                new_down[v] = run\n                run = (run + up[v]) % MOD\n            up, down = new_up, new_down\n        return (sum(up) + sum(down)) % MOD",
   "time": "O(n·(r − l))",
   "space": "O(r − l)",
   "explain": "A zigzag alternates up and down. Let up[v] / down[v] be the number of valid arrays so far ending in value v after an up-step / down-step. A new up-step to v comes from any earlier down-ending smaller value; a down-step to v from an earlier up-ending larger value. Prefix sums make each layer O(range). Start with both directions allowed for length 2 and sum at the end, modulo 1e9+7.",
   "frames": []
  }
 ]
};
