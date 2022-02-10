function isArmstrong(n)
{
    for(let i=0;i<=n;i++)
    {
        let ans=0
        let num=i
        while(num!=0)
        {
            let digit=num%10
            ans+=parseInt(Math.pow(digit,3))
            num=parseInt(num/10)
        }
    
        if(ans==i)
        {
            console.log(i+ "  ")
        }
    }
}
var input=407;
isArmstrong(input)