import { W as Wallet, j as SolanaFundingConfig, k as SupportedSolanaTransaction, h as SendTransactionModalUIOptions, S as SolanaTransactionReceipt } from './types-CyPM8Lj_.js';
export { f as ConnectedSolanaWallet, l as SolanaAdapterConnector, t as toSolanaWalletConnectors } from './types-CyPM8Lj_.js';
import { P as PrivyEvents } from './useSolanaWallets-lHWYp_2Q.js';
export { U as UseSolanaWalletsInterface, u as useSolanaWallets } from './useSolanaWallets-lHWYp_2Q.js';
import { SendTransactionOptions } from '@solana/wallet-adapter-base';
import { Connection } from '@solana/web3.js';
import 'react';
import 'viem';
import '@privy-io/js-sdk-core';
import '@privy-io/public-api';
import 'eventemitter3';
import '@metamask/eth-sig-util';

interface UseImportWalletInterface {
    /**
     * Imports a private key to be used as an embedded wallet for the user
     * This method will error if the user already has an imported wallet or if they
     * exit in the middle of the flow.
     *
     * @param o Input object
     * @param o.privateKey The base58 private key of the solana wallet to import
     *
     * @returns The imported wallet
     */
    importWallet: (input: {
        privateKey: string;
    }) => Promise<Wallet>;
}
/**
 * Use this hook to import an external solana wallet into an embedded wallet via its private key
 *
 * @returns The `importWallet` method
 */
declare const useImportWallet: () => UseImportWalletInterface;

/**
 * Method to fund a user's Solana wallet via Privy's funding feature by inputting a valid wallet address.
 * You can access the fields and methods documented here via the {@link useFundWallet} hook.
 */
interface UseFundWalletInterface {
    /**
     * Prompt the user to go through the funding flow and for a specified wallet.
     *
     * This will open the modal with a prompt for the user to select a funding method (if multiple are enabled).
     *
     * Once the user continues to the funding flow, Privy will display the funding status screen, and wait
     * for the transaction to complete.
     *
     * Note: Even after a successful funding, funds can take a few minutes to arrive in the user's wallet.
     *
     * Privy currently supports funding via external wallets and Moonpay.
     *
     * @param address typed data payload to be signed
     * @param fundWalletConfig {@link SolanaFundingConfig} Funding configuration to specify chain and funding amount (if enabled)
     */
    fundWallet: (address: string, fundWalletConfig?: SolanaFundingConfig) => Promise<void>;
}
/**
 * Hook to fund a Solana wallet via Privy's fiat on-ramp integration given the wallet address.
 *
 * @param callbacks.onUserExited {@link PrivyEvents} Callback that will execute when a funding flow is exited. This fires when a user closes a funding flow modal, for any reason.
 * @returns fundWallet - function to on-ramp funds to any given Solana wallet
 */
declare const useFundWallet: (callbacks?: PrivyEvents["fundSolanaWallet"]) => UseFundWalletInterface;

declare const useSolanaFundingPlugin: () => void;

/**
 * Method to send a Solana transaction via a user's embedded wallet.
 * You can access the methods documented here via the {@link useSendTransaction} hook from `@privy-io/react-auth/solana`..
 */
interface UseSendTransactionInterface {
    /**
     * Prompts a user to send a transaction using their embedded wallet.
     *
     * This method will error if the user is not authenticated or does not have a solana embedded wallet.
     *
     * If the `config.embeddedWallets.showWalletUIs` property is set to false, the wallet will attempt to send
     * the transaction without prompting the user. Otherwise (the default), Privy will show the user a modal to have
     * them confirm the transaction. This can be customized via the {@link SendTransactionModalUIOptions}.
     *
     * @param o.transaction {SupportedSolanaTransaction} transaction to be sent
     * @param o.connection {Connection} Connection to an SVM (Solana) network.
     * @param o.uiOptions {@link SendTransactionModalUIOptions} (optional) UI options to customize the transaction request modal
     * @param o.transactionOptions {@link SendTransactionOptions} (optional) Transaction options to customize the transaction request
     * @param o.fundWalletConfig {@link SolanaFundingConfig} (optional) Funding configuration to specify cluster and funding amount (if enabled), in the case of insufficient funds
     * @param o.address {optional} address for the embedded wallet sending the transaction. Defaults to the user's embedded wallet at HD index 0.
     */
    sendTransaction: (o: {
        transaction: SupportedSolanaTransaction;
        connection: Connection;
        uiOptions?: SendTransactionModalUIOptions;
        transactionOptions?: SendTransactionOptions;
        fundWalletConfig?: SolanaFundingConfig;
        address?: string;
    }) => Promise<SolanaTransactionReceipt>;
}
/**
 * Use this hook to send a transaction using the embedded wallet and to attach callbacks for success and errors.
 * Transactions sent from the embedded wallet using transaction functions from non-Privy libraries
 * will not trigger the callbacks.
 *
 * @param callbacks.onSuccess {@link PrivyEvents} callback to execute for a successful transaction sent
 * @param callbacks.onError {@link PrivyEvents} callback to execute if there is an error during `sendSolanaTransaction`
 * @returns sendSolanaTransaction - prompts the user send a transaction using their embedded wallet
 */
declare function useSendTransaction(callbacks?: PrivyEvents['sendSolanaTransaction']): UseSendTransactionInterface;

export { SolanaTransactionReceipt, SupportedSolanaTransaction, type UseFundWalletInterface, type UseImportWalletInterface, type UseSendTransactionInterface, useFundWallet, useImportWallet, useSendTransaction, useSolanaFundingPlugin };
