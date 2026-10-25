window.PROBLEM = {
 "id": "1344",
 "title": "Angle Between Hands of a Clock",
 "level": "Medium",
 "topic": "Math / Bit Manipulation",
 "question": "Given the hour (1–12) and the minutes of an analog clock, return the smaller angle (in degrees) between the hour hand and the minute hand. Example: hour 12, minutes 30 → 165.",
 "why": "At 12:30 the hour hand is halfway to 1 (15°) and the minute hand points at 6 (180°): the difference is 165°.",
 "idea": "The minute hand moves 6° per minute. The hour hand moves 30° per hour plus 0.5° per minute. Take the difference and the smaller of it and 360 − it.",
 "input": "hour = 12, minutes = 30",
 "output": "165.0",
 "notes": [],
 "best": "The minute hand moves 6° per minute. The hour hand moves 30° per hour plus 0.5° per minute. Take the difference and the smaller of it and 360 − it.",
 "variants": [
  {
   "name": "Angles of both hands",
   "code": "class Solution:\n    def angleClock(self, hour, minutes):\n        h = (hour % 12) * 30 + minutes * 0.5\n        m = minutes * 6\n        d = abs(h - m)\n        return min(d, 360 - d)",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "The minute hand moves 6° per minute. The hour hand moves 30° per hour plus 0.5° per minute. Take the difference and the smaller of it and 360 − it.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Whole numbers (half degrees)",
   "tag": "Alternative",
   "code": "class Solution:\n    def angleClock(self, hour, minutes):\n        h2 = (hour % 12) * 60 + minutes\n        m2 = minutes * 12\n        d = abs(h2 - m2)\n        return min(d, 720 - d) / 2",
   "time": "O(1)",
   "space": "O(1)",
   "explain": "Measure the hands in half-degree units so everything stays an integer, then halve at the end.",
   "frames": [],
   "alt": true
  }
 ]
};
