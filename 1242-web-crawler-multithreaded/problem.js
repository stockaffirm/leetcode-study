window.PROBLEM = {
 "id": "1242",
 "title": "Web Crawler Multithreaded",
 "level": "Medium",
 "topic": "Graph",
 "question": "",
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
   "frames": []
  }
 ]
};
