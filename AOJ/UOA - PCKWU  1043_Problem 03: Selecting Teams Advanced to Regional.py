
"""
Sample Input
6
1 1 6 200
2 1 6 300
3 1 6 400
4 2 5 1200
5 1 5 1400
6 3 4 800
3
777 1 5 300
808 2 4 20
123 3 6 500
2
2 1 3 100
1 1 3 100
0

while 1:
  if n = 0:
    break

  Teams = []
  for i in range(n):
    Teams.append(map(int,input().split()))


ルール 1：
その時点での選抜チーム数が 10 に満たない場合：
A と同じ所属でその時点で選抜されたチームの数が 3 に満たなければ、A は選抜されます。
ルール 2：
その時点での選抜チーム数が 20 に満たない場合：
A と同じ所属でその時点で選抜されたチームの数が 2 に満たなければ、A は選抜されます。
ルール 3：
その時点での選抜チーム数が 26 に満たない場合：
A と同じ所属でその時点で選抜されたチームがなければ、A は選抜さます。
また、成績の順番は次のルールで決定されます：

より多くの問題を解いたチームが上位となります。
解いた問題数が同じ場合は、ペナルティが小さいチームが上位となります。

この問題では、正解数とペナルティが同じチームがあった場合はIDが小さい方を上位とします。
"""

# -*- coding: utf-8 -*-
from sys import stdin
from operator import itemgetter

while 1:
  n = int(stdin.readline().rstrip())
  if n == 0:
    break
  teams = []
  #選抜されたチーム
  Selected_team_id = []
  cnt_selected_teams = 0
  #所属ごとのランキング（所属ごとの選抜チーム数）
  dic_shozoku_and_cntSelected = {}

  for i in range(n):
    * t, = map(int, stdin.readline().split())
    teams.append(t)
    if not dic_shozoku_and_cntSelected.__contains__(t[1]):
      dic_shozoku_and_cntSelected[t[1]] = 0

  sorted_teams1 = sorted(teams, key=itemgetter(3, 0))  # ペナルティ、ID
  sorted_teams = sorted(sorted_teams1, key=itemgetter(2), reverse=True)  # 正解数
  for t in sorted_teams:
    cnt_same_shozoku = dic_shozoku_and_cntSelected[t[1]]
    if cnt_selected_teams < 10:
      if cnt_same_shozoku < 3:
        Selected_team_id.append(t[0])
        dic_shozoku_and_cntSelected[t[1]] += 1
        cnt_selected_teams += 1
    elif cnt_selected_teams < 20:
      if cnt_same_shozoku < 2:
        Selected_team_id.append(t[0])
        dic_shozoku_and_cntSelected[t[1]] += 1
        cnt_selected_teams += 1
    elif cnt_selected_teams < 26:
      if cnt_same_shozoku < 1:
        Selected_team_id.append(t[0])
        dic_shozoku_and_cntSelected[t[1]] += 1
        cnt_selected_teams += 1

  print("\n".join(map(str,Selected_team_id)))
