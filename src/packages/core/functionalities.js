import { utils } from "ethers"
import { getContract } from './contract';

const contract = getContract()

export const checkBalance = async () => {
    try {
        const balance = await contract.checkContractBalance()
        const _balance = parseFloat(utils.formatEther(balance)).toFixed(7)

        return _balance

    } catch (error) {
        console.log("Error ", error)
    }
}

export const distribute = async () => {
    try {
        const tx = await contract.distribute()
        const txnResponse = await tx.wait() // Wait for the transaction to be confirmed 
        const events = txnResponse.events   // Access the events emitted

        return events

    } catch (error) {
        console.log("Error distributing funds ", error)
    }
}

export const initRecipients = async (recipients, amounts) => {
    try {
        await contract.initializeRecipients(recipients, amounts)
    } catch (error) {
        console.log("Error ", error)
    }
}