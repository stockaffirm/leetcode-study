window.PROBLEM = {
 "id": "2418",
 "title": "Sort the People",
 "level": "Easy",
 "topic": "Sorting",
 "question": "",
 "why": "names ['Mary','John','Emma'], heights [180,165,170] → ['Mary','Emma','John'].",
 "idea": "Pair each name with its height and sort by height descending.",
 "input": "names = [\"Mary\",\"John\",\"Emma\"], heights = [180,165,170]",
 "output": "['Mary', 'Emma', 'John']",
 "notes": [],
 "best": "Pair each name with its height and sort by height descending.",
 "variants": [
  {
   "name": "Sort names by height descending",
   "code": "class Solution:\n    def sortPeople(self, names, heights):\n        return [n for _, n in sorted(zip(heights, names), reverse=True)]",
   "time": "O(n log n)",
   "space": "O(n)",
   "explain": "Pair each name with its height and sort by height descending.",
   "frames": []
  }
 ]
};
