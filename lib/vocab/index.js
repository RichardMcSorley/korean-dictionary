// Parse Excel data from Korean Open Dictionary https://opendict.korean.go.kr/member/memberDownloadList
const excelToJson = require('convert-excel-to-json')
const fs = require('fs')
const Path = require('path')
const numeral = require('numeral')

function firstSheet(jsonData){
    return jsonData[Object.keys(jsonData)[0]]
}
const sheetOptions = {
        header: {
            rows: 1,
        },
        columnToKey: {
            A: 'vocabulary',
            B: 'word_unit',
            C: 'word_type',
            D: 'romanization',
            E: 'romanCharacter',
            F: 'romanSound',
            G: 'original_language',
            H: 'origin',
            I: 'pronunciation',
            J: 'conjugation',
            K: 'searchVariant',
            L: 'pos',
            M: 'sense_no',
            N: 'definition',
            O: 'region',
            P: 'sentencePattern',
            Q: 'grammar',
            R: 'type',
            S: 'usageExample',
            T: 'category',
            U: 'relation_info',
            V: 'proverb',
            W: 'idiom',
            X: 'substitute',
            Y: 'taxomy',
            Z: 'history',
            AA: 'signLanguage',
            AB: 'policy',
            AC: 'media',
        },
    }
    


const filepath = Path.resolve(__dirname)
fs.readdir(filepath, (err, files) => {
    console.log("=======PARSING FILES=======")
    if (err) {
        return console.error(err)
    }
    const filesWithEXT= files.filter(file => file.split(".").pop() === "xls")
    const [head = null] = filesWithEXT
    if (!head) {
        return console.error("No files to load!")
    }
    let wordCount = 0
    filesWithEXT.forEach((fileName, i) => {
        const words = firstSheet(excelToJson({...sheetOptions,sourceFile: fileName}))
        wordCount = wordCount + words.length
        console.log(`Read ${fileName} - ${numeral(words.length).format('0,0')} words`)

        let [newFileName] = fileName.split('.')
        newFileName = newFileName + '.json'
        fs.writeFileSync(`${newFileName}`, JSON.stringify(words))
        console.log(`Saved ${newFileName}`)
    });
    console.log(`Loaded a total of ${numeral(wordCount).format('0,0')} words`)
});