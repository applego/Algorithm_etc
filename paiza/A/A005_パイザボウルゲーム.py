# -*- coding: utf-8 -*-
frame_num, pin_num, n = list(map(int, input().split()))
# throws = input().split()
throws = [int(i) if i != 'G' else 0 for i in input().split()]

frame_cnt = 1
score = 0
throw_cnt_in_frame = 0

for (i, honnsuu) in enumerate(throws):
  throw_cnt_in_frame += 1
  # print(score)
  #最終フレームかどうか
  if frame_cnt == frame_num:
    if throw_cnt_in_frame == 1 and throws[i] == pin_num:
      if throws[i + 1] == pin_num:
        score += throws[i] + throws[i + 1] * 2 + throws[i + 2] * 3
        break
      else:
        score += throws[i] + throws[i + 1] * 2 + throws[i + 2] * 2
        break
    else:
      if throws[i] + throws[i + 1] == pin_num:
        score += throws[i] + throws[i + 1] + throws[i + 2] * 2
        break
      else:
        score += throws[i] + throws[i + 1]
        break
  if throw_cnt_in_frame == 1:
    #ストライクかどうか
    if honnsuu == pin_num:
      score += pin_num + throws[i + 1] + throws[i + 2]
      frame_cnt += 1
      throw_cnt_in_frame = 0
  elif throw_cnt_in_frame == 2:
    #スペアかどうか
    if throws[i - 1] + honnsuu == pin_num:
      score += pin_num + throws[i + 1]
    else:
      score += throws[i - 1] + honnsuu
    frame_cnt += 1
    throw_cnt_in_frame = 0
print(score)
