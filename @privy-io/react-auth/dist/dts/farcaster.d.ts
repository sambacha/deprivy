import { L as LoginToFrame, U as User } from './types-CyPM8Lj_.js';
import '@solana/wallet-adapter-base';
import 'react';
import 'viem';
import '@privy-io/js-sdk-core';
import '@privy-io/public-api';
import 'eventemitter3';
import '@metamask/eth-sig-util';
import '@solana/web3.js';

type UseLoginToFrameInterface = {
    /**
     * Initializes the login to farcaster frames email flow.
     *
     * @returns a Promise that resolves to a nonce that must be signed by the Farcaster wallet.
     */
    initLoginToFrame: () => Promise<{
        nonce: string;
    }>;
    /**
     * Logs in a user into a Farcaster frame with the signed nonce message.
     *
     * @param message - the SIWF message which was signed by the Farcaster wallets
     * @param signature - the signature of the message, verifying the user's Farcaster wallets
     * @param fid - the Farcaster user ID
     */
    loginToFrame: ({ message, signature }: LoginToFrame) => Promise<User | null>;
};
/**
 * @experimental
 *
 * Use this hook to log a user into a Farcaster frame
 *
 * @returns initLoginToFrame - initializes a Farcaster frame login flow.
 * @returns loginToFrame - authenticates a user into a Farcaster frame.
 */
declare const useLoginToFrame: () => UseLoginToFrameInterface;

export { type UseLoginToFrameInterface, useLoginToFrame };
