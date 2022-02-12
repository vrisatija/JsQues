function printArmstrong(n)
{
    for(let number=0;number<=n;number++)
    {
        if(isArmstrong(number))
            console.log(number)
    }   
}
function isArmstrong(number)
{
        let ans=0
        let currentNum=number
        while(currentNum!=0)
        {
            let digit=currentNum%10
            ans+=parseInt(Math.pow(digit,3))
            currentNum=parseInt(currentNum/10)
        }
        if(ans===number)
        {
            return 1
        }
        return 0
}
var input=407;
printArmstrong(input)
