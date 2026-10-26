window.PROBLEM = {
 "id": "475",
 "title": "Heaters",
 "level": "Medium",
 "topic": "Binary Search",
 "question": "",
 "why": "houses [1,2,3], heater at 2: the farthest house is 1 away → radius 1.",
 "idea": "Each house needs the nearest heater within the radius, and the radius must cover the worst house. Sort the heaters and binary search the closest one on either side of each house; the answer is the largest of these distances.",
 "input": "houses = [1,2,3], heaters = [2]",
 "output": "1",
 "notes": [],
 "best": "Each house needs the nearest heater within the radius, and the radius must cover the worst house. Sort the heaters and binary search the closest one on either side of each house; the answer is the largest of these distances.",
 "variants": [
  {
   "name": "Nearest heater for every house",
   "code": "class Solution:\n    def findRadius(self, houses, heaters):\n        heaters.sort()\n        res = 0\n        for h in houses:\n            i = bisect_left(heaters, h)\n            d = float('inf')\n            if i < len(heaters):\n                d = heaters[i] - h\n            if i > 0:\n                d = min(d, h - heaters[i - 1])\n            res = max(res, d)\n        return res",
   "time": "O((n + m) log m)",
   "space": "O(1)",
   "explain": "Each house needs the nearest heater within the radius, and the radius must cover the worst house. Sort the heaters and binary search the closest one on either side of each house; the answer is the largest of these distances.",
   "frames": []
  }
 ]
};
