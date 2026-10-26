window.PROBLEM = {
 "id": "1410",
 "title": "HTML Entity Parser",
 "level": "Medium",
 "topic": "Array / String",
 "question": "",
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
   "frames": []
  }
 ]
};
