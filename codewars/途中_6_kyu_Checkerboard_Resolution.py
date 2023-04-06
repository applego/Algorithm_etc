def count_checkerboard(width, height, resolution):
    # 1. width * heightのマス目に左上から白色の正方形（長さresolution or width）を置いていく
    # 2. まだスペースがあれば(resolution*1がwidthより小さければ)、1の右隣に黒色の正方形を置く（長さresolution or (width-(1*resolutin))）
    # 3. まだスペースがあれば(resolution*2がwidthより小さければ)、2の右隣に白色の正方形を置く（長さresolution or (width-(2*resolutin))）
    # ...スペースがなくなるまで繰り返す

    total_masu = width * height
    if resolution > width and resolution > height:
        return total_masu

    # 1行目を作る
    index_wide = 0
    wihte_count = 0
    black_count = 0
    current_wihte = True
    while index_wide + resolution <= width:
        index_wide += resolution
        if current_wihte:
            wihte_count += resolution
        else:
            black_count += resolution
        current_wihte = not current_wihte
    else:
        if current_wihte:
            wihte_count += width - index_wide
            # index_wide += width - index_wide
        else:
            black_count += width - index_wide
            # index_wide += width - index_wide

    row1_white = wihte_count
    row1_black = black_count

    if height <= 1:
        return black_count

    # 2行目以降を作る
    # 1行目の白黒の数を使って、2行目以降の白黒の数を決める
    current_wihte = False if resolution == 1 else True
    index_height = 1
    index_in_resolution = 1
    while index_height < height:
        if current_wihte:
            wihte_count += row1_white
            black_count += row1_black
        else:
            black_count += row1_white
            wihte_count += row1_black

        index_height += 1
        index_in_resolution += 1
        if index_in_resolution == resolution or resolution == 1:
            index_in_resolution = 0
            current_wihte = not current_wihte
    return black_count


if __name__ == '__main__':
    # assert count_checkerboard(9, 5, 8) == 5
    assert count_checkerboard(11, 6, 1) == 33
