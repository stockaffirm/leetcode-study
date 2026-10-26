window.PROBLEM = {
 "id": "853",
 "title": "Car Fleet",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "Cars drive along a one-lane road toward a target. position[i] is the starting position of car i and speed[i] its speed. A car can never pass another; if a faster car catches up with a slower one it must slow down and follow it, and they form a 'fleet' (a fleet is one or more cars driving at the same speed together; cars meeting exactly at the target also form a fleet). Return how many fleets arrive at the target. Example: target 12, positions [10,8,0,5,3], speeds [2,4,1,1,3] → 3 fleets.",
 "why": "Cars drive toward the same target and cannot overtake; a faster car behind a slower one just joins it as a fleet. How many fleets arrive?",
 "idea": "Sort cars from the one closest to the target. Compute each car's time to arrive alone; if it is longer than the fleet ahead's time it forms a new fleet, otherwise it is caught by that fleet.",
 "input": "target 12, positions [10,8,0,5,3], speeds [2,4,1,1,3]",
 "output": "3",
 "notes": [],
 "best": "Sort cars from the one closest to the target. Compute each car's time to arrive alone; if it is longer than the fleet ahead's time it forms a new fleet, otherwise it is caught by that fleet.",
 "variants": [
  {
   "name": "Sort by position, compare arrival times",
   "code": "class Solution:\n    def carFleet(self, target, position, speed):\n        fleets, last = 0, 0\n        for p, s in sorted(zip(position, speed), reverse=True):\n            t = (target - p) / s\n            if t > last:\n                fleets += 1\n                last = t\n        return fleets",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Sort cars from the one closest to the target. Compute each car's time to arrive alone; if it is longer than the fleet ahead's time it forms a new fleet, otherwise it is caught by that fleet.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Stack of arrival times",
   "tag": "Alternative",
   "code": "class Solution:\n    def carFleet(self, target, position, speed):\n        st = []\n        for p, s in sorted(zip(position, speed), reverse=True):\n            t = (target - p) / s\n            if not st or t > st[-1]: st.append(t)\n        return len(st)",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "A stack of fleet arrival times; a car slower than the fleet ahead pushes a new one.",
   "frames": [],
   "alt": true
  }
 ]
};
