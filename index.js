var address = document.getElementById('address')
async function showBalance(){
            const provider = new ethers.providers.JsonRpcProvider("https://mainnet.infura.io/v3/831ae78896a84ca7b8d6354fb96f3dd4");
            const blockNumber = await provider.getBlockNumber(address.value)
            balance = await provider.getBalance(address.value)
            console.log(`Value: ${address.value},\nBlock number: ${blockNumber}\nBalance: ${ethers.utils.formatEther(balance)}`)
             alert(`Value: ${address.value},\nBlock number: ${blockNumber}\nBalance: ${ethers.utils.formatEther(balance)}`)   
}

