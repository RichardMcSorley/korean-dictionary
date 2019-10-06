# Vocab

1) Why

Whenever there is new data we need to first download the excel spreadsheet files from the open dictionary website https://opendict.korean.go.kr/member/memberDownloadList and save them in this directory.
Use the script provided to parse the files to json and later load into elasticsearch

2) How

Run the script like so `node index.js`

```bash
$ node index.js
=======PARSING FILES=======
Read 610878_100000.xls - 50,000 words
Saved 610878_100000.json
Read 610878_1000000.xls - 50,000 words
Saved 610878_1000000.json
Read 610878_1050000.xls - 50,000 words
Saved 610878_1050000.json
Read 610878_1100000.xls - 50,000 words
Saved 610878_1100000.json
Read 610878_1131478.xls - 31,605 words
Saved 610878_1131478.json
Read 610878_150000.xls - 50,000 words
Saved 610878_150000.json
Read 610878_200000.xls - 50,000 words
Saved 610878_200000.json
Read 610878_250000.xls - 50,000 words
Saved 610878_250000.json
...
```