# -*- coding: utf-8 -*-
from sys import stdin
import ITP1_11_Dice

# def get_all_pattern(l):
#     all_pattern = []
#     org_l = list(l)
#     len_l = len(l)
#     num_of_pattern = len_l * (len_l - 1) / 2

#     while len(all_pattern)<num_of_pattern:
#         pattern = []
#         l = list(org_l)
#         for i in range(len_l):
#             pattern.append(l.pop())
#             if len(pattern) == 2:
#                 all_pattern.append(pattern)
#                 break

#     return all_pattern

    # for i in range(len(l)):
    #     pattern = []
    #     # if len(pattern) == 2:
    #     #     all_pattern.append(pattern)
    #     pattern.append(l.pop(i))
    #     if len(pattern) == 2:
    #         all_pattern.append(pattern)
    #         break
    #     else:
    #         get_all_pattern(all_pattern,l,org)
    # return all_pattern

N = int(stdin.readline().rstrip())
is_all_different = True
dices = [ITP1_11_Dice.Dice(list(map(int, stdin.readline().rstrip().split()))) for d in range(N)]

import itertools
for pattern in list(itertools.combinations(range(N), 2)):
    if dices[pattern[0]].equals(dices[pattern[1]]):
        print("No")
        break
else:
    print("Yes")

# for pattern in all_pattern:
#     if dices[pattern[0]].equals(dices[pattern[1]]):
#         print("No")
#         break
# else:
#     print("Yes")


# for dice_index in range(len(dices) - 1):
#     if dices[dice_index].equals(dices[dice_index + 1]):
#         print("No")
#         break
# else:
#     print("Yes")
