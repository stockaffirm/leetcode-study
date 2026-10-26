window.PROBLEM = {
 "id": "401",
 "title": "Binary Watch",
 "level": "Easy",
 "topic": "Math / Bit Manipulation",
 "question": "",
 "why": "turnedOn=1: 0:01, 0:02, 0:04, 0:08, 0:16, 0:32, 1:00, 2:00, 4:00, 8:00.",
 "idea": "The watch has 4 hour LEDs and 6 minute LEDs. Loop over all hours 0–11 and minutes 0–59 and keep the times where the number of set bits in the hour plus in the minute equals turnedOn.",
 "input": "turnedOn = 1",
 "output": "['0:01', '0:02', '0:04', '0:08', '0:16', '0:32', '1:00', '2:00', '4:00', '8:00']",
 "notes": [],
 "best": "The watch has 4 hour LEDs and 6 minute LEDs. Loop over all hours 0–11 and minutes 0–59 and keep the times where the number of set bits in the hour plus in the minute equals turnedOn.",
 "variants": [
  {
   "name": "Try every time and count lit LEDs",
   "code": "class Solution:\n    def readBinaryWatch(self, turnedOn):\n        return [\"%d:%02d\" % (h, m) for h in range(12) for m in range(60)\n                if bin(h).count('1') + bin(m).count('1') == turnedOn]",
   "time": "O(720)",
   "space": "O(1)",
   "explain": "The watch has 4 hour LEDs and 6 minute LEDs. Loop over all hours 0–11 and minutes 0–59 and keep the times where the number of set bits in the hour plus in the minute equals turnedOn.",
   "frames": []
  }
 ]
};
