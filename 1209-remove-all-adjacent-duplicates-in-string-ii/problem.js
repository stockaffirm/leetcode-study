window.PROBLEM = {
 "id": "1209",
 "title": "Remove All Adjacent Duplicates in String II",
 "level": "Medium",
 "topic": "Stack / Monotonic Stack",
 "question": "",
 "why": "'deeedbbcccbdaa', k=3: remove eee → 'ddbbcccbdaa'; remove ccc → 'ddbbbdaa'; remove bbb → 'dddaa'; remove ddd → 'aa'.",
 "idea": "Keep a stack of [letter, count]. A letter equal to the top increases its count; when the count reaches k the whole run is popped. Whatever stays is the answer.",
 "input": "s = \"deeedbbcccbdaa\", k = 3",
 "output": "\"aa\"",
 "notes": [],
 "best": "Keep a stack of [letter, count]. A letter equal to the top increases its count; when the count reaches k the whole run is popped. Whatever stays is the answer.",
 "variants": [
  {
   "name": "Stack of (letter, run length)",
   "code": "class Solution:\n    def removeDuplicates(self, s, k):\n        st = []\n        for ch in s:\n            if st and st[-1][0] == ch:\n                st[-1][1] += 1\n                if st[-1][1] == k:\n                    st.pop()\n            else:\n                st.append([ch, 1])\n        return \"\".join(c * n for c, n in st)",
   "time": "O(n)",
   "space": "O(n)",
   "explain": "Keep a stack of [letter, count]. A letter equal to the top increases its count; when the count reaches k the whole run is popped. Whatever stays is the answer.",
   "frames": []
  }
 ]
};
