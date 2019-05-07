# -*- coding: utf-8 -*-
# N = int(input())
# l = []
# for i in range(N):
#     l.append(int(input()))

# ans = -1*(10**9)
# for i in range(len(l)):
#     if i+1 != len(l):
#         after_max = max(l[i+1:])
#         diff = after_max - l[i]
#         if diff > ans:
#             ans = diff

# # 出力
# print("{}".format(ans))

# 上記のアルゴリズムは計算量がO（n**2）？2n ?
# nの最大値が200000なので時間がオーバーしてしまう

N = int(input())
R = []

for i in range(N):
    R.append(int(input()))

vmax = -1*(10**9)
vmin = R[0]

for i in range(1,len(R)):
    vmax = max(vmax,R[i]-vmin)
    vmin = min(vmin,R[i])

print(vmax)
