window.PROBLEM = {
 "id": "1236",
 "title": "Web Crawler",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given a starting web address startUrl and an object htmlParser with a method getUrls(url) that returns all the links on that page. Starting at startUrl, follow links to crawl pages, but ONLY pages on the same website (the same hostname, the part right after 'http://') as startUrl, never visiting a page twice. Return all pages you reached, in any order. Example: starting at 'http://news.yahoo.com/news/topics/', which links to its own site and to news.google.com, you reach the two yahoo pages and skip google.",
 "why": "Start at a web page and follow its links, but only to pages on the SAME website (hostname). Return every page reached.",
 "idea": "A graph search: a queue of pages to visit, a set of pages already seen, and for each page ask HtmlParser.getUrls for its links, keeping only those on the same host.",
 "input": "start http://news.yahoo.com/news/topics/ (links to its own site and news.google.com)",
 "output": "the two yahoo pages",
 "notes": [],
 "best": "A graph search: a queue of pages to visit, a set of pages already seen, and for each page ask HtmlParser.getUrls for its links, keeping only those on the same host.",
 "variants": [
  {
   "name": "BFS limited to the starting hostname",
   "code": "class Solution:\n    def crawl(self, startUrl, htmlParser):\n        host = startUrl.split('/')[2]\n        seen, q = {startUrl}, deque([startUrl])\n        while q:\n            u = q.popleft()\n            for v in htmlParser.getUrls(u):\n                if v.split('/')[2] == host and v not in seen:\n                    seen.add(v)\n                    q.append(v)\n        return list(seen)",
   "time": "O(pages)",
   "space": "O(pages)",
   "explain": "A graph search: a queue of pages to visit, a set of pages already seen, and for each page ask HtmlParser.getUrls for its links, keeping only those on the same host.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "DFS",
   "tag": "Alternative",
   "code": "class Solution:\n    def crawl(self, startUrl, htmlParser):\n        host = startUrl.split('/')[2]\n        seen = {startUrl}\n        def dfs(u):\n            for v in htmlParser.getUrls(u):\n                if v.split('/')[2] == host and v not in seen:\n                    seen.add(v)\n                    dfs(v)\n        dfs(startUrl)\n        return list(seen)",
   "time": "O(pages)",
   "space": "O(pages)",
   "explain": "Same search but depth-first with recursion.",
   "frames": [],
   "alt": true
  }
 ]
};
