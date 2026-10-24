# Company set batch 3 (NVIDIA part 2)
S = lambda call: "Solution()." + call
UNORD = {863}
WALK = "def walk(n): return [n.val, [walk(c) for c in n.children]]\n"
VALS = "def vals(h):\n    out=[]\n    while h: out.append(h.val); h=h.next\n    return out\n"
MZ = "[[0,0,1,0,0],[0,0,0,0,0],[0,0,0,1,0],[1,1,0,1,1],[0,0,0,0,0]]"
TR = "r=mk_tree([3,5,1,6,2,0,8,None,None,7,4])\n"
D = {
412: S("fizzBuzz(15)"),
414: S("thirdMax([2,2,3,1])"),
428: WALK + "c=Codec()\nr=Node(1,[Node(3,[Node(5),Node(6)]),Node(2),Node(4)])\nRESULT=walk(c.deserialize(c.serialize(r)))",
490: S("hasPath(%s,[0,4],[4,4])" % MZ),
503: S("nextGreaterElements([1,2,1])"),
509: S("fib(6)"),
543: S("diameterOfBinaryTree(mk_tree([1,2,3,4,5]))"),
560: S("subarraySum([1,2,3],3)"),
622: "q=MyCircularQueue(3)\nRESULT=[q.enQueue(1),q.enQueue(2),q.enQueue(3),q.enQueue(4),q.Rear(),q.isFull(),q.deQueue(),q.enQueue(4),q.Rear()]",
628: S("maximumProduct([-10,-10,5,2])"),
648: S("replaceWords(['cat','bat','rat'],'the cattle was rattled by the battery')"),
692: S("topKFrequent(['i','love','leetcode','i','love','coding'],2)"),
743: S("networkDelayTime([[2,1,1],[2,3,1],[3,4,1]],4,2)"),
761: S("makeLargestSpecial('11011000')"),
773: S("slidingPuzzle([[4,1,2],[5,0,3]])"),
806: S("numberOfLines([4]+[10]*25,'bbbcccdddaaa')"),
863: TR + S("distanceK(r,find(r,5),2)").replace("Solution()","RESULT=Solution()",1),
876: VALS + S("middleNode(mk_list([1,2,3,4,5]))").replace("Solution().middleNode","RESULT=vals(Solution().middleNode") + ")",
894: "trees=Solution().allPossibleFBT(7)\nRESULT=len(trees)",
930: S("numSubarraysWithSum([1,0,1,0,1],2)"),
1046: S("lastStoneWeight([2,7,4,1,8,1])"),
}
D2 = {
412: (S("fizzBuzz(1)"),"For n = 1 no number is divisible by 3 or 5, so the only entry is the plain number '1'.","n = 1"),
414: (S("thirdMax([1,2])"),"There are only two different values, so there is no third maximum; the answer falls back to the largest value, 2.","[1, 2]"),
428: (WALK + "c=Codec()\nr=Node(7)\nRESULT=walk(c.deserialize(c.serialize(r)))","A single node with no children: its child count is 0, so it reads back as just that node.","a tree with only the root 7"),
490: (S("hasPath(%s,[0,4],[3,2])" % MZ),"The ball can roll THROUGH (3,2) but cannot stop there (it keeps rolling until a wall), so the destination is never a stopping point: False.","same maze, destination (3,2)"),
503: (S("nextGreaterElements([5,4,3,2,1])"),"5 is the biggest, so nothing is greater even after wrapping (−1); every other number sees 5 after wrapping around.","[5, 4, 3, 2, 1]"),
509: (S("fib(0)"),"The sequence starts F(0) = 0, so asking for 0 returns 0 without any adding.","n = 0"),
543: (S("diameterOfBinaryTree(mk_tree([1]))"),"A single node has no edges, so the longest path has length 0.","[1]"),
560: (S("subarraySum([1,-1,0],0)"),"With negatives and zeros several runs can sum to 0: [1,-1], [0] and [1,-1,0] → 3.","[1, -1, 0], k=0"),
622: ("q=MyCircularQueue(1)\nRESULT=[q.Front(),q.deQueue(),q.isEmpty()]","Nothing was added: Front reports -1, deQueue has nothing to remove (False) and the queue is empty (True).","capacity 1: Front, deQueue, isEmpty"),
628: (S("maximumProduct([-4,-3,-2,-1])"),"With all negatives the best product comes from the three numbers closest to zero: −3 × −2 × −1 = −6.","[-4, -3, -2, -1]"),
648: (S("replaceWords(['a'],'hello world')"),"No word starts with 'a', so the sentence is unchanged.","roots [a], \"hello world\""),
692: (S("topKFrequent(['a','b','c','c'],2)"),"'c' appears twice; 'a' and 'b' tie at once, and ties are broken alphabetically, so 'a' comes second.","[a, b, c, c], k=2"),
743: (S("networkDelayTime([[2,1,1]],2,1)"),"Node 1 has no outgoing link, so the signal never reaches node 2: -1.","times [[2,1,1]], n=2, k=1"),
761: (S("makeLargestSpecial('101100')"),"The pieces '10' and '1100' can be swapped; putting the larger '1100' first gives '110010'.","\"101100\""),
773: (S("slidingPuzzle([[1,2,3],[5,4,0]])"),"Swapping only the 4 and 5 can never be reached by sliding tiles, so the puzzle is unsolvable: -1.","[[1,2,3],[5,4,0]]"),
806: (S("numberOfLines([10]*26,'a'*10)"),"Ten letters of width 10 fill the line exactly (100 is allowed), so one line of width 100.","every letter 10 wide, ten a's"),
863: (TR + S("distanceK(r,find(r,5),0)").replace("Solution()","RESULT=Solution()",1),"Distance 0 is the target itself.","same tree, target 5, k=0"),
876: (VALS + S("middleNode(mk_list([1,2,3,4,5,6]))").replace("Solution().middleNode","RESULT=vals(Solution().middleNode") + ")","Six nodes have two middles (3 and 4); the answer is the second one, 4.","1 → 2 → 3 → 4 → 5 → 6"),
894: ("trees=Solution().allPossibleFBT(2)\nRESULT=len(trees)","Every node must have 0 or 2 children, which forces an odd node count; n = 2 is impossible.","n = 2"),
930: (S("numSubarraysWithSum([0,0,0,0,0],0)"),"Every run of zeros sums to 0, so all 5·6/2 = 15 runs count.","[0, 0, 0, 0, 0], goal=0"),
1046: (S("lastStoneWeight([1,1])"),"Two equal stones destroy each other, leaving nothing: 0.","[1, 1]"),
}
