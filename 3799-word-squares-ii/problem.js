window.PROBLEM = {
 "id": "3799",
 "title": "Word Squares II",
 "level": "Medium",
 "topic": "Backtracking",
 "question": "words are distinct 4-letter strings. A word square is four distinct words (top, left, right, bottom) with top[0]=left[0], top[3]=right[0], bottom[0]=left[3], bottom[3]=right[3]. Return all valid squares sorted lexicographically by (top, left, right, bottom). Example: ['able','area','echo','also'] → [['able','area','echo','also'],['area','able','also','echo']].",
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
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Filter by matching corners",
   "tag": "Alternative",
   "code": "class Solution:\n    def wordSquares(self, words):\n        res = []\n        for top in words:\n            for left in words:\n                if left == top or left[0] != top[0]:\n                    continue\n                for right in words:\n                    if right in (top, left) or right[0] != top[3]:\n                        continue\n                    for bottom in words:\n                        if bottom in (top, left, right):\n                            continue\n                        if bottom[0] == left[3] and bottom[3] == right[3]:\n                            res.append([top, left, right, bottom])\n        return sorted(res)",
   "time": "O(n⁴) worst",
   "space": "O(1)",
   "explain": "Pick top, then only left/right words with the right first letter, then bottom with the right corners.",
   "frames": [],
   "alt": true
  }
 ]
};
