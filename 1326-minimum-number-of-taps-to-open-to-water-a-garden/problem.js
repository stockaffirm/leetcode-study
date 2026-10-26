window.PROBLEM = {
 "id": "1326",
 "title": "Minimum Number of Taps to Open to Water a Garden",
 "level": "Hard",
 "topic": "Greedy",
 "question": "",
 "why": "A garden spans 0…n. Tap i at position i waters [i − ranges[i], i + ranges[i]]. Open the fewest taps to water the whole garden, or −1.",
 "idea": "Turn every tap into an interval and cover [0, n] greedily: for each left end keep the farthest right end reachable, then jump like in the minimum-jumps problem.",
 "input": "n=5, ranges [3,4,1,1,0,0]",
 "output": "1",
 "notes": [],
 "best": "Turn every tap into an interval and cover [0, n] greedily: for each left end keep the farthest right end reachable, then jump like in the minimum-jumps problem.",
 "variants": [
  {
   "name": "Greedy interval cover",
   "code": "class Solution:\n    def minTaps(self, n, ranges):\n        reach = [0] * (n + 1)\n        for i, r in enumerate(ranges):\n            lo = max(0, i - r)\n            reach[lo] = max(reach[lo], i + r)\n        taps = cur_end = far = 0\n        for i in range(n):\n            far = max(far, reach[i])\n            if i == cur_end:\n                if far <= cur_end: return -1\n                taps += 1\n                cur_end = far\n                if cur_end >= n: break\n        return taps",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Turn every tap into an interval and cover [0, n] greedily: for each left end keep the farthest right end reachable, then jump like in the minimum-jumps problem.",
   "frames": []
  }
 ]
};
