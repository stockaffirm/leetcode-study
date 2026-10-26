window.PROBLEM = {
 "id": "1247",
 "title": "Minimum Swaps to Make Strings Equal",
 "level": "Medium",
 "topic": "Greedy",
 "question": "Two equal-length strings consist of 'x' and 'y'. In one move swap s1[i] with s2[j]. Return the minimum moves to make them equal, or −1 if impossible. Example: 'xy' and 'yx' → 2.",
 "why": "s1='xy', s2='yx': one x/y mismatch and one y/x mismatch → 2 swaps.",
 "idea": "Look only at positions where the strings differ: count (x,y) mismatches and (y,x) mismatches. Two of the same kind are fixed with one swap. If one of each kind is left over, it takes two swaps. If the total number of mismatches is odd, it is impossible (−1).",
 "input": "s1 = \"xy\", s2 = \"yx\"",
 "output": "2",
 "notes": [],
 "best": "Look only at positions where the strings differ: count (x,y) mismatches and (y,x) mismatches. Two of the same kind are fixed with one swap. If one of each kind is left over, it takes two swaps. If the total number of mismatches is odd, it is impossible (−1).",
 "variants": [
  {
   "name": "Pair up mismatches",
   "code": "class Solution:\n    def minimumSwap(self, s1, s2):\n        xy = sum(a == 'x' and b == 'y' for a, b in zip(s1, s2))\n        yx = sum(a == 'y' and b == 'x' for a, b in zip(s1, s2))\n        if (xy + yx) % 2:\n            return -1\n        return xy // 2 + yx // 2 + 2 * (xy % 2)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Look only at positions where the strings differ: count (x,y) mismatches and (y,x) mismatches. Two of the same kind are fixed with one swap. If one of each kind is left over, it takes two swaps. If the total number of mismatches is odd, it is impossible (−1).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Collect the mismatches",
   "tag": "Alternative",
   "code": "class Solution:\n    def minimumSwap(self, s1, s2):\n        xy = [i for i in range(len(s1)) if s1[i] == 'x' and s2[i] == 'y']\n        yx = [i for i in range(len(s1)) if s1[i] == 'y' and s2[i] == 'x']\n        if (len(xy) + len(yx)) % 2:\n            return -1\n        swaps = len(xy) // 2 + len(yx) // 2\n        if len(xy) % 2:\n            swaps += 2\n        return swaps",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "List mismatching positions by type and pair them up.",
   "frames": [],
   "alt": true
  }
 ]
};
