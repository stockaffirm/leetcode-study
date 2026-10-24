# multithreaded problems
S = lambda call: "Solution()." + call
UNORD = {1242}
HP = "G={'http://news.yahoo.com':['http://news.yahoo.com/news','http://news.yahoo.com/news/topics/'],'http://news.yahoo.com/news':['http://news.google.com'],'http://news.yahoo.com/news/topics/':['http://news.yahoo.com/news','http://news.yahoo.com/news/topics/','http://news.google.com'],'http://news.google.com':[]}\nclass HtmlParser:\n    def getUrls(self, u): return G.get(u, [])\n"
def FB(n): return "import threading\nout=[]\nfb=FizzBuzz(%d)\nts=[threading.Thread(target=fb.fizz,args=(lambda: out.append('fizz'),)),threading.Thread(target=fb.buzz,args=(lambda: out.append('buzz'),)),threading.Thread(target=fb.fizzbuzz,args=(lambda: out.append('fizzbuzz'),)),threading.Thread(target=fb.number,args=(lambda x: out.append(x),))]\nfor t in ts: t.start()\nfor t in ts: t.join()\nRESULT=out" % n
D = {
1195: FB(15),
1242: HP + "RESULT=sorted(Solution().crawl('http://news.yahoo.com/news/topics/',HtmlParser()))",
}
D2 = {
1195: (FB(3),"With n = 3 only the first three numbers are produced: 1, 2, fizz. All four threads still stop cleanly.","n = 3"),
1242: (HP + "RESULT=sorted(Solution().crawl('http://news.google.com',HtmlParser()))","The start page links nowhere, so only the page itself is returned.","start at news.google.com"),
}
