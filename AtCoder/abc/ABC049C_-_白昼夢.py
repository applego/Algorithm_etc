import time

# -*- coding: utf-8 -*-
import sys
from sys import stdin

S = stdin.readline().rstrip()
divide = ['dream', 'dreamer', 'erase', 'eraser']

def DFS(n):  #n文字目移行の文字がうまく着れるかを計算します
  if n == len(S): return True  #最後まで来たら成功
  for i in divide:
    if (n + len(i) <= len(S)) and S[n:n + len(i)] == i:
      if DFS(n + len(i)): return True  #とりあえず切ってみて成功だったら嬉しい
  return False  #どうやっても切れなかったら失敗

print("YES" if DFS(0) else "NO")

#! うまくいかず　「逆から」
# S = S[::-1]
# for i in range(len(candidates)):
#   candidates[i] = candidates[i][::-1]

# can = True
# for i in range(len(S)):
#   can2 = False
#   for c in candidates:
#     if S[i:i + len(c)] == c:
#       can2 = True
#       i += len(c)
#       if i == len(S):
#         print("YES")
#         sys.exit(0)
#   if not can2:
#     can = False
#     print("NO")
#     sys.exit(0)
#     break

# print("YES" if can else "NO")


#すげ
import re
ans = "YES" if re.match("^(dream|dreamer|erase|eraser)+$", S) else "NO"
print(ans)




#ボツ
# dic_candidate_isUsed = {'dream': 0, 'dreamer': 0, 'erase': 0, 'eraser': 0}

# while True:
#   is_used = [0 for i in range(4)]
#   tmp_s = S
#   while True:
#     for i in range(4):
#       if is_used[i] == 1:
#         continue
#       ss = candidates[i]
#       is_used[i] = 1
#       if tmp_s.startswith(ss):
#         tmp_s = tmp_s[len(ss):]
#         if len(tmp_s) == 0:
#           print('YES')
#           sys.exit(0)
#         is_used = [0 for i in range(4)]
#         break
#       if len([i for i in is_used if i == 0]) == 0:
#         break
#     else:
#       continue
