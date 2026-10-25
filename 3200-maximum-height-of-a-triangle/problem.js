window.PROBLEM = {
 "id": "3200",
 "title": "Maximum Height of a Triangle",
 "level": "Easy",
 "topic": "Matrix",
 "question": "You have red and blue balls and build a triangle: row 1 has 1 ball, row 2 has 2, row 3 has 3 … All balls in a row share a colour and neighbouring rows differ. Return the maximum possible height. Example: red=2, blue=4 → 3.",
 "why": "red=2, blue=4: start with blue (1), red (2), blue (3) → 3 rows, using 4 blue and 2 red.",
 "idea": "Row r needs r balls, all of one colour, and colours alternate. Rows alternate between the two colours, so try starting with red and starting with blue; keep adding rows while the colour in turn has enough balls. Take the better height.",
 "input": "red = 2, blue = 4",
 "output": "3",
 "notes": [],
 "best": "Row r needs r balls, all of one colour, and colours alternate. Rows alternate between the two colours, so try starting with red and starting with blue; keep adding rows while the colour in turn has enough balls. Take the better height.",
 "variants": [
  {
   "name": "Try both colours first and keep building rows",
   "code": "class Solution:\n    def maxHeightOfTriangle(self, red, blue):\n        def build(a, b):\n            row = 1\n            while True:\n                if row % 2 == 1:\n                    if a < row:\n                        break\n                    a -= row\n                else:\n                    if b < row:\n                        break\n                    b -= row\n                row += 1\n            return row - 1\n        return max(build(red, blue), build(blue, red))",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "Row r needs r balls, all of one colour, and colours alternate. Rows alternate between the two colours, so try starting with red and starting with blue; keep adding rows while the colour in turn has enough balls. Take the better height.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Closed form per height",
   "tag": "Alternative",
   "code": "class Solution:\n    def maxHeightOfTriangle(self, red, blue):\n        best = 0\n        for a, b in ((red, blue), (blue, red)):\n            h = 0\n            while True:\n                nxt = h + 1\n                odd = ((nxt + 1) // 2) ** 2\n                even = (nxt // 2) * (nxt // 2 + 1)\n                if odd <= a and even <= b:\n                    h = nxt\n                else:\n                    break\n            best = max(best, h)\n        return best",
   "time": "O(√n)",
   "space": "O(1)",
   "explain": "A triangle of height h needs ((h+1)//2)² balls for the odd rows and (h//2)(h//2+1) for the even rows; test that for both colour orders.",
   "frames": [],
   "alt": true
  }
 ]
};
