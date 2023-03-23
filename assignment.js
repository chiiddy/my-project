// where x=3
// var i=1
// var count=0
function isPrime(n) {
    if (n===1)
    {
        return false;
    }
    else if(n===2)
    {
        return true;
    }else
    {
        for(var x = 2; x < n; x++)
        {
            if(n % x ===0)
            {
                return false;
            }
    }
        return true;
    }
}
}
