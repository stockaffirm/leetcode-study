window.PROBLEM = {
 "id": "3799",
 "title": "Word Squares II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "",
 "why": "['able','area','echo','also']: top 'able', left 'area', right 'echo', bottom 'also' share all four corner letters.",
 "idea": "A square is four distinct words top, left, right, bottom where top[0]=left[0], top[3]=right[0], bottom[0]=left[3] and bottom[3]=right[3]. With at most 15 words, trying every ordered choice of four distinct words is cheap. Collect the valid ones and sort them.",
 "input": "words = [\"able\",\"area\",\"echo\",\"also\"]",
 "output": "[['able','area','echo','also'], ['area','able','also','echo']]",
 "notes": [],
 "best": "A square is four distinct words top, left, right, bottom where top[0]=left[0], top[3]=right[0], bottom[0]=left[3] and bottom[3]=right[3]. With at most 15 words, trying every ordered choice of four distinct words is cheap. Collect the valid ones and sort them.",
 "variants": [
  {
   "name": "Try four distinct words and check the corners",
   "code": "class Solution:\n    def wordSquares(self, words):\n        res = []\n        for top, left, right, bottom in permutations(words, 4):\n            if top[0] == left[0] and top[3] == right[0] and bottom[0] == left[3] and bottom[3] == right[3]:\n                res.append([top, left, right, bottom])\n        res.sort()\n        return res",
   "time": "O(n⁴)",
   "space": "O(1)",
   "explain": "A square is four distinct words top, left, right, bottom where top[0]=left[0], top[3]=right[0], bottom[0]=left[3] and bottom[3]=right[3]. With at most 15 words, trying every ordered choice of four distinct words is cheap. Collect the valid ones and sort them.",
   "frames": []
  }
 ]
};
