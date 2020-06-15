# -*- coding: utf-8 -*-
from sys import stdin

depth_lake_start = 0
cnt_lake = 0
area_lake = 0
total_area_lake = 0
previous_cmd = ''
width_current = 0
# depth_current=0

input_str = stdin.readline().rstrip()
depth_current = 0
input_num = [(depth_current,True)]
for i in input_str:
    flag_change_point = True if previous_cmd != i else False
    if i == '\\':
        depth_current += 1
        input_num.append((depth_current,flag_change_point))
    elif i == '/':
        depth_current -= 1
        input_num.append((depth_current,flag_change_point))
    elif i == '_':
        input_num.append((depth_current,flag_change_point))
    else:
        print("invalid input")
    previous_cmd = i

def calc_lake_area(num_list):
    area = 0
    print(' '.join(map(str,[item[0] for item in num_list])))


    return area

def find_idx(search_idx, input_num, depth_start):
    ret_search_idx = search_idx
    while ret_search_idx<len(input_num):
        ret_search_idx += 1
        if input_num[ret_search_idx][0] == depth_start:
            # cnt_lake += 1
            # la = calc_lake_area(input_num[i-1:search_idx+1])
            # list_lake_area.append(la)
            # i+=search_idx-i#TODO check
            return ret_search_idx
    else:
        return find_idx(search_idx, input_num, depth_start + 1)

depth_start = 0
depth_current = 0
list_lake_area = []
# for i in range(1, len(input_num) + 1):
i = 1
while i < len(input_num):
    depth_next = input_num[i][0]
    flag_change_point = input_num[i][1]
    # dd = input_num[i] - input_num[i - 1]
    if depth_current < depth_next:  #\
        if flag_change_point:  #下りはじめ
            depth_start = input_num[i-1][0]
            search_idx = i
            find_idx = find_idx(search_idx, input_num, depth_start)
            if find_idx > 0:
                cnt_lake += 1
                i += find_idx-
                if serach_idx == find_idx:  #start_depth変えずに取得
                    la = calc_lake_area(input[])
            while search_idx<len(input_num):
                search_idx += 1
                if input_num[search_idx][0] == depth_start:
                    cnt_lake += 1
                    la = calc_lake_area(input_num[i-1:search_idx+1])
                    list_lake_area.append(la)
                    i+=search_idx-i#TODO check
                    break
            else:



    i += 1






print(input_num)