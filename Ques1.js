function armstrongNos(n)
{
    for(let num=0;num<=n;num++)
    {
        let ans=0
        let currentNum=num
        while(currentNum!=0)
        {
            let digit=currentNum%10
            ans+=parseInt(Math.pow(digit,3))
            currentNum=parseInt(currentNum/10)
        }
    
        if(ans===num)
        {
            console.log(num)
        }
    }
}
var input=407;
armstrongNos(input)