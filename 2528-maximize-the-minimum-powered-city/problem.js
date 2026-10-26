window.PROBLEM = {
 "id": "2528",
 "title": "Maximize the Minimum Powered City",
 "level": "Hard",
 "topic": "Binary Search",
 "question": "",
 "why": "stations [1,2,4,5,0], r=1, k=2 → minimum power can be raised to 5.",
 "idea": "The power of a city is the number of stations within distance r. Binary search the target minimum power T. Sweep the cities left to right; if a city is below T, place the missing stations as far right as possible (at city i + r), which helps the most following cities; track their effect with a difference array. T is possible if the stations used are ≤ k.",
 "input": "stations = [1,2,4,5,0], r = 1, k = 2",
 "output": "5",
 "notes": [],
 "best": "The power of a city is the number of stations within distance r. Binary search the target minimum power T. Sweep the cities left to right; if a city is below T, place the missing stations as far right as possible (at city i + r), which helps the most following cities; track their effect with a difference array. T is possible if the stations used are ≤ k.",
 "variants": [
  {
   "name": "Binary search the power, greedy stations with a difference array",
   "code": "class Solution:\n    def maxPower(self, stations, r, k):\n        n = len(stations)\n        pref = [0]\n        for x in stations:\n            pref.append(pref[-1] + x)\n        base = [pref[min(n, i + r + 1)] - pref[max(0, i - r)] for i in range(n)]\n        def ok(target):\n            extra = [0] * (n + 1)\n            used = 0\n            add = 0\n            for i in range(n):\n                add += extra[i]\n                need = target - base[i] - add\n                if need > 0:\n                    used += need\n                    if used > k:\n                        return False\n                    add += need\n                    if i + 2 * r + 1 <= n:\n                        extra[i + 2 * r + 1] -= need\n            return True\n        lo, hi = min(base), min(base) + k\n        while lo < hi:\n            mid = (lo + hi + 1) // 2\n            if ok(mid):\n                lo = mid\n            else:\n                hi = mid - 1\n        return lo",
   "time": "O(n log(sum + k))",
   "space": "O(n)",
   "explain": "The power of a city is the number of stations within distance r. Binary search the target minimum power T. Sweep the cities left to right; if a city is below T, place the missing stations as far right as possible (at city i + r), which helps the most following cities; track their effect with a difference array. T is possible if the stations used are ≤ k.",
   "frames": []
  }
 ]
};
