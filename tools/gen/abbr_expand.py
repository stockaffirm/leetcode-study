#!/usr/bin/env python3
"""Spell out abbreviations in brackets at first use per problem (w:/k:/explain: fields and question lines)."""
import re, sys
ABBR = {
 "BFS":"Breadth-First Search","DFS":"Depth-First Search","DP":"Dynamic Programming",
 "DAG":"Directed Acyclic Graph","BST":"Binary Search Tree","GCD":"Greatest Common Divisor",
 "LCP":"Longest Common Prefix","LCA":"Lowest Common Ancestor","FIFO":"First In, First Out",
 "LIFO":"Last In, First Out","LRU":"Least Recently Used","XOR":"exclusive OR",
 "LPS":"Longest Palindromic Subsequence","LCS":"Longest Common Subsequence",
 "DSU":"Disjoint Set Union","ASCII":"American Standard Code for Information Interchange",
 "LIS":"Longest Increasing Subsequence","MST":"Minimum Spanning Tree",
}
pat = re.compile(r'\b(' + '|'.join(ABBR) + r')\b(?! \()')
def expand(text, seen):
    def rep(m):
        a = m.group(1)
        if a in seen: return a
        seen.add(a)
        return "%s (%s)" % (a, ABBR[a])
    return pat.sub(rep, text)
def process_field(m, seen):
    return m.group(1) + expand(m.group(2), seen) + m.group(3)
def run_b(src):
    out=[]; parts=re.split(r'(?=^lite\(\{)', src, flags=re.M)
    for p in parts:
        seen=set()
        p=re.sub(r'(\bw:")((?:[^"\\]|\\.)*)(")', lambda m: process_field(m,seen), p)
        p=re.sub(r'(\bk:")((?:[^"\\]|\\.)*)(")', lambda m: process_field(m,seen), p)
        out.append(p)
    return ''.join(out)
def run_alts(src):
    parts=re.split(r'(?=^alt\()', src, flags=re.M); out=[]
    for p in parts:
        seen=set()
        p=re.sub(r'(\bexplain:")((?:[^"\\]|\\.)*)(")', lambda m: process_field(m,seen), p)
        out.append(p)
    return ''.join(out)
def run_q(src):
    out=[]
    for line in src.split('\n'):
        m=re.match(r'^(\d+:")((?:[^"\\]|\\.)*)(",?)$', line)
        if m:
            line=m.group(1)+expand(m.group(2), set())+m.group(3)
        out.append(line)
    return '\n'.join(out)
for f in sys.argv[1:]:
    s=open(f).read()
    n = run_b(s) if re.search(r'^lite\(\{',s,re.M) else run_alts(s) if re.search(r'^alt\(',s,re.M) else run_q(s)
    if n!=s: open(f,'w').write(n); print("expanded",f)
