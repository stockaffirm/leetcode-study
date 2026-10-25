window.PROBLEM = {
 "id": "408",
 "title": "Valid Word Abbreviation",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "A word can be shortened by replacing any pieces of it (not next to each other) by the NUMBER of letters replaced; the numbers have no leading zeros and a replaced piece cannot be empty. For example 'internationalization' can be written 'i12iz4n'. Given a word and an abbreviation, return true if the abbreviation is a valid shortening of that word. Example: word 'internationalization', abbr 'i12iz4n' → true; word 'apple', abbr 'a2e' → false.",
 "why": "Digits in an abbreviation mean 'skip this many letters'. 'i12iz4n' stands for 'internationalization'. Is the abbreviation valid for the word? (No leading zeros in a number.)",
 "idea": "Walk two pointers. A letter in the abbreviation must equal the word's letter; a number moves the word pointer ahead by that many. Both must end exactly at the end.",
 "input": "word \"internationalization\", abbr \"i12iz4n\"",
 "output": "True",
 "notes": [],
 "best": "Walk two pointers. A letter in the abbreviation must equal the word's letter; a number moves the word pointer ahead by that many. Both must end exactly at the end.",
 "variants": [
  {
   "name": "Two pointers over word and abbreviation",
   "code": "class Solution:\n    def validWordAbbreviation(self, word, abbr):\n        i = j = 0\n        while i < len(word) and j < len(abbr):\n            if abbr[j].isdigit():\n                if abbr[j] == '0': return False\n                num = 0\n                while j < len(abbr) and abbr[j].isdigit():\n                    num = num * 10 + int(abbr[j])\n                    j += 1\n                i += num\n            else:\n                if word[i] != abbr[j]: return False\n                i += 1\n                j += 1\n        return i == len(word) and j == len(abbr)",
   "time": "O(n)",
   "space": "O(1)",
   "explain": "Walk two pointers. A letter in the abbreviation must equal the word's letter; a number moves the word pointer ahead by that many. Both must end exactly at the end.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Turn digits into wildcards",
   "tag": "Pythonic",
   "code": "class Solution:\n    def validWordAbbreviation(self, word, abbr):\n        import re\n        if re.search(r'(^|\\D)0', abbr): return False\n        pattern = re.sub(r'\\d+', lambda m: '.' * int(m.group()), abbr)\n        return re.fullmatch(pattern, word) is not None",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace each number by that many '.' and match the whole word with a regular expression.",
   "frames": [],
   "alt": true
  }
 ]
};
