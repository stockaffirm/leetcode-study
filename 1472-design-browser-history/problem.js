window.PROBLEM = {
 "id": "1472",
 "title": "Design Browser History",
 "level": "Medium",
 "topic": "Design",
 "question": "Design a web browser history that starts on a homepage. visit(url) opens a new page and throws away all pages you could have gone 'forward' to. back(steps) moves back up to that many pages (stopping at the first page) and returns the page you are on; forward(steps) moves forward up to that many pages (stopping at the last) and returns the page you are on. Example: home 'leetcode.com'; visit google, facebook, youtube; back(1) → facebook; back(1) → google; forward(1) → facebook; visit linkedin; forward(2) → linkedin (nothing ahead); back(2) → google; back(7) → leetcode.com.",
 "why": "A browser with visit, back and forward. Visiting a new page erases the 'forward' pages.",
 "idea": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
 "input": "home leetcode.com; visit google, facebook, youtube; back 1, back 1, forward 1, visit linkedin, forward 2, back 2, back 7",
 "output": "facebook, google, facebook, linkedin, google, leetcode",
 "notes": [],
 "best": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
 "variants": [
  {
   "name": "List of pages + current index",
   "code": "class BrowserHistory:\n    def __init__(self, homepage):\n        self.pages = [homepage]\n        self.cur = 0\n    def visit(self, url):\n        self.pages = self.pages[:self.cur + 1] + [url]\n        self.cur += 1\n    def back(self, steps):\n        self.cur = max(0, self.cur - steps)\n        return self.pages[self.cur]\n    def forward(self, steps):\n        self.cur = min(len(self.pages) - 1, self.cur + steps)\n        return self.pages[self.cur]",
   "time": "O(1) per move",
   "space": "O(pages)",
   "explain": "Keep a list of pages and an index for the current page. visit cuts the list after the current page and appends; back/forward just move the index (clamped to the list).",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Two stacks",
   "tag": "Alternative",
   "code": "class BrowserHistory:\n    def __init__(self, homepage):\n        self.back_st, self.fwd_st, self.cur = [], [], homepage\n    def visit(self, url):\n        self.back_st.append(self.cur)\n        self.cur = url\n        self.fwd_st = []\n    def back(self, steps):\n        while steps and self.back_st:\n            self.fwd_st.append(self.cur)\n            self.cur = self.back_st.pop()\n            steps -= 1\n        return self.cur\n    def forward(self, steps):\n        while steps and self.fwd_st:\n            self.back_st.append(self.cur)\n            self.cur = self.fwd_st.pop()\n            steps -= 1\n        return self.cur",
   "time": "O(steps)",
   "space": "O(pages)",
   "explain": "A 'back' stack and a 'forward' stack; moving shifts pages between them.",
   "frames": [],
   "alt": true
  }
 ]
};
