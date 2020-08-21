# -*- coding: utf-8 -*-
from sys import stdin

class CSD:
    def __init__(self, arg_start, arg_end, arg_S):
        self.start = arg_start
        self.end = arg_end
        self.S = arg_S

def main():
    LOC = []
    POOL = []

    line = stdin.readline().rstrip()
    loc = 0
    sum_S = 0

    for ch in line:
        if ch == '\\':
            LOC.append(loc)
        elif ch == '/':
            if len(LOC) == 0:
                continue
            tmp_start = int(LOC.pop())
            tmp_end = loc
            tmp_S = tmp_end - tmp_start
            sum_S += tmp_S

            #すでに突っ込まれている湖の断片が、今回の断片の部分区間になるなら統合する
            while len(POOL) > 0:
                if POOL[-1].start > tmp_start and POOL[-1].end < tmp_end:
                    tmp_S += POOL[-1].S
                    POOL.pop()
                else:
                    break
            POOL.append(CSD(tmp_start, tmp_end, tmp_S))
        else:
            pass
        loc += 1

    print("%d" % (sum_S))
    print("%d" % (len(POOL)), end="")

    while len(POOL) > 0:
        print(" %d" % (POOL[0].S), end="")  #先頭から
        POOL.pop(0)
    print()

main()

def main2():
    kudaripoint_idx_list = []
    p = []
    a = i = 0
    for c in stdin.readline().rstrip():
        if c == "\\":
            kudaripoint_idx_list += [i]
        elif c == "/" and kudaripoint_idx_list:
            j = kudaripoint_idx_list.pop()
            t = i - j
            a += t
            while p and p[-1][0] > j:
                t += p[-1][1]
                p.pop()
            p += [(j, t)]
        i += 1
    print(a)
    if p: print(len(p), *list(zip(*p))[1])
    else: print(0)

main2()

#! リタイア
# def main():
#     input_str = stdin.readline().rstrip()
#     num_list = get_num_list(input_str)
#     #下り始め位置を特定
#     idx = 0
#     start_level = 0
#     lakes =[]
#     while idx < len(num_list):
#         print(input_str[idx])
#         print(num_list[idx])
#         if input_str[idx] == '\\':
#             if idx == 0 or input_str[idx - 1] != '\\':
#                 #下がり始め
#                 area, lake_finish_idx = calc_lake_area(start_level, idx, input_str,num_list)
#                 lakes.append(area)
#                 idx = lake_finish_idx
#         idx += 1



# def get_num_list(input_str):
#     depth_current = 0 #num_lis[0] = 0
#     # input_num = [(depth_current, True)]
#     num_list =[]# [0]
#     for i in input_str:
#         # flag_change_point = True if previous_cmd != i else False
#         if i == '\\':
#             depth_current += 1
#             # input_num.append((depth_current, flag_change_point))
#         elif i == '/':
#             depth_current -= 1
#             # input_num.append((depth_current, flag_change_point))
#         # elif i == '_':
#             # input_num.append((depth_current, flag_change_point))
#         # else:
#             # print("invalid input")
#         num_list.append(depth_current)
#         # previous_cmd = i
#     else:
#         return num_list

# depth_lake_start = 0
# cnt_lake = 0
# area_lake = 0
# total_area_lake = 0
# previous_cmd = ''
# width_current = 0
# # depth_current=0

# # input_str = stdin.readline().rstrip()
# # depth_current = 0
# # input_num = [(depth_current,True)]
# # for i in input_str:
# #     flag_change_point = True if previous_cmd != i else False
# #     if i == '\\':
# #         depth_current += 1
# #         input_num.append((depth_current,flag_change_point))
# #     elif i == '/':
# #         depth_current -= 1
# #         input_num.append((depth_current,flag_change_point))
# #     elif i == '_':
# #         input_num.append((depth_current,flag_change_point))
# #     else:
# #         print("invalid input")
# #     previous_cmd = i


# def calc_lake_area(start_level, start_idx, input_str, num_list):
#     area = 0
#     print(' '.join(map(str, [item[0] for item in num_list])))
#     ret_find_idx, lake_finish_depth= find_idx(start_level, start_idx, num_list)
#     # tmp_depth = 0
#     tmp_width = 0
#     previous_line = input_str[start_idx]

#     for i in range(start_idx, ret_find_idx):
#         if input_str[i] != previous_line:
#             #ライン一個前と違う→面積計算
#             if input_str[i] == '/':

#             else:

#     return area, ret_find_idx

# def find_idx(search_idx, input_num, depth_start):
#     ret_search_idx = search_idx
#     while ret_search_idx<len(input_num):
#         ret_search_idx += 1
#         if input_num[ret_search_idx][0] == depth_start:
#             # cnt_lake += 1
#             # la = calc_lake_area(input_num[i-1:search_idx+1])
#             # list_lake_area.append(la)
#             # i+=search_idx-i#TODO check
#             return ret_search_idx,depth_start
#     else:
#         return find_idx(search_idx, input_num, depth_start + 1)

# # depth_start = 0
# # depth_current = 0
# # list_lake_area = []
# # # for i in range(1, len(input_num) + 1):
# # i = 1
# # while i < len(input_num):
# #     depth_next = input_num[i][0]
# #     flag_change_point = input_num[i][1]
# #     # dd = input_num[i] - input_num[i - 1]
# #     if depth_current < depth_next:  #\
# #         if flag_change_point:  #下りはじめ
# #             depth_start = input_num[i-1][0]
# #             search_idx = i
# #             find_idx = find_idx(search_idx, input_num, depth_start)
# #             if find_idx > 0:
# #                 cnt_lake += 1
# #                 i += find_idx-
# #                 if serach_idx == find_idx:  #start_depth変えずに取得
# #                     la = calc_lake_area(input[])
# #             while search_idx<len(input_num):
# #                 search_idx += 1
# #                 if input_num[search_idx][0] == depth_start:
# #                     cnt_lake += 1
# #                     la = calc_lake_area(input_num[i-1:search_idx+1])
# #                     list_lake_area.append(la)
# #                     i+=search_idx-i#TODO check
# #                     break
# #             else:



# #     i += 1
# main()
