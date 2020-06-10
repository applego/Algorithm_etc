# -*- coding: utf-8 -*-
from sys import stdin

#s = 'vanceknowledgetoad'
#p = 'advance'
s = stdin.readline().rstrip()
p = stdin.readline().rstrip()

s = s * 2

# 提出した正解
if p in s:
  print('Yes')
else:
  print('No')

#頑張って自作した正解
#print(s)
#print(len(p))
cnt_match_inrow=0
p_index = 0
match_start_index = 0
match_start_buf=0
s_index = -1
#だめ　無限ループ
while s_index < len(s)-1:
  s_index+=1
  if s[s_index] == p[p_index]:
    if p_index == 0:
      match_start_index = s_index
    p_index += 1
    cnt_match_inrow += 1
    if cnt_match_inrow == len(p):
      print('Yes')
      break
  else:
    p_index = 0
    s_index -= cnt_match_inrow
    cnt_match_inrow = 0
    # if s[s_index] == p[p_index]:
    #   if p_index == 0:
    #     match_start_index = s_index
    #   p_index += 1
    #   cnt_match_inrow += 1
    # else:
    #   if match_start_buf != s_index:
    #     s_index = match_start_index + 1
    #     match_start_buf=match_start_index
else:
  print('No')

#最初の答え　未正解
# for si,ss in enumerate(list(s)):
#   #print(str(si)+''+str(ss))
#   if ss == p[p_index]:
#     #print('match')
#     p_index += 1
#     cnt_match_inrow+=1
#   else:
#     p_index = 0
#     cnt_match_inrow = 0
#     # if ss == p[p_index]:  #p_index=0
#     #   p_index += 1
#     #   cnt_match_inrow+=1
#   if cnt_match_inrow == len(p):
#     print('Yes')
#     break
# else:
#   print('No')
