window.PROBLEM = {
 "id": "1813",
 "title": "Sentence Similarity III",
 "level": "Medium",
 "topic": "Two Pointers",
 "question": "",
 "why": "'My name is Haley' vs 'My Haley': 'My' matches in front and 'Haley' at the back; 'name is' is the inserted middle → true.",
 "idea": "Two sentences are similar if one can be made from the other by inserting a sentence in the middle (possibly at the ends). Split into words, count how many words match from the start and how many from the end; if the two counts together cover the shorter sentence it is similar.",
 "input": "sentence1 = \"My name is Haley\", sentence2 = \"My Haley\"",
 "output": "true",
 "notes": [],
 "best": "Two sentences are similar if one can be made from the other by inserting a sentence in the middle (possibly at the ends). Split into words, count how many words match from the start and how many from the end; if the two counts together cover the shorter sentence it is similar.",
 "variants": [
  {
   "name": "Match words from the front and from the back",
   "code": "class Solution:\n    def areSentencesSimilar(self, sentence1, sentence2):\n        a, b = sentence1.split(), sentence2.split()\n        if len(a) > len(b):\n            a, b = b, a\n        i = 0\n        while i < len(a) and a[i] == b[i]:\n            i += 1\n        j = 0\n        while j < len(a) - i and a[-1 - j] == b[-1 - j]:\n            j += 1\n        return i + j == len(a)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Two sentences are similar if one can be made from the other by inserting a sentence in the middle (possibly at the ends). Split into words, count how many words match from the start and how many from the end; if the two counts together cover the shorter sentence it is similar.",
   "frames": []
  }
 ]
};
