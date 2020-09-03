"""
X個/回
T分/回
N個


"""
# -*- coding: utf-8 -*-

N, X, T = map(int, input().split())
#何回まわす必要があるか
nessesary_cnt = (N + X - 1) // X
# print(nessesary_cnt)
print(nessesary_cnt*T)