window.PROBLEM = {
 "id": "3633",
 "title": "Earliest Finish Time for Land and Water Rides I",
 "level": "Easy",
 "topic": "Greedy",
 "question": "",
 "why": "Land ride 2+4=6 then water ride starting at 6 for 3 → finishes at 9.",
 "idea": "You must take one land ride and one water ride, in either order; a ride can only start at or after its opening time and after the previous ride ended. Try every pair in both orders and keep the earliest finish.",
 "input": "landStartTime = [2,8], landDuration = [4,1], waterStartTime = [6], waterDuration = [3]",
 "output": "9",
 "notes": [],
 "best": "You must take one land ride and one water ride, in either order; a ride can only start at or after its opening time and after the previous ride ended. Try every pair in both orders and keep the earliest finish.",
 "variants": [
  {
   "name": "Try both orders and every pair of rides",
   "code": "class Solution:\n    def earliestFinishTime(self, landStartTime, landDuration, waterStartTime, waterDuration):\n        best = float('inf')\n        for ls, ld in zip(landStartTime, landDuration):\n            for ws, wd in zip(waterStartTime, waterDuration):\n                best = min(best, max(ls + ld, ws) + wd, max(ws + wd, ls) + ld)\n        return best",
   "time": "O(l·w)",
   "space": "O(1)",
   "explain": "You must take one land ride and one water ride, in either order; a ride can only start at or after its opening time and after the previous ride ended. Try every pair in both orders and keep the earliest finish.",
   "frames": []
  }
 ]
};
