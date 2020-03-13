function cleave(str, words, sentence) {
	if(!sentence) sentence = ""
	words = words.sort((a, b) => {
        return a.length > b.length ? -1: 1})
	for(let i=0; i<words.length; i++) {
		let word = words[i]
		if (str.indexOf(word) === 0) {
			let temp = cleave(str.substring(word.length), words, sentence + " "+word)
			if (temp != "Cleaving stalled: Word not found"){
             return temp
			}
		}
	}
	return str.length > 0 ? 'Cleaving stalled: Word not found' : sentence.trim();
}
const words = ['a', 'after', 'all', 'an', 'and', 'are', 'as', 'by', 'continued', 
'deadlines', 'doubly', 'fish', 'for', 'go', 'happen', 'happened', 'i', 'illusion',
 'is', 'long', 'love', 'lunchtime', 'make', 'moment', 'noise', 'nothing', 'of', 'or', 'people', 'problem', 'second', 
'so', 'summarize', 'summary', 'thanks', 'the', 'then', 'they', 'time', 'to', 'whooshing']
const s1 = 'solongandthanksforallthefish'
console.log(cleave(s1,words))