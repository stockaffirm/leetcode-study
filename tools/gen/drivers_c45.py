# Intel
S = lambda call: "Solution()." + call
UNORD = set()
D = {
2526: "d = DataStream(4, 3)\nRESULT = [d.consec(4), d.consec(4), d.consec(4), d.consec(3)]",
}
D2 = {
2526: ("d = DataStream(1, 1)\nRESULT = [d.consec(2), d.consec(1)]", "With k = 1 the latest number decides.", "k = 1"),
}
