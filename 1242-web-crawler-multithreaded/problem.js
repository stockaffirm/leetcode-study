window.PROBLEM = {
 "id": "1242",
 "title": "Web Crawler Multithreaded",
 "level": "Medium",
 "topic": "Graph",
 "question": "You are given a starting web address and an object htmlParser with getUrls(url), which returns all links found on that page. Crawl all pages on the SAME website (same hostname) as the start address, never visiting a page twice, but make the crawl use SEVERAL THREADS so that slow page fetches happen in parallel. Return all pages found, in any order. Example: starting at 'http://news.yahoo.com/news/topics/', which links to its own site and to news.google.com, you return the two yahoo pages.",
 "why": "Crawl a website like the single-threaded crawler, but fetch many pages at the same time because each fetch is slow.",
 "idea": "Visit the site level by level. For each level, ask a thread pool to fetch all of its pages' links in parallel, then collect the new same-host links as the next level. Only the main thread touches the 'seen' set.",
 "input": "start http://news.yahoo.com/news/topics/",
 "output": "the two yahoo pages",
 "notes": [],
 "best": "Visit the site level by level. For each level, ask a thread pool to fetch all of its pages' links in parallel, then collect the new same-host links as the next level. Only the main thread touches the 'seen' set.",
 "variants": [
  {
   "name": "BFS levels fetched in parallel",
   "code": "from concurrent.futures import ThreadPoolExecutor\n\nclass Solution:\n    def crawl(self, startUrl, htmlParser):\n        host = startUrl.split('/')[2]\n        seen = {startUrl}\n        frontier = [startUrl]\n        with ThreadPoolExecutor(max_workers=4) as pool:\n            while frontier:\n                nxt = []\n                for links in pool.map(htmlParser.getUrls, frontier):\n                    for v in links:\n                        if v.split('/')[2] == host and v not in seen:\n                            seen.add(v)\n                            nxt.append(v)\n                frontier = nxt\n        return list(seen)",
   "time": "O(pages) work, parallel fetches",
   "space": "O(pages)",
   "explain": "Visit the site level by level. For each level, ask a thread pool to fetch all of its pages' links in parallel, then collect the new same-host links as the next level. Only the main thread touches the 'seen' set.",
   "frames": [],
   "tag": "Optimal"
  },
  {
   "name": "Single thread (like Web Crawler I)",
   "tag": "Brute force",
   "code": "class Solution:\n    def crawl(self, startUrl, htmlParser):\n        host = startUrl.split('/')[2]\n        seen, q = {startUrl}, deque([startUrl])\n        while q:\n            u = q.popleft()\n            for v in htmlParser.getUrls(u):\n                if v.split('/')[2] == host and v not in seen:\n                    seen.add(v)\n                    q.append(v)\n        return list(seen)",
   "time": "O(pages)",
   "space": "O(pages)",
   "explain": "The same search without any parallelism — correct, but each slow fetch waits for the previous one.",
   "frames": [],
   "alt": true
  }
 ]
};
