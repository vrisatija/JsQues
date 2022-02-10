function repeatedWords(sentence)
{
    let words=sentence.split(" ")
    let map={}
    for(let i=0;i<words.length;i++)
    {
        let c=map[words[i]];
        let count=c?c:0
        if(count!=0)
        {
            console.log("Yes! sentence has repeating words")
            return
        }
        map[words[i]]=count+1
    }
    console.log("No! sentence has no repeating words")
}
repeatedWords("hi my name is Vriti is")