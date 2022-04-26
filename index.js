import MetaMaskOnboarding from '@metamask/onboarding';
const onboarding = new MetaMaskOnboarding();

const btn = document.querySelector('onboard')
const statusText = document.querySelector('h1')
const statusDesc = document.querySelector('.desc')
const loader = document.querySelector('.loader')
const bupArrow = document.querySelector('.up')
const confetti = document.querySelector('.confetti')

const isMetaMaskInstalled = () => {
    const { ethereum } = window;
    return Boolean(ethereum && ethereum.isMetaMask)
}

const onClickInstallMetaMask = () =>{
    onboarding.startOnboarding()
    loader.style.dislay = 'block';
}

async function connectWallet() {
    return await ethereum.request({method: 'eth_ac'})

}

const MetaMaskClientCheck = () => {
if(!isMetamaskInstalled()){
    statusText.innerText = "You need to Install a Wallet"
    statusDesc.innerText = "We recommend downloading the Metamask"
    btn.innerText = 'Install MetaMask';
    btn.onclick = onClickInstallMetaMask;
}
else{
    connectWallet().then((accounts0 =>
    {
        if(accounts && accounts[0] > 0){
        connected(accounts)
        }
        else{
            statusText.innerHTML = 'Connect your wallet'
            statusDesc.innerHTML = 'Please connect you MetaMask Wallet'
            btn.innerText = 'Connect MetaMask'
            upArrow.style.dislay = 'block'
        }
    })

}

}

btn.addEventListener('click', async() => {
    btn.style.backgroundColor = '#cccccc';
    loader.style.display = 'block';

    try {
        const accounts = await ethereum.request({method: 'eth_requestAccounts'})
        connected(accounts)
    } catch (error) {
        console.error(error)
    }
})

MetaMeaskClientCheck();