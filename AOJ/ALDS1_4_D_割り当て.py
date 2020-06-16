

# 積荷
# #1. 最大積載量の最小値になりうる値をセット
# w_per_track_min = math.ceil(w_sum / k)
# #w_per_track_minを１つずつ上げていき最初にトラックの台数==kとなったときのw_per_tarck_minが答え
# while True:
#   tracks = []
#   w_dic_copy = copy.copy(w_dic)
#   while w_dic_copy
#     heaviest_w = None
#     for i in range(len(w_list), 0, -1):
#       if w_dic[w_list[i]] > 0:
#         heaviest_w = w_dic[w_list[i]]
#         w_dic[w_list[i]] -= 1
#         break
#     w_room_track = w_per_track_min - heaviest_w
#     if w_room_track <= 0:
#       continue


#   if len(tracks) == k:
#     print(w_per_track_min)
#     break

#１．重いものから１つ選択

#print("time{}".format(time.time() - t1))



# #1
# w_dic = {}
# t2 = time.time()

# for i in w_list:
#   print(i)
#   if i in w_dic:
#     w_dic[i] += 1
#   else:
#     w_dic[i] = 1

# print("time{}".format(time.time() - t2))


# -*- coding: utf-8 -*-
import time
from sys import stdin
import math
import copy
from operator import itemgetter

def wariate(w_per_track):
  track_list = []
  w_dic_tmp = copy.copy(w_dic)

  while len(w_dic_tmp) > 0:
    #! w_dic_tmpの中から最大値
    w_now = sorted(w_dic_tmp.keys())[-1]
    w_dic_tmp[w_now] -= 1
    w_tumu = w_now
    if w_dic_tmp[w_now] == 0: w_dic_tmp.pop(w_now)
    space = w_per_track - w_now
    w_now = space
    while w_now > 0 and space > 0:
      if w_dic_tmp.__contains__(w_now):
        w_dic_tmp[w_now] -= 1
        w_tumu += w_now
        if w_dic_tmp[w_now] == 0:
          w_dic_tmp.pop(w_now)
          if len(w_dic_tmp) == 0:
            break
        space -= w_now
      else:
        w_now -= 1
    track_list.append(w_tumu)
  else:
    if len(track_list) == k:
      return w_per_track
    else:
      return wariate(w_per_track + 1)



def main():
  w_per_track = math.ceil(w_sum / k)
  print(wariate(w_per_track))


n, k = map(int, stdin.readline().split())
#w_list = [int(stdin.readline().rstrip()) for _ in range(n)]
w_list = []  # 重さ順序
w_dic = {}  # 在庫管理
w_sum = 0
for i in range(n):
    w = int(stdin.readline().rstrip())
    w_sum += w
    w_list.append(w)

w_list.sort()
for i in w_list:
  if w_dic.__contains__(i):
    w_dic[i] += 1
  else:
    w_dic[i] = 1

main()

#! 積む順番を変えてはいけないみたいだ

# 二部探索を使う
# Pの候補は積荷リストの中で最大の重さ < 積荷リストの合計の範囲で、決められたトラック数を満たす値
# l < m((l+r)//2) < r
# mがトラック数の条件を満たす→r = mとする(もっと小さいPを探しに行く)
#               満たさない→l = m+1とする(mを小さくし過ぎたためm+1以上のPを探しに行く)
# l < rを満たさなかったら終了 その時のr(l)の値をPとする
