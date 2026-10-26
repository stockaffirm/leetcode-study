window.PROBLEM = {
 "id": "843",
 "title": "Guess the Word",
 "level": "Hard",
 "topic": "Array / String",
 "question": "",
 "why": "A secret word is among a list of words. master.guess(word) tells how many letters match in position. Find the secret in at most 10 guesses.",
 "idea": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
 "input": "words ['acckzz','ccbazz','eiowzz','abcczz'], secret 'acckzz'",
 "output": "found within 10 guesses",
 "notes": [],
 "best": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
 "variants": [
  {
   "name": "Pick the guess that splits candidates best",
   "code": "class Solution:\n    def findSecretWord(self, words, master):\n        match = lambda a, b: sum(x == y for x, y in zip(a, b))\n        cand = words[:]\n        for _ in range(10):\n            best = min(cand, key=lambda w: max(Counter(match(w, x) for x in cand).values()))\n            m = master.guess(best)\n            if m == len(best): return\n            cand = [x for x in cand if match(best, x) == m]",
   "time": "O(10·n²)",
   "space": "O(n)",
   "explain": "Keep the list of candidates consistent with all answers so far. Guess the word whose worst-case group of equal match counts is smallest (minimax); then keep only candidates with the same match count against that guess.",
   "frames": []
  }
 ]
};
