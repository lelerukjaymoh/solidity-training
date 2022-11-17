import { Contract, providers, Wallet } from 'ethers';
import contractABI from "../utils/contractABI.json"

export function getContract() {
    // Create a contract instance 

    /**
     * Takes 3 arguments 
     *  - Contract address
     *  - ABI 
     *  - provider / signer
     */

    const contractAddress = "0xc6Fc446dC535Fe5315F2AC29ccC22578d19eeffD"

    const provider = new providers.JsonRpcProvider(process.env.REACT_APP_RPC_URL)
    const signer = new Wallet(process.env.REACT_APP_KEY).connect(provider)

    const contractInstance = new Contract(contractAddress, contractABI, signer)

    return contractInstance
}
