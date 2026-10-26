window.PROBLEM = {
 "id": "408",
 "title": "Valid Word Abbreviation",
 "level": "Easy",
 "topic": "Two Pointers",
 "question": "",
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
   "frames": []
  }
 ]
};
