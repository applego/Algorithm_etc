import re

# ファイルの読み込み
with open("./codewars/test.ts", "r", encoding="utf-8") as file:
    text = file.read()

# from ' より後 ～ ' より前のテキストを取得
pattern = r"(?<=from \").*?(?=\")"
# patternにマッチする文字列を配列で取得
matches = re.findall(pattern, text)

# マッチした文字列を置換
for match in matches:
    replaced = match.replace(" ", "_")
    text = text.replace(match, replaced)


# 置換後のファイル全体テキストを出力
print(text)

# 置換後のファイルを出力
with open("./codewars/test_replaced.ts", "w", encoding="utf-8") as file:
    file.write(text)
