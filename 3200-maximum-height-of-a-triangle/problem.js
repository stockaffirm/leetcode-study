window.PROBLEM = {
 "id": "3200",
 "title": "Maximum Height of a Triangle",
 "level": "Easy",
 "topic": "Matrix",
 "question": "",
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
   "frames": []
  }
 ]
};
