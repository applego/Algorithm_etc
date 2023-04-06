
NEWFILENAME="7 kyu Summing a number's digits"
touch "codewars/$NEWFILENAME.ts"


NEWFILENAME2="abc002B - 罠"
touch "AtCoder/$NEWFILENAME2.ts"

NEWFILENAME3="ALDS1_4_D_割当"
touch "AOJ/$NEWFILENAME3.ts"


// Go codewars
cd codewars
ginkgo generate "7 kyu All Star Code Challenge #1_test"
ginkgo generate "8 kyu Surface Area and Volume of a Box_test"

// Python codewars
touch "codewars/6 kyu Checkerboard Resolution.py"

// not work
NEWFILENAME4="8 kyu Surface Area and Volume of a Boxt"
echo "$NEWFILENAME4_test"
ginkgo generate "$NEWFILENAME4_test"

touch "codewars/$NEWFILENAME4.go"

// windowsで使用できない文字を_に変換
find /Users/tokoshige_mac/Projects/Atcoder -depth -name '*[<>:"/\\|?*\ ]*' -execdir sh -c 'mv "$1" "$(echo "$1" | perl -pe "s/[<>:\"\/\\\\|?* ]/_/g")"' sh {} \;
