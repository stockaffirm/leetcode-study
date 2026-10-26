window.PROBLEM = {
 "id": "1410",
 "title": "HTML Entity Parser",
 "level": "Medium",
 "topic": "Array / String",
 "question": "Replace the HTML entities &quot; &apos; &amp; &gt; &lt; &frasl; in the text by the characters \" ' & > < / respectively. Anything else stays as it is. Example: '&amp; is an HTML entity but &ambassador; is not.' → '& is an HTML entity but &ambassador; is not.'",
 "why": "'&amp; is an HTML entity but &ambassador; is not.' → '& is an HTML entity but &ambassador; is not.'",
 "idea": "Replace each known entity (&quot; &apos; &gt; &lt; &frasl;) by its character. Replace &amp; last, otherwise text like &amp;gt; would wrongly turn into > instead of &gt;.",
 "input": "text = \"&amp; is an HTML entity but &ambassador; is not.\"",
 "output": "\"& is an HTML entity but &ambassador; is not.\"",
 "notes": [],
 "best": "Replace each known entity (&quot; &apos; &gt; &lt; &frasl;) by its character. Replace &amp; last, otherwise text like &amp;gt; would wrongly turn into > instead of &gt;.",
 "variants": [
  {
   "name": "Replace entities, ampersand last",
   "code": "class Solution:\n    def entityParser(self, text):\n        for ent, ch in ((\"&quot;\", '\"'), (\"&apos;\", \"'\"), (\"&gt;\", \">\"), (\"&lt;\", \"<\"), (\"&frasl;\", \"/\"), (\"&amp;\", \"&\")):\n            text = text.replace(ent, ch)\n        return text",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Replace each known entity (&quot; &apos; &gt; &lt; &frasl;) by its character. Replace &amp; last, otherwise text like &amp;gt; would wrongly turn into > instead of &gt;.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Scan with a lookup table",
   "tag": "Alternative",
   "code": "class Solution:\n    def entityParser(self, text):\n        table = {\"&quot;\": '\"', \"&apos;\": \"'\", \"&amp;\": \"&\", \"&gt;\": \">\", \"&lt;\": \"<\", \"&frasl;\": \"/\"}\n        res = []\n        i = 0\n        while i < len(text):\n            for ent, ch in table.items():\n                if text.startswith(ent, i):\n                    res.append(ch)\n                    i += len(ent)\n                    break\n            else:\n                res.append(text[i])\n                i += 1\n        return ''.join(res)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Walk the text; at each '&' try every entity at that position and copy its character, otherwise copy the letter.",
   "frames": [],
   "alt": true
  }
 ]
};
